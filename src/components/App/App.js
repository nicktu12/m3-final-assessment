import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { initFetchAction } from '../../actions';
class App extends Component {
  
  componentDidMount() {
    this.props.initFetch();
  }

  renderCards = (houseArray) => (
    houseArray.length &&
    houseArray.map((house, index) => <Card houseInfo={house} key={'House Card ' + index} />)
  )

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          {this.renderCards(this.props.houseData)}
        </div>
      </div>
    );
  }
}

App.propTypes = {
};

const mapStateToProps = store => (
  { houseData: store.houses }
)

const mapDispatchToProps = dispatch => (
  { initFetch: () => dispatch(initFetchAction()) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
