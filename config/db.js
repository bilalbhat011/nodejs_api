// import mongoose from 'mongoose';

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://mohammadbhati2121:wIPLiEUyGoZ6tOWi@demodatabase.im9wljz.mongodb.net/', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection failed:', error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;


import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://mohammadbhati2121:wIPLiEUyGoZ6tOWi@demodatabase.im9wljz.mongodb.net/');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;

