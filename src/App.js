import React from "react";
import { useHistory } from 'react-router-dom';
import Home from './Home';
import PizzaForm from './pizza';
import { Route, Link, Switch } from "react-router-dom";
// import { Link, useRouteMatch } from 'react-router-dom'

const App = () => {
  
// const history = useHistory();
// const routeToPizza = () => {
//   history.push('/pizza');
// }
// const routeToHome = () => {
//   history.push('/');
// }
  return (
    <>
      
      <Switch>
        <Route exact path='/' component={Home}>
          <Home />
        </Route>
        <Route path='/pizza' component={PizzaForm}>
          <PizzaForm values={{}} />
        </Route>
      </Switch>
    </>
  );
};
export default App;
