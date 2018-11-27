import React from 'react'

import Menu from '../../components/menu/Menu'

import RouteService from '../../services/Route'

import Routes from './components/routes/Routes'
import Panels from './components/panels/Panels'

class Monitoring extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      routes: []
    }
  }

  componentWillMount() {
    let routes = RouteService.get()
    this.setState({routes})
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="container">

          <Routes routes={this.state.routes} />

          <hr></hr>

          <Panels routes={this.state.routes} />

          <hr></hr>

        </div>
      </div>
    );
  }
}

export default Monitoring