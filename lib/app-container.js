import React from 'react';
import Router from 'react-router';

const AppContainer = React.createClass({

  render: function () {
    return (
      <div>
        <Router.RouteHandler/>
      </div>
    );
  }
});

export default AppContainer;
