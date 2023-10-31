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
const DatabaseService = () => {
  const [todos, setTodos] = React.useState([]);
  const [databaseInof, setdatabaseInfo] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "Users"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setdatabaseInfo(todosArray);
      console.log("data", todosArray);
    });
    return () => unsub();
  }, []);

  const addData = async () => {
    let email = "pmalav850@gmail.com";
    //  let id = "dxH1hAHn8BbaEtx6vOJe"
    let mobNo = 8955558333;
    let name = "piyusdh";
    await addDoc(collection(db, "Users"), {
      email,
      mobNo,
      name,
    });
  };

  return <button onClick={addData}>Add Data</button>;
};

export default DatabaseService;
