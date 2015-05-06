import EventEmitter from 'eventemitter3';

export default function () {

  const emitter = new EventEmitter();

  let nextId = 0;

  let notes = [];

  const actions = {
    createNote: function (content) {
      nextId++;
      notes = notes.concat({
        id: nextId,
        content: content
      });
      emitter.emit('change');
    },
    deleteNote: function (id) {
      notes = notes.filter((note) => {
        return note.id !== id;
      });
      emitter.emit('change');
    }
  };

  return {

    notes: function () {
      return notes;
    },

    actions,

    on: emitter.on.bind(emitter),

    off: emitter.off.bind(emitter)
  };

}
