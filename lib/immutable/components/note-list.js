import React from 'react/addons';

const PureRenderMixin = React.addons.PureRenderMixin;

import Note from './note';

const NoteList = React.createClass({

  mixins: [PureRenderMixin],

  onAdd: function () {
    this.props.actions.createNote('');
  },

  render: function () {
    return (
      <div>
        <ul>
        {
          this.props.notes.map((note) => (
            <Note key={note.id} note={note} actions={this.props.actions}/>
          ))
        }
        </ul>
        <button onClick={this.onAdd}>Add Note</button>
      </div>
    );
  }
});

export default NoteList;
