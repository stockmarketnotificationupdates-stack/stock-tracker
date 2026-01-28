import { db } from "@/lib/firebase/client";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

/**
 * Firestore structure:
 * users/{uid} {
 *   watchlist: string[]
 * }
 */

export async function getWatchlist(uid: string): Promise<string[]> {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) return [];

  return snap.data().watchlist || [];
}

export async function addToWatchlist(uid: string, symbol: string) {
  const ref = doc(db, "users", uid);

  await setDoc(
    ref,
    {
      watchlist: arrayUnion(symbol),
    },
    { merge: true }
  );
}

export async function removeFromWatchlist(uid: string, symbol: string) {
  const ref = doc(db, "users", uid);

  await updateDoc(ref, {
    watchlist: arrayRemove(symbol),
  });
}

export async function isInWatchlist(
  uid: string,
  symbol: string
): Promise<boolean> {
  const list = await getWatchlist(uid);
  return list.includes(symbol);
}
