import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBKJL0AN6VODtZVRzyWJXYNDz8TEhZGJvo",
    authDomain: "qualyteamtest.firebaseapp.com",
    projectId: "qualyteamtest",
    storageBucket: "qualyteamtest.appspot.com",
    messagingSenderId: "830685913218",
    appId: "1:830685913218:web:4263f774292985fc02949b",
    measurementId: "G-1GH3T2VSX9"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage()


