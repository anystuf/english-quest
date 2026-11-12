/** Stores a personally selected textbook only in this browser, without a server or Firebase Storage. */
const DB_NAME = 'english-quest-personal-books';
const STORE_NAME = 'books';
const BOOK_ID = 'global-success-grade7';
export const MAX_LOCAL_PDF_BYTES = 100 * 1024 * 1024;

export type SavedTextbook = {
  id: string;
  name: string;
  blob: Blob;
  savedAt: number;
};

function openBooksDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('This browser does not support offline book storage.'));
      return;
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(STORE_NAME)) {
        request.result.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error('Cannot open offline book storage.'));
    request.onblocked = () => reject(new Error('Close other English Quest tabs and try again.'));
  });
}

export async function getSavedTextbook(): Promise<SavedTextbook | null> {
  const db = await openBooksDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const request = tx.objectStore(STORE_NAME).get(BOOK_ID);
    request.onsuccess = () => resolve((request.result as SavedTextbook | undefined) ?? null);
    request.onerror = () => reject(request.error ?? new Error('Cannot read saved textbook.'));
    tx.oncomplete = () => db.close();
    tx.onerror = () => { db.close(); reject(tx.error ?? new Error('Cannot read saved textbook.')); };
  });
}

export async function saveLocalTextbook(file: File): Promise<void> {
  if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
    throw new Error('Please select a PDF file.');
  }
  if (file.size === 0 || file.size > MAX_LOCAL_PDF_BYTES) {
    throw new Error('The PDF must be between 1 byte and 100 MB.');
  }
  const db = await openBooksDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put({
      id: BOOK_ID, name: file.name, blob: file, savedAt: Date.now(),
    } satisfies SavedTextbook);
    tx.oncomplete = () => { db.close(); resolve(); };
    tx.onerror = () => { db.close(); reject(tx.error ?? new Error('Cannot store PDF in this browser.')); };
    tx.onabort = () => { db.close(); reject(tx.error ?? new Error('Saving the PDF was cancelled.')); };
  });
}

export async function removeLocalTextbook(): Promise<void> {
  const db = await openBooksDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(BOOK_ID);
    tx.oncomplete = () => { db.close(); resolve(); };
    tx.onerror = () => { db.close(); reject(tx.error ?? new Error('Cannot remove saved PDF.')); };
  });
}
