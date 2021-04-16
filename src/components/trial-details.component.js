import React from 'react';
import Modal from 'react-bootstrap/Modal';
//import MapView from 'map-view';
import Dropdown from 'react-bootstrap/Dropdown';


const Trial = (props) => {
  console.log('the props is ',props.trialId);
    return <h1>Selected Trial : {props.trialId}</h1>;
  }
export default Trial;

