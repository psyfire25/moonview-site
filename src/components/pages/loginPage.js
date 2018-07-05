import React from 'react';
import Login from '../elements/forms/login';

class LoginPage extends React.Component {

  submit = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div>
      <p>Login Page</p>
      <Login submit={this.submit}/>
      </div>
    );
  }
}

export default LoginPage;
