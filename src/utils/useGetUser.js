import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';

const useGetUser = () => {
    const [users, setUsers] = useState([])
    const usersCollectionRef = collection(db, "users");

    
    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          
        };
    
        getUsers();
      }, []);

      return users
}

export default useGetUser