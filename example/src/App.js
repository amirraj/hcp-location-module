import React from 'react'

import HcpDetails from 'hcp-location-module'
import 'hcp-location-module/dist/index.css'
import './App.scss';

const App = () => {
  return <HcpDetails trialId="1234" uri={"http://localhost:5000/graphql"} />
}

export default App
