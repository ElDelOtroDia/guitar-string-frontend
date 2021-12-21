import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyCCPVD21sypHoG39PfD_nI6N3L_g4znnXs",
  authDomain: "pruebas-b42f0.firebaseapp.com",
  project_id: "pruebas-b42f0",
  storageBucket: "pruebas-b42f0.appspot.com",
  appId: "1:552824472112:android:b27bc05ee34f4f8f48e3f5",
};

export const app = initializeApp(firebaseConfig)
export const storage = getStorage()