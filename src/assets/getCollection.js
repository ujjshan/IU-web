import React, { useState } from 'react';
import { db } from "../firebase/config";
import { collection, doc, setDoc } from "firebase/firestore";

const useCollection = () => {
  const [error, setError] = useState(null);

  const adding = async (data) => {
    setError(null);
    const chats = collection(db, "IUBH");
    try {
      await setDoc(doc(chats), data);
      console.log("created");
    } catch (err) {
      console.log(err.message);
    }
  };

  return { adding, error };
};

export default useCollection;
