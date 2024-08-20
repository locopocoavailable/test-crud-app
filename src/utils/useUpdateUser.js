import { doc, updateDoc } from 'firebase/firestore';
import React from 'react'
import { db } from '../firebase';

const useUpdateUser = (id,newName, NewAge,newNickNames) => {
    const updateUser = async (id,newName,NewAge,newNickNames) => {
        console.log(newNickNames)
        const userDoc = doc(db, "users", id);
        const newFields = { name : newName,age: NewAge,nickNames:newNickNames };
        await updateDoc(userDoc, newFields);
      };

      updateUser(id,newName,NewAge,newNickNames)
}

export default useUpdateUser