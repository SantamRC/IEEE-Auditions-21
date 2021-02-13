import Form from './Components/Form'
import Admin from './Components/admin'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' exact component={Form} />
          <Route path='/admin' exact component={Admin} />
        </Switch>
      </div>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
