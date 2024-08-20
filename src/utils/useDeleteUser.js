import React from 'react'
import { db } from '../firebase';
import { deleteDoc, doc } from 'firebase/firestore';

const useDeleteUser = (id) => {
    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
      };

      deleteUser(id)
}

export default useDeleteUser