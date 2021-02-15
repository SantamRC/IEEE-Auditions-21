import React from 'react'
import Form from './Components/Form'
import Admin from './Components/admin'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './Components/Homepage/homepage'
import Test from './Components/app1'
import Home from './Components/home'
import End from './Components/thank'

function App() {
  const[loggedIn,setlog]=React.useState(false)

  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' exact component={()=><Home log={setlog} />} />
          <Route path='/test' exact component={Test} />
          <Route path='/form' exact component={Form} />
          <Route path='/admin' exact component={Admin} />
          <Route path='/end' exact component={End} />
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
