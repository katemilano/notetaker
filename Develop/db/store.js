const util = require("util");
const fs = require("fs");

// const uuidv1 = require("uuid/v1");

const readfileasync = util.promisify(fs.readFile);
const writefileasync = util.promisify(fs.writeFile);


class Store{
    read() {
        return readfileasync("db/db.json", "utf8")
    }
    write(note) {
        return writefileasync("db/db.json", JSON.stringify(note))
    }
    getNote(){
        return this.getNote("db/db.json", "utf8")
    }
    addNote(notes){
        return this.addNote("db/db.json", JSON.stringify(note))
        //needs something to pass through 
    }
    removeNote(){
        //something we generated earlier needs id 
    }

}
