import React from 'react';
import createStore from '../store';
import NoteList from './note-list';

const store = createStore();

const App = React.createClass({

  getInitialState: function () {
    return {
      notes: store.notes()
    };
  },

  onChange: function () {
    this.setState({
      notes: store.notes()
    });
  },

  componentDidMount: function () {
    store.on('change', this.onChange);
  },

  componentWillUnmount: function () {
    store.off('change', this.onChange);
  },

  render: function () {
    return (
      <div>
        <h1>Naive App</h1>
        <NoteList notes={store.notes()} actions={store.actions}/>
      </div>
    );
  }
});

export default App;
