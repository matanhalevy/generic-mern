var BugRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.id}</td>
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
    return (
      <div>section is meant for a filter</div>
    )
  }
})

var BugTable =  React.createClass({
  render: function() {
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
  render: function() {
    return (
      <div>a form to add a new bug</div>
    )
  }
})

var BugList = React.createClass({
  render: function() {
    return (
      <div>
        <h1> Bug Tracker </h1>
        <BugFilter />
        <hr />
        <BugTable bugs={bugData}/>
        <hr />
        <BugAdd />
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
