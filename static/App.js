'use strict';

var BugFilter = React.createClass({
  displayName: 'BugFilter',

  render: function render() {
    return React.createElement(
      'div',
      null,
      'section is meant for a filter'
    );
  }
});

var BugTable = React.createClass({
  displayName: 'BugTable',

  render: function render() {
    return React.createElement(
      'div',
      null,
      'A table to list all the bugs'
    );
  }
});

var BugAdd = React.createClass({
  displayName: 'BugAdd',

  render: function render() {
    return React.createElement(
      'div',
      null,
      'a form to add a new bug'
    );
  }
});

var BugList = React.createClass({
  displayName: 'BugList',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(BugFilter, null),
      React.createElement(BugTable, null),
      React.createElement(BugAdd, null)
    );
  }
});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));