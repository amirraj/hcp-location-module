import * as React from 'react'
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import { gql, useQuery } from '@apollo/client'
import HCPs from './hcp-list.component'
import MapView from './map-view'

const Trial = (props) => {

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedLocation, setSelectedLocation] = useState(null);

  const query = gql`
query getLocations($trialId : String!){
  getAllLocations(trialId:$trialId){
         id
         location_status
         location_facility
         location_city
         lat
         lng
         location_country
         clinicalTrialId
  }
}
`
  const variables = { "trialId": `${props.trialId}` };
  const { loading, data } = useQuery(query, { variables: variables });

  // useEffect(() => {
  //   //setAllLocations(data?.getAllLocations);
  //   console.log('data is ', data);
  // }, [data])

  return (
    <React.Fragment>
      {/* //   <Button variant="primary" onClick={handleShow}>
    //     Launch demo modal
    //   </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Dropdown>
            <Dropdown.Toggle
              variant=""
              className="cdp-btn-outline-primary dropdown-toggle btn d-flex align-items-center dropdown-toggle btn">
              {selectedLocation ? selectedLocation.location_facility : 'Test Selected Work Place'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {data?.getAllLocations.map((workplace, idx) => (
                <Dropdown.Item
                  className="okla-search__details-workplace-dropdown-item"
                  key={'wp-' + idx}
                  onClick={() => { setSelectedLocation(workplace); }}>
                  {workplace.location_facility || workplace.alternateName}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <div id="container">
          <div id="location-details">
            <ul className="okla-search__details-items">
              <li className="okla-search__details-item">
                <strong className="okla-search__details-title">Name</strong><br />
                <span className="okla-search__details-value">{selectedLocation?.location_facility ? selectedLocation.location_facility : '--'}</span>
              </li>
              <li className="okla-search__details-item">
                <strong className="okla-search__details-title">Address</strong><br />
                <span className="okla-search__details-value">{selectedLocation? (selectedLocation?.location_facility +', '+ selectedLocation?.location_city+', '+ selectedLocation?.location_country) : '--'}</span>
              </li>
              <li className="okla-search__details-item">
                <strong className="okla-search__details-title">Post Code</strong><br />
                <span className="okla-search__details-value">{selectedLocation?.location_zip || '--'}</span>
              </li>
              <li className="okla-search__details-item">
                <strong className="okla-search__details-title">City</strong><br />
                <span className="okla-search__details-value">{selectedLocation?.location_city || '--'}</span>
              </li>
              <li className="okla-search__details-item">
                <strong className="okla-search__details-title">Country</strong><br />
                <span className="okla-search__details-value">{selectedLocation?.location_country || '--'}</span>
              </li>
            </ul>
            </div>
            <div id="hcp-details">
            <HCPs />
            </div>
          </div>
          <div className="map-view">          
          {selectedLocation && selectedLocation.lat && selectedLocation.lng && <MapView location={{latitude: selectedLocation.lat ,longitude: selectedLocation.lng}} />}
          </div>
          
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
export default Trial;

