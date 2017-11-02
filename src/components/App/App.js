import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { fakeAction, initFetchAction } from '../../actions';
class App extends Component {
  
  componentDidMount() {
    this.props.initFetch();
  }

  renderCards = (houseArray) => {
    return houseArray.map((house, index) => {
      return(
        <Card houseInfo={house} /> 
      )
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
          {this.renderCards([1,2,3])}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: PropTypes.string,
  fakeAction: func.isRequired
};

const mapStateToProps = ({ fake }) => ({ fake });

const mapDispatchToProps = dispatch => (
  { fakeAction: () => dispatch(fakeAction()),
    initFetch: () => dispatch(initFetchAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
