
import infotable from "../models/tasks.model.js";

// create new blogs
export const information = async (req, res) => {
    try {
        const { date, title, description, author, comment } = req.body;
        const info = await infotable.create({ date, title, description, author, comment });
        return res.status(201).json({
            status: "successfully",
            data: info
        });

    } catch (error) {
        return res.status(400).json({
            status: "oops! error found!!",
            error: error.status
        });
    }
}

// select all blogs information
export const selectallblogs = async (req, res) => {
    try {
        const info = await infotable.find();
        return res.status(200).json({
            status: "success to select all blogs information",
            data: info
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "error",
            message: "failed to select all blogs information",
            error: error.message
        })
    }
}

//select single blogs information
export const selectsingleblogs = async (req, res) => {
    try {
        const { id } = req.params
        const info = await infotable.findById(id);
        return res.status(200).json({
            status: "success to select single blog",
            data: info
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "error",
            message: "failed to select single  blog",
            error: error.message
        })
    }
}
//update blogs information
export const Updateblogs = async (req, res) => {
    try {
        const { id } = req.params;
        const { date, title, description, author, comment } = req.body;

        await infotable.findByIdAndUpdate(id, { date, title, description, author, comment });
        return res.status(200).json({
            status: "success to update blogs information",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "error",
            message: "failed to update  blogs information",
            error: error.message
        })
    }
}
//delete blogs

export const deleteinfo = async (req, res) => {
    try {
        const { id } = req.params;
        const info = await infotable.findByIdAndDelete(id);
        if (!info) {
            return res.status(404).json({
                message: "user not found"
            })
        }
        return res.status(200).json({
            status: "success to delete blogs",
            data: info
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "error",
            message: "failed to delete  blogs",
            error: error.message
        })
    }
} 
