import React from 'react'

const FooterPanel = (props) => {
  return <div className="row">
      <div className="col-md-6">
        <span>{`Min: ${props.minTemp}° C`}</span>
      </div>
      <div className="col-md-6">
        <span>{`Max: ${props.maxTemp}° C`}</span>
      </div>
    </div>
}

export default FooterPanel