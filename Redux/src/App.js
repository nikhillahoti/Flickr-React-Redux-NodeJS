import React, { Component } from 'react';
import axios from 'axios';
import FilterComponent from './Components/FilterComponent';
import ImageList from './Components/ImageList';
import './App.css';
import config from './config';
import {connect} from 'react-redux';

class App extends Component {

  render() {
    return (
        <div className="App">
          <div className="title"><b>Flickr Search</b></div>
          <div className="content">
            <FilterComponent clicked={this.props.imageListChanged}/>
            <ImageList imageList={this.props.imageList} />
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    imageList: state.imageList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // This will be called whenever there is change in the search key
    imageListChanged: (value) => {
      // Normal function which makes call to flickr function and returns the promise 
      changeHandler(value).then((data) => {
        // Dispatching the Redux Action
        dispatch({type: 'IMAGE_LIST_CHANGED', imageList: data }) 
      });
    }
  };
};  

// Handles Flickr service call
let changeHandler = (value) => {
  let URL = config.server + "/api/flickr?tag=" + value;
  return axios.get(URL)
    .then((resp) => {
      return resp["data"]["items"];
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
