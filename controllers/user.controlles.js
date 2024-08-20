// import jwt from "jsonwebtoken";
// import User from "../models/user.model.js";

// export const signup = async (req, res) => {
//   try {
//     const InUsername = await User.findOne({ username: req.body.username });
//     const InPassword = await User.findOne({password:req.body.password});
   
//     if (InUsername) {
//      res.send({
//         status:false,
//         msg:"Username alreday exist .",
//         data:{}
//      })
//     }else if (InPassword) {
//         res.send({
//             status:false,
//             msg:"password alreday exist ",
//             data:{}
//         })
        
//     }else{
 
//         var user = await User.create(res.body)
//         if (user) {
//             user.token= await jwt.sign({time:Date(),userId:user._id},"coaching")
//             res.send({
//                 status: true,
//                 msg: "Signup Successfully.",
//                 data: user
//             })

            
//         }
//     }
    
    
    
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };



import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the required fields are present
    if (!username || !password) {
      return res.status(400).json({
        status: false,
        msg: "Username and password are required.",
        data: {},
      });
    }

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    const existingPasswrod = await User.findOne({ password });
    if (existingUser) {
      return res.status(400).json({
        status: false,
        msg: "Username already exists.",
        data: {},
      });
    }else if (existingPasswrod) {
        return res.status(400).json({
            status: false,
            msg: "password already exists.",
            data: {},
          }); 
    }

    // Create the new user
    const user = await User.create({ username, password });

    if (user) {
      // Generate a token for the user
      user.token = jwt.sign(
        { time: Date(), userId: user._id },
        "coaching",
        { expiresIn: "1h" } // Set token expiry time
      );

      // Save the user with the token
      await user.save();

      // Respond with success message
      return res.status(201).json({
        status: true,
        msg: "Signup successfully.",
        data: user,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the required fields are present
    if (!username || !password) {
      return res.status(400).json({
        status: false,
        msg: "Username and password are required.",
        data: {},
      });
    }

    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        status: false,
        msg: "Invalid username or password.",
        data: {},
      });
    }

    // Check if the password is correct
    if (user.password !== password) {
      return res.status(400).json({
        status: false,
        msg: "Invalid username or password.",
        data: {},
      });
    }

    // Respond with success message (no token)
    return res.status(200).json({
      status: true,
      msg: "Login successful.",
      data: user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};






