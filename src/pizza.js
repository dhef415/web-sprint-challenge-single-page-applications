import React, { useState } from 'react';
import {Link} from 'react-router-dom';
// import * as yup from 'yup';





export default function PizzaForm(props) {
  const {values, submit, change, } = props;
  

  const onChange = (evt) => {
    const { name, value, type, checked, } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
  };
  const onSubmit = (evt) => {
      evt.preventDefault()
      submit()
  }


  
  
     return(
        <div className='pizza-form'>
            <h2>Build Your Own Pizza</h2>
            <Link to='/'>HOME</Link>
            <form className='form-container' onSubmit={onSubmit}>
                <div>
                    <h4>Name for Order</h4>
                    <input
                    type='text'
                    name='name'
                    placeholder='Enter your name '
                    value={values.name}
                    onChange={onChange}
                    >
                    </input>
                </div>
                <div>
                    <h4>Choose Size</h4>
                    <label>Required
                        <select name='size' value={values.size} onChange={onChange} >
                            <option value=''>---select size---</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>
                </div>
                <div className='sauce-option'>
                    <h4>Choose Sauce</h4>
                    <label>Red Sauce
                        <input
                        type='radio'
                        name='red-sauce'
                        value='red'
                        onChange={onChange}
                        checked={values.sauce === 'red'}
                        >
                        </input>
                    </label>
                    <label>Garlic Sauce
                        <input
                        type='radio'
                        name='garlic-sauce'
                        value='garlic'
                        onChange={onChange}
                        checked={values.sauce === 'garlic'}
                        >
                        </input>
                    </label>
                    <label>BBQ Sauce
                        <input
                        type='radio'
                        name='bbq-sauce'
                        value='bbq'
                        onChange={onChange}
                        checked={values.sauce === 'bbq'}
                        >
                        </input>
                    </label>
                    <label>Spinach Alfredo
                        <input
                        type='radio'
                        name='spinach-alfredo'
                        value='sp-a'
                        onChange={onChange}
                        checked={values.sauce === 'sp-a'}
                        >
                        </input>
                    </label>
                </div>
                <div className='topping-option'>
                    <h4>Add Toppings</h4>
                    <label>Pepperoni
                        <input
                        type='checkbox'
                        name='pepperoni'
                        onChange={onChange}
                        checked={values.toppings === 'pepperoni'}
                        >
                        </input>
                        <label>Sausage
                        <input
                        type='checkbox'
                        name='sausage'
                        onChange={onChange}
                        checked={values.toppings === 'sausage'}
                        >
                        </input>
                        </label>
                        <label>Mushrooms
                        <input
                        type='checkbox'
                        name='mushroom'
                        onChange={onChange}
                        checked={values.toppings === 'mushroom'}
                        >
                        </input>
                        </label>
                        <label>Olives
                        <input
                        type='checkbox'
                        name='olive'
                        onChange={onChange}
                        checked={values.toppings === 'olive'}
                        >
                        </input>
                        </label>
                    </label>
                </div>
                <div className='spec-inst'>
                    <h4>Special Instructions</h4>
                    <input
                    type='text'
                    name='instructions'
                    placeholder='What else you want?'
                    value={values.instructions}
                    onChange={onChange}
                    >
                    </input>
                </div>
                <div className='submit-button'>
                    <button value={onSubmit}>ADD TO ORDER</button>
                </div>
            </form>          
        </div>
    )

}