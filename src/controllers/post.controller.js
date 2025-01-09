import posttable from "../models/posts.model.js";
export const createNewpost = async (req, res) => {
    try {
        const { title, description,comment, author } = req.body;
        const newpost = await posttable.create({title, description,comment, author });
        return res.status(201).json({
            status: "post added successfully👍",
            data: newpost
        });

    } catch (error) {
        return res.status(400).json({
            status: "oops!user not added😢",
            message: error.message
        });
    }
}