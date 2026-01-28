"use client";

import { useState } from "react";
import { storage, db } from "@/lib/firebase/client";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import { Camera } from "lucide-react";

export default function ProfileAvatar({ uid }: { uid: string }) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (file: File) => {
    if (!auth.currentUser) return;

    try {
      setUploading(true);

      const avatarRef = ref(storage, `avatars/${uid}`);
      await uploadBytes(avatarRef, file);

      const url = await getDownloadURL(avatarRef);

      // 🔑 Update Firebase Auth (source of truth)
      await updateProfile(auth.currentUser, {
        photoURL: url,
      });

      // 🪞 Mirror into Firestore
      await setDoc(
        doc(db, "users", uid),
        { avatar: url },
        { merge: true }
      );
    } catch (err) {
      console.error("Avatar upload failed:", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <label className="relative w-20 h-20 rounded-full bg-muted flex items-center justify-center cursor-pointer border hover:opacity-80 transition">
        <Camera className="text-muted-foreground" />
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={(e) =>
            e.target.files && handleUpload(e.target.files[0])
          }
        />
      </label>

      <div className="text-sm text-muted-foreground">
        {uploading ? "Uploading..." : "Change profile picture"}
      </div>
    </div>
  );
}
