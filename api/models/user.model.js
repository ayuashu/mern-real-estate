import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../index.js';

const User = async (userData) => {
  try {
    // Add a timestamp to the user data
    userData.timestamp = Timestamp.fromDate(new Date());
    
    // Add user data to the Firestore "users" collection
    const docRef = await addDoc(collection(db, 'users'), userData);
    console.log('User added with ID:', docRef.id);
  } catch (error) {
    console.error('Error adding user:', error);
  }
};

export default User;
