import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';

class Login extends React.Component {
  state = {
    data: {},
    loading: false,
    error: {}
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <input
              typeof="email"
              id="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Field>
                <label htmlFor="password">Password</label>
                <input
                  typeof="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={this.onChange}
                />
          </Form.Field>
        </Form>
      </div>
    );
  }
};

export default Login;
