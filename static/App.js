'use strict';

var BugRow = React.createClass({
  displayName: 'BugRow',

  render: function render() {
    return React.createElement(
      'tr',
      null,
      React.createElement(
        'td',
        null,
        this.props.id
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.status
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.priority
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.owner
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.title
      )
    );
  }
});

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
    var bugRows = this.props.bugs.map(function (bug) {
      return React.createElement(BugRow, { key: bug.id, bug: bug });
    });
    return React.createElement(
      'table',
      null,
      React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          null,
          React.createElement(
            'th',
            null,
            'ID'
          ),
          React.createElement(
            'th',
            null,
            'Status'
          ),
          React.createElement(
            'th',
            null,
            'Priority'
          ),
          React.createElement(
            'th',
            null,
            'Owner'
          ),
          React.createElement(
            'th',
            null,
            'Title'
          )
        )
      ),
      React.createElement(
        'tbody',
        null,
        bugRows
      )
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
      React.createElement(
        'h1',
        null,
        ' Bug Tracker '
      ),
      React.createElement(BugFilter, null),
      React.createElement('hr', null),
      React.createElement(BugTable, { bugs: bugData }),
      React.createElement('hr', null),
      React.createElement(BugAdd, null)
    );
  }
});

var bugData = [{ id: 1, priority: 'P1', status: 'open', owner: 'Matan', title: 'App crashes on open' }, { id: 2, priority: 'P2', status: 'new', owner: 'Fred', title: 'Misaligned border on panel' }];

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));