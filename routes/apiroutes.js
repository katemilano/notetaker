const router = require("express").Router();
const store = require("../Develop/db/store");

router.get("/notes", (req, res) => {
    store
    .getNotes()
    .then((notes) => {
        return res.json(notes);
    })
    .catch((err) => res.status(500).json(err))
})

//delete

module.exports = router;

