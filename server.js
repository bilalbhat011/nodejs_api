// import dotenv from "dotenv"
// dotenv.config()

// import express from 'express';
// import connectDB from './config/db.js';
// import { user } from './rotues/user.routes.js';
// import cors from "cors";
// // import authRoutes from './routes/auth.js';

// const app = express();
// app.use(express.json());  
// connectDB();
// app.use(cors());

// app.use(user)

// // app.use(express.json());
// // app.use('/api/auth', authRoutes);

// app.listen(process.env.PORT || 5000,(request,response) =>{
//   console.log("Yes your server connected with PORT:3002");
// })


import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import connectDB from './config/db.js';
import cors from "cors";
import { user } from "./rotues/user.routes.js";

const app = express();
app.use(express.json());  
connectDB();
app.use(cors());

app.use(user);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Yes, your server is connected with PORT: ${process.env.PORT || 5000}`);
});
