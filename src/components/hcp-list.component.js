import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { gql, useQuery } from '@apollo/client'


function HCPs(props) {

  const query = gql`
query getHCPsByLocation($locationId : String){
  getHCPs(locationId:$locationId){
         id
         first_name
         last_name
         graduation_year
         title
         speciality
         birth_year
         locationId
         
  }
}
`

  const variables = { "locationId": "01070f75-ebc3-48a5-b6de-4ff002a32f2e" };
  const { loading, data } = useQuery(query, { variables: variables });
  console.log(data);

  return (
    <Accordion defaultActiveKey="0">

      {data?.getHCPs.map((hcp, index) => (
        <Card key={index}>
          <Accordion.Toggle as={Card.Header} eventKey={index + ""} className="p-3 d-flex align-items-baseline justify-content-between" role="button" >
            <span className="faq__question">
              {hcp.first_name} {hcp.last_name}
            </span>

            <i className="icon icon-arrow-down ml-2 faq__icon-down"></i>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={index + ""}>
            <Card.Body>
            <ul className="okla-search__details-items" >
              <li className="okla-search__details-item">
                <strong className="okla-search__details-title">Graduation Year</strong><br />
                <span className="okla-search__details-value">{hcp.graduation_year || '--'}</span>
              </li>
              <li className="okla-search__details-item">
                <strong className="okla-search__details-title">Title</strong><br />
                <span className="okla-search__details-value">{hcp.title || '--'}</span>
              </li>
              <li className="okla-search__details-item">
                <strong className="okla-search__details-title">Speciality</strong><br />
                <span className="okla-search__details-value">{hcp.speciality || '--'}</span>
              </li>
              <li className="okla-search__details-item">
                <strong className="okla-search__details-title">Birth Year</strong><br />
                <span className="okla-search__details-value">{hcp.birth_year || '--'}</span>
              </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
}
export default HCPs;