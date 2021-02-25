const router = require("express").Router();
const store = require("../db/store");

router.get("/notes", (req, res) => {
    store.read(notes => {
        console.log(notes);
        return res.json(notes);
    }); 
});

//post
router.post("/notes", (req, res) => {
    const note = req.body;
    store.write(note, (data) => {
        return res.json(data);
    });
});

// delete
router.delete("/notes/:id", (req, res) => {
    const id = req.params.id;
    store.deleteNote(id, (data) => {
        return res.json(data);
    });
});

module.exports = router;

