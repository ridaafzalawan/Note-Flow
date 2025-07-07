const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');

// ✅ Fetch all notes
router.get('/fetchallnotes', fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json({ success: true, notes });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// ✅ Add note
router.post('/addnote', fetchuser,
  [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be at least 5 characters').isLength({ min: 5 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
      }

      const { title, description, tag } = req.body;

      const note = new Notes({
        title, description, tag, user: req.user.id
      });

      const savedNote = await note.save();
      res.json({ success: true, savedNote });

    } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  }
);

// ✅ Update note
router.put('/updatenote/:id', fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  const newNote = {};
  if (title) newNote.title = title;
  if (description) newNote.description = description;
  if (tag) newNote.tag = tag;

  try {
    let note = await Notes.findById(req.params.id);
    if (!note) return res.status(404).json({ success: false, error: "Not Found" });

    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ success: false, error: "Unauthorized" });
    }

    note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
    res.json({ success: true, note });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// ✅ Delete note
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
  try {
    let note = await Notes.findById(req.params.id);
    if (!note) return res.status(404).json({ success: false, error: "Not Found" });

    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ success: false, error: "Unauthorized" });
    }

    await Notes.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Note has been deleted" });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

module.exports = router;
