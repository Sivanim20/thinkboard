import mongoose from "mongoose";

//creating schema

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required: true
    },
},
{timestamps:true}
);
//creating model
const Note = mongoose.model("Note", noteSchema)

export default Note;