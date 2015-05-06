import EventEmitter from 'eventemitter3';
import _ from 'lodash';

export default function () {

  const emitter = new EventEmitter();

  let nextId = 0;

  const notes = [];

  const actions = {
    createNote: function (content) {
      nextId++;
      notes.push({
        id: nextId,
        content: content
      });
      emitter.emit('change');
    },
    deleteNote: function (id) {
      const index = _.findIndex(notes, (note) => note.id === id);
      if (index >= 0) {
        notes.splice(index, 1);
      }
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
