import React from 'react';
import MoonHeader from '../elements/moon/MoonHeader';
import Login from '../elements/forms/login';
import './loginPage.css'

class LoginPage extends React.Component {

  submit = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div className="formWrap">
        <MoonHeader />
        <p>Login Page</p>
        <Login submit={this.submit}/>
      </div>
    );
  }
}

export default LoginPage;
