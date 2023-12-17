import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import bcryptjs from 'bcryptjs';
import { db } from "../index.js";

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
  
    // Check if a user with the same username and email already exists
    const usersCollection = collection(db, 'users');
    const userQuery = query(
      usersCollection,
      where('username', '==', username),
      where('email', '==', email)
    );
  
    const querySnapshot = await getDocs(userQuery);
  
    if (!querySnapshot.empty) {
      return res.status(400).json("Username and email combination already exists");
    }
  
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = { username, email, password: hashedPassword };
  
    try {
      // Add the new user to the Firestore "users" collection
      const docRef = await addDoc(usersCollection, newUser);
      console.log('User added with ID:', docRef.id);
      res.status(201).json("User created Successfully");
    } catch (error) {
      console.error('Error adding user:', error);
      res.status(500).json(error.message);
    }
};
