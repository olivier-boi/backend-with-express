
import usertable from "../models/users.model.js";

// create new user (add user to database)
export const createNewUser = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        const newuser = await usertable.create({ name, phone, email, password });
        return res.status(201).json({
            status: "user added successfully👍",
            data: newuser
        });

    } catch (error) {
        return res.status(400).json({
            status: "oops!user not added😢",
            message: error.message
        });
    }
}



//select all from table (all users)

export const selectAllusers = async (req, res) => {
    try {
        const users = await usertable.find();
        return res.status(200).json({
            status: "success to select all user",
            data: users
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "error",
            message: "failed to select all user",
            error: error.message
        })
    }
}


// select single user(one user)
export const selectSingleuser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await usertable.findById(id);
        return res.status(200).json({
            status: "success to select single user",
            data: user
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "error",
            message: "failed to select single  user",
            error: error.message
        })
    }
} 


//update user
export const UpdateUser = async (req, res) => {
    try {
        const { id } = req.body;
        const user = await usertable.findByIdAndUpdate(id);
        return res.status(200).json({
            status: "success to update user",
            data: user
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "error",
            message: "failed to update  user",
            error: error.message
        })
    }
} 

//delete user from  table

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await usertable.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({
                message:"user not found"
            })
        }
        return res.status(200).json({
            status: "success to delete user",
            data: user
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "error",
            message: "failed to delete  user",
            error: error.message
        })
    }
} 