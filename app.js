const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

var titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

var bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
  .command('add', 'Add a new note', {
      title:  titleOptions,
      body: bodyOptions
  })
  .command('list', 'List all note')
  .command('read', 'Read a note', {
      title: titleOptions
  })
  .command('remove', 'Delete a note', {
      title: titleOptions
  })
  .help()
  .argv;
var command = process.argv[2];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note added');
        notes.logNote(note);
    } else {
        console.log('Note already taken');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    console.log('Note found');
    notes.logNote(note);
} else if (command === 'remove') {
    var noteRemoved = notes.deleteNote(argv.title);
    var message = noteRemoved ? "Note was removed" : "Note not found";
    console.log(message);
} else {
    console.log('Command not recognize');
}
