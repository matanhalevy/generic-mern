class FormattedDate extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
      return (
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      );
    }
 }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    // if you don't use something in render(), it shouldn't be in the state
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}


ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

/*
THREE RULES OF STATE
  1. Do not modify state directly
    ie. this is wrong:
      this.state.comment = 'Hello';
    instead,
      this.setState({comment: 'Hello'});
    you can only assign this.state in the constructor

  2. State updates may be asynchronous
    React may batch multiple setState() calls into a single update for performance.
    Because this.props and this.state may be updated asynchronously,
    you should not rely on their values for calculating the next state.

    ie. This may fail to update the counter:
      this.setState({
        counter: this.state.counter + this.props.increment,
      });
    instead, use a second form of setState that accepts a function rather than an object.
    This second form receives the previous state as the first argument, and the props,
      this.setState((prevState, props) => ({
        counter: prevState.counter + props.increment
      }));

    3. State updates are merged
     when setState is called, React merges the objects you provide intop the current state.
     ie. State may contain several independent variables:
        constructor(props) {
          super(props);
          this.state = {
            posts: [],
            comments: []
          };
        }

        Then can update them indpependently with seperate setState() calls:
          componentDidMount() {
            fetchPosts().then(response => {
              this.setState({
              posts: response.posts
            });
          });

          fetchComments().then(response => {
            this.setState({
              comments: response.comments
            });
          });
        }

        Since the merging is shallow, this.setState({comments}) leaves this.state.posts intact,
        but completely replaces this.state.comments
*/
