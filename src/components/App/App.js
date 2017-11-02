import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { initFetchAction } from '../../actions';
class App extends Component {
  constructor(){
    super();

    this.state = {
      selected: []
    }
  } 
  componentDidMount() {
    this.props.initFetch();
  }

  selectCard = (index) => {
    !this.state.selected.length ?
      this.setState({selected: [index]}) :
      this.state.selected.includes(index) ?
      this.setState({selected: []}) :
      this.setState({selected: [index]})
  }

  renderCards = (houseArray) => (
    houseArray.length &&
    houseArray.map((house, index) => (
      <div className={this.state.selected.includes(index) ? 'selected' : 'not-selected'} onClick={()=>this.selectCard(index)} key={'House Card ' + index} >
        <Card houseInfo={house} />
      </div>
      )
    )
  )
  

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          {this.props.houseData.length ? this.renderCards(this.props.houseData) : <p>hey</p>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => (
  { houseData: store.houses }
)

const mapDispatchToProps = dispatch => (
  { initFetch: () => dispatch(initFetchAction()) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
