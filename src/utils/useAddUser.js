import React from 'react'
import { addDoc, collection } from 'firebase/firestore';
import {db} from "../firebase"

const useAddUser = (newName,newAge,newNickNames) => {
    const usersCollectionRef = collection(db, "users");

    console.log(newName)

    const createUser = async (newName,newAge,newNickNames) => {
        await addDoc(usersCollectionRef, { name: newName, age: Number(newAge),nickNames:newNickNames });
      };

      createUser(newName,newAge,newNickNames)
}

export default useAddUser