function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Matan',
  lastName: 'Halevy'
};


function getGreeting(user) {
  if (user) {
    return <h1> Hello, {formatName(user)}! </h1>;
  }
  return <h1> Hello, Stranger. </h1>;
}

//function tick(){
const element = (
  <div tabIndex="0">
    {getGreeting(user)}
    <h2>Good to see you here.</h2>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
);
//   ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
// }

// setInterval(tick,1000);
ReactDOM.render(
  element,
  document.getElementById('root')
);
