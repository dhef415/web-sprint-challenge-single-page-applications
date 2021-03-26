import React, { useState } from "react";
import * as yup from 'yup';
import Home from './Home';
import PizzaForm from './pizza';
import { Route, Link, Switch } from "react-router-dom";
import schema from './validation/formSchema'
import axios from 'axios';


const initialOrder = {};
const initialFormValues = {
  name:'',
  sauce:'',
  pepperoni: false,
  sausage: false,
  mushroom:false,
  olive: false,
};
const initialFormErrors = {name:''}

const initialDisabled = true;



const App = () => {
  const [order, setOrder] = useState(initialOrder);
  const [formValues,setFormValues] = useState(initialFormValues);
  const [formErrors,setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewOrder = (newOrder) => {
    axios
      .post(newOrder)
      .then((res) => {
        setOrder([res.data, ...order]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const inputChange = (name,value) => {
    
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
        setFormErrors({
            ...formErrors, [name]:'',
        })
    })
}

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      sauce:formValues.sauce(),
      pepperoni:formValues.toppings,
      sausage:formValues.toppings,
      mushroom:formValues.toppings,
      olive:formValues.toppings,
    }
    postNewOrder(newOrder);
  }
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
          <PizzaForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
          // values={{}} 
          />
        </Route>
      </Switch>
    </>
  );
};
export default App;
