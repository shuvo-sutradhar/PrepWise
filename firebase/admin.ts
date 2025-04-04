import { initializeApp ,getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore as getFireStore } from "firebase-admin/firestore";
const initFirebaseAdmin = () => {

    const apps = getApps();
    if (apps.length === 0) {
        initializeApp({
            credential: cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            })
        });
    }

    return {
        auth: getAuth(),
        db: getFireStore()
    }

 }

 export const { auth, db } = initFirebaseAdmin();