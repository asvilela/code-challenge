import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import { Alert } from 'react-bootstrap'

import './Routes.css'

class Routes extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      orderDetails: {}
    }

    this.loadOrderDatail = this.loadOrderDatail.bind(this)
  }

  componentWillMount() {
    this.setState({ orderDetails: this.props.routes[0] })
  }

  loadOrderDatail(item) {
    if(item) {
      this.setState({orderDetails: item})
    }
    
    return <Alert bsStyle="success" onDismiss={this.handleDismiss}>
      <h4>Order Details</h4>
      <div className="row">
        <div className="col-md-4">
        <b>Pub:</b><br></br>
        {` ${this.state.orderDetails.pub.name}`}</div>
        <div className="col-md-4">
          <b>Address:</b><br></br>
          {` ${this.state.orderDetails.pub.address}, ${this.state.orderDetails.pub.zipCode}`}</div>
        <div className="col-md-4">
          <b>Order:</b><br></br>
          {this.state.orderDetails.beers.map(b => <span>{` (${b.beer.name} x ${b.quantity}) `}</span>)}
        </div>
      </div>
    </Alert>
  }

  render() {
    return (
      <div className='main-routes'>
        <span className='routes-title'>Routes</span>
        <div className='routes'>
          <ul>
            {this.props.routes.map(r => <li onClick={() => this.loadOrderDatail(r)} key={r.pub.id.toString()} >{<FontAwesomeIcon icon={(r.status === 'finished' ? faCheckCircle : faDotCircle)} size='2x' />}<span>{r.pub.name}</span></li>)}
          </ul>
        </div>

        <div className="order-detail">
          {this.loadOrderDatail()}
        </div>
      </div>
    )
  }

}

export default Routes