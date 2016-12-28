'use strict';

var BugRow = React.createClass({
  displayName: 'BugRow',

  render: function render() {
    console.log('rendering BugRow', this.props.bug);
    return React.createElement(
      'tr',
      null,
      React.createElement(
        'td',
        null,
        this.props.bug.id
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
    console.log('rendering BugFilter');
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
    console.log('rendering bug table, num items: ', this.props.bugs.length);
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

  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    var form = document.forms.bugAdd;
    this.props.addBug({ owner: form.owner.value, title: form.title.value, status: 'new', priority: 'P1' });
    form.owner.value = '';
    form.title.value = '';
  },

  render: function render() {
    console.log('rendering BugAdd');
    return React.createElement(
      'div',
      null,
      React.createElement(
        'form',
        { name: 'bugAdd' },
        React.createElement('input', { type: 'text', name: 'owner', placeholder: 'Owner' }),
        React.createElement('input', { type: 'text', name: 'title', placeholder: 'Title' }),
        React.createElement(
          'button',
          { onClick: this.handleSubmit },
          'Add Bug'
        )
      )
    );
  }
});

var BugList = React.createClass({
  displayName: 'BugList',

  getInitialState: function getInitialState() {
    return { bugs: bugData };
  },

  addBug: function addBug(bug) {
    console.log('Adding bug: ', bug);
    //advised not to modify state (its immutable) so make a copy.
    var bugsModified = this.state.bugs.slice();
    bug.id = this.state.bugs.length + 1;
    bugsModified.push(bug);
    this.setState({ bugs: bugsModified });
  },

  render: function render() {
    console.log('rendering BugList, num items: ', this.state.bugs.length);
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
      React.createElement(BugTable, { bugs: this.state.bugs }),
      React.createElement('hr', null),
      React.createElement(BugAdd, { addBug: this.addBug })
    );
  }
});

var bugData = [{ id: 1, priority: 'P1', status: 'open', owner: 'Matan', title: 'App crashes on open' }, { id: 2, priority: 'P2', status: 'new', owner: 'Fred', title: 'Misaligned border on panel' }];

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));