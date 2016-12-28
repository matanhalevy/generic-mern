var BugRow = React.createClass({
  render: function() {
    console.log('rendering BugRow', this.props.bug);
    return (
      <tr>
        <td>{this.props.bug.id}</td>
        <td>{this.props.bug.status}</td>
        <td>{this.props.bug.priority}</td>
        <td>{this.props.bug.owner}</td>
        <td>{this.props.bug.title}</td>
      </tr>
    )
  }
})

var BugFilter = React.createClass({
  render: function() {
    console.log('rendering BugFilter');
    return (
      <div>section is meant for a filter</div>
    )
  }
})

var BugTable =  React.createClass({


  render: function() {
    console.log('rendering bug table, num items: ', this.props.bugs.length);
    var bugRows = this.props.bugs.map(function(bug) {
      return <BugRow key={bug.id} bug={bug} />
    })
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Owner</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {bugRows}
        </tbody>
      </table>
    )
  }
})

var BugAdd = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var form = document.forms.bugAdd;
    this.props.addBug({owner:form.owner.value, title: form.title.value, status: 'new', priority:'P1'});
    form.owner.value = '';
    form.title.value = '';
  },

  render: function() {
    console.log('rendering BugAdd');
    return (
      <div>
        <form name='bugAdd'>
          <input type='text' name='owner' placeholder='Owner' />
          <input type='text' name='title' placeholder='Title' />
          <button onClick={this.handleSubmit}>Add Bug</button>
        </form>
      </div>
    )
  }
})

var BugList = React.createClass({
  getInitialState: function() {
    return {bugs: bugData}
  },


  addBug: function(bug) {
    console.log('Adding bug: ', bug);
    //advised not to modify state (its immutable) so make a copy.
    var bugsModified = this.state.bugs.slice();
    bug.id = this.state.bugs.length + 1;
    bugsModified.push(bug);
    this.setState({bugs: bugsModified});
  },

  render: function() {
    console.log('rendering BugList, num items: ', this.state.bugs.length);
    return (
      <div>
        <h1> Bug Tracker </h1>
        <BugFilter />
        <hr />
        <BugTable bugs={this.state.bugs}/>
        <hr />
        <BugAdd addBug={this.addBug}/>
      </div>
    )
  }
});



var bugData = [
  {id: 1, priority: 'P1', status: 'open', owner: 'Matan', title: 'App crashes on open'},
  {id: 2, priority: 'P2', status: 'new', owner: 'Fred', title: 'Misaligned border on panel'},
]

ReactDOM.render(
  <BugList />,
  document.getElementById('main')
);
