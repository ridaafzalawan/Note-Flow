const express = require ('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body } = require('express-validator');


// Route 1 : GET ALL THE NOTES USING GET: "/api/notes/fetchallnotes"
router.get('/fetchallnotes',fetchuser , 
   async(req , res)=>{

      try {
         const notes = await Notes.find({user:req.user.id});
         res.json(notes)
      } catch (error) {
         console.error(error.message);
            res.status(500).send("Internal Server Error");
      }
  
});



// Route 2 : Add Note USING post: "/api/notes/fetchallnotes"
router.post('/addnote',fetchuser , 
   [
      body('title', 'Enter a valid title').isLength({ min: 3 }),
      body('email', 'Enter a valid email').isLength({ min: 5 })
   ],
   async(req , res)=>{

   try {
      const {title , description ,tag} = req.body;
      const note = new Notes({
         title , description ,tag , user:req.user.id
      })
      const savedNote = await note.save()
      res.json(savedNote)
   } catch (error) {
      console.error(error.message);
            res.status(500).send("Internal Server Error");
   }
      
})

// Route 3 : update existing note USING PUT: "/api/notes/updatenote/:id"
router.put('/updatenote/:id', fetchuser, async (req, res) => {
   const { title, description, tag } = req.body;

   try {
      // Create a newNote object with updated fields
      const newNote = {};
      if (title) { newNote.title = title; }
      if (description) { newNote.description = description; }
      if (tag) { newNote.tag = tag; }

      // Find the note to be updated and check if it exists
      let note = await Notes.findById(req.params.id);
      if (!note) {
         return res.status(404).send("Not Found");
      }

      // Check if the user owns the note
      if (note.user.toString() !== req.user.id) {
         return res.status(401).send("Unauthorized");
      }

      // Update the note
      note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
      res.json({ note });
   } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
   }
});

// Route 4 : delete existing note USING delete: "/api/notes/updatenote/:id"
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

   try {
      
      // Find the note to be updated and check if it exists
      let note = await Notes.findById(req.params.id);
      if (!note) {
         return res.status(404).send("Not Found");
      }

      // Allows deletion if the user owns the note
      if (note.user.toString() !== req.user.id) {
         return res.status(401).send("Unauthorized");
      }

      // Update the note
      note = await Notes.findByIdAndDelete(req.params.id);
      res.json({ "Success":"Note has been Deleted" });
   } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
   }
});
module.exports = router