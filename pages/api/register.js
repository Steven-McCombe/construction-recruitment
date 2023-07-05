// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { getAuth } from 'firebase/auth';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     // Extract the form data from the request body
//     const { email, password } = req.body;

//     try {
//       // Create a new user in Firebase
//       const auth = getAuth();
//       await createUserWithEmailAndPassword(auth, email, password);

//       // Return a success response
//       res.status(200).json({ message: 'User registered successfully' });
//     } catch (error) {
//       // Return an error response
//       res.status(500).json({ error: error.message });
//     }
//   } else {
//     // Return an error response for other HTTP methods
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }
