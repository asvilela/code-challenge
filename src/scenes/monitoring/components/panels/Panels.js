import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineBottle } from '@fortawesome/free-solid-svg-icons'

import { Button } from 'react-bootstrap'

import FooterPanel from './FooterPanel'
import RedAlert from './RedAlert'

import './Panels.css'

class Panels extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      container1: { className: 'closed', temp: -5, minTemp: 0, maxTemp: 0 },
      container2: { className: 'closed', temp: -5, minTemp: 0, maxTemp: 0 },
      container3: { className: 'closed', temp: -5, minTemp: 0, maxTemp: 0 }
    }

    this.toogleDoor = this.toogleDoor.bind(this)
    this.loadContainer = this.loadContainer.bind(this)
    this.configTemp = this.configTemp.bind(this)
    this.containerHeader = this.containerHeader.bind(this)
  }

  componentWillMount() {
    this.configTemp()
  }

  configTemp() {
    let container1 = [], container2 = [], container3 = []

    for (let route of this.props.routes) {
      for (let item of route.beers) {
        if (item.container === 1) {
          container1.push(item.beer)
        }
        else if (item.container === 2) {
          container2.push(item.beer)
        }
        else if (item.container === 3) {
          container3.push(item.beer)
        }
      }
    }

    let min = 0, max = 0
    for (let item of container1) {
      min = (min < item.minTemp ? min : item.minTemp)
      max = (max > item.max ? max : item.maxTemp)
    }
    this.setState({ container1: { ...this.state.container1, minTemp: min, maxTemp: max } })

    for (let item of container2) {
      min = (min < item.minTemp ? min : item.minTemp)
      max = (max > item.max ? max : item.maxTemp)
    }
    this.setState({ container2: { ...this.state.container2, minTemp: min, maxTemp: max } })

    for (let item of container3) {
      min = (min < item.minTemp ? min : item.minTemp)
      max = (max > item.max ? max : item.maxTemp)
    }
    this.setState({ container3: { ...this.state.container3, minTemp: min, maxTemp: max } })
  }

  toogleDoor(container, action) {
    let temp = (action === 'open' ? this.state[container].temp + 1 : this.state[container].temp - 1)
    this.setState({ [container]: { ...this.state[container], className: action, temp } })
  }

  loadContainer() {

    let tr = []
    for (let i = 0; i < 5; i++) (
      tr.push(
        <tr>
          <td>{<FontAwesomeIcon icon={faWineBottle} size='2x' />}</td>
          <td>{<FontAwesomeIcon icon={faWineBottle} size='2x' />}</td>
          <td>{<FontAwesomeIcon icon={faWineBottle} size='2x' />}</td>
          <td>{<FontAwesomeIcon icon={faWineBottle} size='2x' />}</td>
          <td>{<FontAwesomeIcon icon={faWineBottle} size='2x' />}</td>
        </tr>
      )
    )

    return <table>
      {tr}
    </table>
  }

  containerHeader(container) {
    let title = ''
    if (container === 'container1') { title = 'Container 1' }
    if (container === 'container2') { title = 'Container 2' }
    if (container === 'container3') { title = 'Container 3' }

    return <div className="row container-title">
      <div className="col-md-4">
        <span>{title}</span>
      </div>
      <div className="col-md-4">
        <Button onClick={() => this.toogleDoor(container, 'open')} bsSize='small' bsStyle={`danger ${(this.state[container].className === 'open' ? 'disabled' : '')}`}>Open</Button> <Button onClick={() => this.toogleDoor(container, 'closed')} bsSize='small' bsStyle={`success  ${(this.state[container].className === 'closed' ? 'disabled' : '')}`}>Close</Button>
      </div>
      <div className="col-md-4">
        <span>Temp: {this.state[container].temp}° C</span>
      </div>
    </div>
  }

  render() {
    return (
      <div className='panels'>
        <span className='panel-title'>Monitoring</span>
        <div className="row">

          <div className="col-md-4">

            {this.containerHeader('container1')}
            <div className={`container ${this.state.container1.className}`}>
              {this.loadContainer()}
            </div>
            <FooterPanel minTemp={this.state.container1.minTemp} maxTemp={this.state.container1.maxTemp} />
            <RedAlert minTemp={this.state.container1.minTemp} maxTemp={this.state.container1.maxTemp} temp={this.state.container1.temp} />

          </div>

          <div className="col-md-4">

            {this.containerHeader('container2')}
            <div className={`container ${this.state.container2.className}`}>
              {this.loadContainer()}
            </div>
            <FooterPanel minTemp={this.state.container2.minTemp} maxTemp={this.state.container2.maxTemp} />
            <RedAlert minTemp={this.state.container2.minTemp} maxTemp={this.state.container2.maxTemp} temp={this.state.container2.temp} />

          </div>

          <div className="col-md-4">

            {this.containerHeader('container3')}
            <div className={`container ${this.state.container3.className}`}>
              {this.loadContainer()}
            </div>
            <FooterPanel minTemp={this.state.container3.minTemp} maxTemp={this.state.container3.maxTemp} />
            <RedAlert minTemp={this.state.container3.minTemp} maxTemp={this.state.container3.maxTemp} temp={this.state.container3.temp} />

          </div>

        </div>
      </div>
    )
  }

}

export default Panels