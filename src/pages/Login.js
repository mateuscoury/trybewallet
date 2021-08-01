import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmail } from '../actions/index';
import './login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
    };
  }

  render() {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.com$/;
    const minLength = 6;
    const { addemail, history, email } = this.props;
    const { password } = this.state;
    return (
      <div id='containerr'>
        <img src='https://image.flaticon.com/icons/png/512/218/218390.png' />
        <form>
          <label htmlFor='label-email'>Email</label>
          <input
            name='email'
            placeholder='Digite seu email'
            type='email'
            autoComplete='true'
            data-testid='email-input'
            onChange={(e) => addemail(e.target.value)}
          />
          <label htmlFor='label-senha'>Senha</label>
          <input
            name='password'
            autoComplete='true'
            placeholder='Digite sua senha'
            type='password'
            data-testid='password-input'
            onChange={({ target }) => this.setState({ password: target.value })}
          />
          <button
            type='button'
            disabled={!regexEmail.test(email) || password.length < minLength}
            onClick={() => history.push('/carteira')}
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addemail: (item) => dispatch(addEmail(item)),
});
const mapStateToPops = (state) => ({
  email: state.user.email,
});

Login.propTypes = {
  addemail: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  history: PropTypes.objectOf().isRequired,
};

export default connect(mapStateToPops, mapDispatchToProps)(Login);
