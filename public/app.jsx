
var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>hello {name}</h1>
        <p>hello {message}</p>
      </div>
    )
  }
})

var GreeterForm = React.createClass({
  onFormSubmit: function(event){
    event.preventDefault();
    var name = this.refs.name.value;

    if (name.length > 0){
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function() {
    return (<div>
      <form onSubmit = {this.onFormSubmit}>
        <input type = "text" ref = "name"/>
        <button>Set Name</button>
      </form>
    </div>
  )
  }
})

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: "React",
      message: "this is the default message!"
    }
  },
  getInitialState: function (){
    return {
      name: this.props.name
    }
  },
  handleNewName: function(name){
    this.setState({
      name: name
    })
  },
  render: function(){
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <GreeterMessage name = {name} message = {message}/>
        <GreeterForm onNewName = {this.handleNewName}/>
      </div>
    );
  }
});

var firstName = 'Mikey'
ReactDOM.render(
  <Greeter name = {firstName} message = 'message from props'/>,
  document.getElementById('app')
);
