import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env['FIREBASE_API_KEY'],
    authDomain: process.env['FIREBASE_AUTH_DOMAIN'],
    projectId: process.env['FIREBASE_PROJECT_ID'],
    storageBucket: process.env['FIREBASE_STORAGE_BUCKET'],
    messagingSenderId: process.env['FIREBASE_MESSAGING_SENDER_ID'],
    appId: process.env['FIREBASE_APP_ID'],
    measurementId: process.env['FIREBASE_MEASUREMENT_ID'],
    databaseURL: (() => {
        if(process.env.NODE_ENV === 'development') return process.env['FIREBASE_DATABASE_URL_DEV'];
        if(process.env.NODE_ENV === 'production') return process.env['FIREBASE_DATABASE_URL_PROD'];
        return undefined;
    })()
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAnalytics = process.env.NODE_ENV === 'production' ? getAnalytics(firebaseApp) : {};
export const firebaseDB = getDatabase(firebaseApp);

