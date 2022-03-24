import './App.css';
import React from "react";
//import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
  <div className="Main">
    <Head />
    <div className="App">
      <Load />
      </div>
    </div>
  )
}

class Head extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Options">
          <button className="Header-Button" onClick={() => Load.test()}>Sign Up</button>
          <button className="Header-Button">Login</button>
        </div>
      </div>
    )
  }
}

class Load extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 1, error: "Password or Username Incorrect" };
  }

  page1() {
    return (
      <div className="Container" onClick={() => this.next()}>
        <div className="content">
		      <h2>Bank</h2>
		      <h2>Bank</h2>
	      </div>
      </div>
    )
  }

  page2() {
    return (
      <div className="Container" onClick={() => this.next()}>
        <h1>Made By Ciaran Gaffney</h1>
        <h3>Click To Continue</h3>
      </div>
    )
  }

  page3() {
    return (
      <div className="Container">
        <button className="button" onClick={() => this.setState({page : 4})}><span className="glitch">Sign Up</span></button>
        <button className="button" onClick={() => this.setState({page: 5})}><span className="glitch">Login</span></button>
      </div>
    )
  }

  //http://localhost:8000/login/register

  signup() {
    return (
      <div className="signup-form">
        <h1>Sign Up</h1>
        <form method="post"  autoComplete="off">
          <input type="text" name="username" placeholder="Username" /> <br />
          <input type="text" name="username" placeholder="Forename" /> <br />
          <input type="text" name="username" placeholder="Surname" /> <br />
          <input type="text" name="password" placeholder="Password" />  <br />
          <input type="submit" value="signup" />
        </form>
      </div>
    )
  }

  //http://localhost:8000/login

  login() {
    return (
      <div className="login-form">
        <h1>Login</h1>
        <form method="POST" action="http://localhost:8000/login" autoComplete="off">
          <input min="5" max="10" type="text" name="username" placeholder="Username" /> <br />
          <input min="5" max="10"type="text" name="password" placeholder="Password" />  <br />
          <input type="submit" value="login" />
        </form>
        {this.state.error !== "" ? <h1 style={{textDecoration:'none', fontSize:"1.5vw", color:"#cc0000"}}>{this.state.error}</h1> : ""}
      </div>
    )
  }

  next() {
    if (this.state.page === 5) {
      this.setState({ page: 1});
    } else {
      this.setState({ page: this.state.page + 1});
    }
  }

  render() {
    switch (this.state.page) {
      case 1:
        return this.page1();
      case 2:
        return this.page2();
      case 3:
        return this.page3();
      case 4:
        return this.signup();
      case 5:
        return this.login();
      default:
        return this.page1();
    }
  }
}

export default App;
