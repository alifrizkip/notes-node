console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note :', title, body);
}

var getAll = () => {
    console.log('Getting all notes');
}

var readNote = (title) => {
    console.log('Reading note', title);
}

var removeNote = (title) => {
    console.log('Remove note', title);
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
}
