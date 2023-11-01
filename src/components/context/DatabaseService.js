import {
  collection,
  addDoc,
  onSnapshot,
  query,
  Firestore,
} from "firebase/firestore";
import db from "../../Firebase";
import React, { useEffect } from "react";
import { Button } from "bootstrap";

export const addNewUser = async (uid, email, name, image, createdAt) => {
  try {
    await addDoc(collection(db, "Users"), {
      uid,
      email,
      name,
      image,
      createdAt,
    });
  } catch (error) {
    console.log("Error in addNewUser", error.message);
  }
};

export const getUserData = (email) => {
  return new Promise((resolve, reject) => {
    let userData = {};
    try {
      const q = query(collection(db, "Users"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().email === email) {
            userData = doc.data();
          }
        });
        resolve(userData);

        // Unsubscribe from further updates
        unsubscribe();
      });
    } catch (error) {
      console.log("Error in getUsersDataFromDB", error.message);
      // Reject the promise with the error
      reject(error);
    }
  });
};
