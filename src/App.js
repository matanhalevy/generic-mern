var BugFilter = React.createClass({
  render: function() {
    return (
      <div>section is meant for a filter</div>
    )
  }
})

var BugTable =  React.createClass({
  render: function() {
    return (
      <div>A table to list all the bugs</div>
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
        <BugFilter />
        <BugTable />
        <BugAdd />
      </div>
    )
  }
});


ReactDOM.render(
  <BugList />,
  document.getElementById('main')
);
