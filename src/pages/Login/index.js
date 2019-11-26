import React from 'react';
import { hot } from 'react-hot-loader';
import { Form } from 'react-form';

import FormInputText from 'src/components/FormInputText';

import logo from 'src/themes/images/logo.png';
import './style.less';

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <div className="Login--Form">
          <div className="Login--logo">
            <img src={logo} alt="react-mobx-template" />
          </div>
          <Form onSubmit={() => this.props.history.push('/')}>
            {(formApi) => (
              <form onSubmit={formApi.submitForm}>
                <FormInputText field="username" id="username" placeholder="Username" />
                <FormInputText field="password" id="password" placeholder="Password" />
                <button type="submit">Login</button>
              </form>
            )}
          </Form>
        </div>
      </div>
    );
  }
}

export default hot(module)(Login);
