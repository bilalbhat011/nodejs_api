import { login, signup } from "../controllers/user.controlles.js";
import Express from "express";
export const user =Express.Router()
user.route("/user/signup").post(signup);
user.route("/user/login").post(login)