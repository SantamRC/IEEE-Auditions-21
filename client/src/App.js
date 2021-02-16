import React from 'react'
import Form from './Components/Form'
import Admin from './Components/admin'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './Components/homepage'
import Test from './Components/app1'
import Home from './Components/home'
import End from './Components/thank'
import Header from './Components/header'

function App() {
  const[loggedIn,setlog]=React.useState(false)

  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={()=><Home log={setlog} />} />
          <Route path='/test' exact component={Homepage} />
          <Route path='/form' exact component={Form} />
          <Route path='/admin' exact component={Admin} />
          <Route path='/header' exact component={Header} />
          <Route path='/end' exact component={End} />
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
