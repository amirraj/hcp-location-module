import React from 'react'
import styles from './styles.module.css'
import ApolloClient from 'apollo-boost';
//import { ApolloProvider } from 'react-apollo';
import { ApolloProvider } from "@apollo/client"
import Trial from './components/trial-details.component'


const HcpDetails = (props) => (

  <ApolloProvider client={ new ApolloClient({uri: props.uri})}>
        <Trial trialId={`${props.trialId}`}/>    
  </ApolloProvider>
)


export default HcpDetails;