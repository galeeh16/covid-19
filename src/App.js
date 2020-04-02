import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// pages 
import Home from './pages/Home'

// contexts
import CoronaProvider from './store/CoronaContext'

const App = () => {
  return (
    <BrowserRouter>
      <CoronaProvider>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </CoronaProvider>
    </BrowserRouter>
  );
}

export default App