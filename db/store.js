const fs = require("fs");
const { v4: uuidv4}  = require("uuid");

const read = (cb) => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
        cb(data ? JSON.parse(data) : []);
    });
};

const write = (note, cb) => {
    const newNote = {...note, id: uuidv4()};

    read((allNotes) => {
        fs.writeFile("db/db.json", JSON.stringify([...allNotes, newNote]), (err) => {
            if (err) throw err;
            read((data) => {
                cb(data);
            });
        });
    });
};

const deleteNote = (id, cb) => {
    read(allNotes => {
        const filtered = allNotes.filter(note => note.id !== id);

        fs.writeFile("db/db.json", JSON.stringify(filtered), (err) => {
            if (err) throw err;
            read((data) => {
                cb(data);
            });
        });
    });
}

module.exports = {
    read, write, deleteNote
};
