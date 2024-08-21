import express from 'express';
import connectDB from './config/db.js';
import { user } from './rotues/user.routes.js';
// import authRoutes from './routes/auth.js';

const app = express();
app.use(express.json());  
connectDB();
app.use(user)

// app.use(express.json());
// app.use('/api/auth', authRoutes);

app.listen(process.env.PORT || 5000,(request,response) =>{
  console.log("Yes your server connected with PORT:3002");
})