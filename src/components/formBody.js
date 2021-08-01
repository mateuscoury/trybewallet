import React from 'react';
import PropTypes from 'prop-types';
import './form.css';

class FormBody extends React.Component {
  render() {
    const { handleinput, stateRedux } = this.props;
    return (
      <div id='bla'>
        <label htmlFor='despesalabel'>Valor</label>
        <input
          type='number'
          data-testid='value-input'
          name='value'
          placeholder='20'
          onChange={handleinput}
        />
        <label htmlFor='descricaolabel'>Descricao</label>
        <input
          type='text'
          placeholder='Coloque aquia descrição'
          data-testid='description-input'
          name='description'
          onChange={handleinput}
        />
        <label htmlFor='moedalabel'>Moeda:</label>
        <select
          data-testid='currency-input'
          placeholder='USD'
          onChange={this.handleInput}
          name='currency'
        >
          {stateRedux.map(
            (moeda) =>
              moeda !== 'USDT' && (
                <option key={moeda} data-testid={moeda}>
                  {moeda}
                </option>
              )
          )}
        </select>
      </div>
    );
  }
}
FormBody.propTypes = {
  stateRedux: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleinput: PropTypes.func.isRequired,
};
export default FormBody;
