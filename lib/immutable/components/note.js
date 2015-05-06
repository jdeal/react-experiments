import React from 'react/addons';

const PureRenderMixin = React.addons.PureRenderMixin;

const Note = React.createClass({

  mixins: [PureRenderMixin],

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
