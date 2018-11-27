import React from 'react'

import { Alert } from 'react-bootstrap'

const RedAlert = (props) => {
  let { minTemp, maxTemp, temp } = props

    let msg = <div className="row">
      <div className="col-md-12">
        <Alert bsStyle="danger" >
          <h4>Red Alert</h4>
          <p>The temperature is outside the defined range!</p>
        </Alert>
      </div>
    </div>


    return (temp < minTemp || temp > maxTemp) ? msg : ''
}

export default RedAlert