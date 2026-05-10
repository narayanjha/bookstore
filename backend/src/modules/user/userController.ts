import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import {pool} from "../../config/db.ts";

import {
  GET_PASSWORD_BY_ID,
  GET_USER_BY_ID,
  UPDATE_PASSWORD,
  UPDATE_USER
} from "./userQuery";


// GET USER
export const getUser =
async (
  req: Request,
  res: Response
) => {

  try {

    const { id } = req.params;

    const result =
      await pool.query(
        GET_USER_BY_ID,
        [id]
      );

    if (
      result.rows.length === 0
    ) {

      return res.status(404)
      .json({
        message: "User not found"
      });

    }

    res.json(result.rows[0]);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });

  }

};


// UPDATE USER
export const updateUser = async (req: Request,res: Response) => {

  try {

    const { id } = req.params;

    const {
      name,
      email,
      mobile,
      address
    } = req.body;

    let profileImage = null;

    if (req.file) {

      profileImage =
        `/profile/${req.file.filename}`;

    }

    // GET OLD IMAGE
    const existingUser =
      await pool.query(
        "SELECT profile_image FROM users WHERE id=$1",
        [id]
      );

    if (
      !profileImage &&
      existingUser.rows.length > 0
    ) {

      profileImage =
        existingUser.rows[0]
        .profile_image;

    }

    const result =
      await pool.query(
        UPDATE_USER,
        [
          name,
          email,
          mobile,
          address,
          profileImage,
          id
        ]
      );

    res.json({
      message:
        "Profile updated successfully",
      user: result.rows[0]
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });

  }

};

// CHANGE PASSWORD
export const changePassword =async (req: Request,res: Response) => {

  try {

    const { id } = req.params;
    const { oldPassword,newPassword} = req.body;

    // VALIDATION
    if (!oldPassword ||!newPassword) {

      return res.status(400)
      .json({
        message:
          "All fields are required"
      });

    }

    // GET USER PASSWORD
    const userResult = await pool.query(GET_PASSWORD_BY_ID,[id]
      );

    if (userResult.rows.length === 0) {
      return res.status(404)
      .json({
        message: "User not found"
      });

    }

    const user = userResult.rows[0];

    // VERIFY OLD PASSWORD
    const isMatch = await bcrypt.compare(oldPassword,user.password);

    if (!isMatch) {
      return res.status(400)
      .json({
        message:
          "Old password incorrect"
      });

    }

    // HASH NEW PASSWORD
    const hashedPassword = await bcrypt.hash(newPassword,10);

    // UPDATE PASSWORD
    await pool.query(UPDATE_PASSWORD,[hashedPassword,id]);

    res.json({
      message:
        "Password changed successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });

  }

};