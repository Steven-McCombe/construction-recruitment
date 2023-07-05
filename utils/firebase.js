import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

let analytics = null;

if (typeof window !== 'undefined') {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  };

  // Initialize Firebase and analytics only in the browser environment
  const app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
}

export { analytics };
