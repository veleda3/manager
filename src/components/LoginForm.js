import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EmailChange } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.EmailChange(text);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email:'
            placeholder='user@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
          secureTextEntry
          label='Password:'
          placeholder='password'
          />
        </CardSection>
        <CardSection>
          <Button>
            Login!
          </Button>
        </CardSection>
      </Card>
    );
  }
}


export default connect(null, EmailChange)(LoginForm);
