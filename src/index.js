import React from 'react'
import styles from './styles.module.css'
import Trial from './components/trial-details.component'

export const ExampleComponent = (props) => {
  //return <div className={styles.test}>Example Component: {text}</div>
  return <Trial trialId={props.trialId} />
}
