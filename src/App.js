import React, { Component } from 'react'
import Random from './component/Random'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Instruction from './component/Instruction'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/random' component={Random} />
        <Route exact path='/instruction/:id' component={Instruction} />

        </Switch>
      </div>
     </BrowserRouter>
    )
  }
}

export default App
