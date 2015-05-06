import React from 'react';

const Note = React.createClass({

  onDelete: function () {
    this.props.actions.deleteNote(this.props.note.id);
  },

  render: function () {

    console.log('rendering:', this.props.note.id);

    return (
      <li>
        ({this.props.note.id}) {this.props.note.content}
        <button onClick={this.onDelete}>Delete</button>
      </li>
    );
  }
});

export default Note;
