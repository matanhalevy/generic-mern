//1.

function ListItem(props) {
  return (<li>{props.value}</li>);
}

function NumberList(props) {
  const numbers = props.numbers;
  // elements inside the map() call need keys.
  /*const listItems = numbers.map((number) =>
    <ListItem key={number.toString()} value={number} />
  );*/

  return (
    //<ul>{listItems}</ul>
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}

const numbers = [1,2,3,4,5];

ReactDOM.render(
  <NumberList numbers={numbers} />,
    document.getElementById('root')
);

//2.

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
      )}
    </ul>
  );

  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );

  return(
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);
