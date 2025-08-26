import Note from "../models/Notes.js"

export async function getAllNotes(_,res) {
    try {
        const notes = await Note.find().sort({createAt:-1});// newest firs(-1 will sort in desc order)
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes controller",error);
        res.status(500).json({message:"Internal server error"});
    }
};


export async function getNoteById(req,res){
    try {
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message:"Note not found"});
        res.json(note);
    } catch (error) {
        console.error("Error in getNoteById controller",error);
        res.status(500).json({message:"Internal server error"});
    }
}

export async function createNotes(req,res) {
    try {
        const {title,content} = req.body;
        const note = new Note({title, content});

        const saveNote = await note.save();
        res.status(201).json(saveNote);
    } catch (error) {
        console.error("Error in CreateNotes controller",error);
        res.status(500).json({message:"Internal server error"});
    }
};

export async function updateNote(req,res) {
    try {
       const {title,content} = req.body;
       const updateNote = await Note.findByIdAndUpdate(req.params.id,{title, content});
       if(!updateNote) return res.status(404).json({message:"Note not found"});

       res.status(200).json({message:"updated successfully"});
    } catch (error) {
        console.error("Error in updateNotes controller",error);
        res.status(500).json({message:"Internal server error"});
    }
};

export async function deleteNote(req,res) {
    try {
        const deleteNote = await Note.findByIdAndDelete(req.params.id);
        if(!deleteNote) return res.status(404).json({message:"Note not found"});
        res.status(200).json({message:"Note deleted successfully"});
    } catch (error) {
        console.error("Error in deletNotes controller",error);
        res.status(500).json({message:"Internal server error"});
    }    

};