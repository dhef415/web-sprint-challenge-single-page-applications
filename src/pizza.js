import React, {useState} from 'react';
import {Link} from 'react-router-dom';



export default function PizzaForm(props) {
  const {values, update, submit} = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };
  
     return(
        <div className='pizza-form'>
            <h2>Build Your Own Pizza</h2>
            <Link to='/'>HOME</Link>
            <form>
                <div>
                    <label> Choose Size
                        <select name='size' value={values.size} onChange={onChange} >
                            <option value=''>---select size---</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>
                </div>
                <div>
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
                        name='red-sauce'
                        value='bbq'
                        onChange={onChange}
                        checked={values.sauce === 'bbq'}
                        >
                        </input>
                    </label>
                </div>
                <div>
                    <label>Add Toppings</label><br></br>
                    <label>Pepperoni
                        <input
                        type='checkbox'
                        name='pepperoni'
                        value='pep'
                        onChange={onChange}
                        checked={values.toppings === 'pep'}
                        >
                        </input>
                        <label>Sausage
                        <input
                        type='checkbox'
                        name='sausage'
                        value='pep'
                        onChange={onChange}
                        checked={values.toppings === 'pep'}
                        >
                        </input>
                        </label>
                        <label>Mushrooms
                        <input
                        type='checkbox'
                        name='mushrooms'
                        value='mushroom'
                        onChange={onChange}
                        checked={values.toppings === 'mushroom'}
                        >
                        </input>
                        </label>
                        <label>Olives
                        <input
                        type='checkbox'
                        name='olive'
                        value='olives'
                        onChange={onChange}
                        checked={values.toppings === 'olives'}
                        >
                        </input>
                        </label>
                    </label>
                </div>
                <div>
                    <label>Special Instructions
                        <input
                        type='text'
                        name='instructions'
                        placeholder='Anything else?'
                        value={values.instructions}
                        onChange={onChange}
                        >
                        </input>
                    </label>
                </div>
                <label>
                    <button>ADD TO ORDER</button>
                </label>
            </form>          
        </div>
    )

//     {/* ////////// DROPDOWN ////////// */}
//     <label>
//     Role
//     {/* 🔥 STEP 5 - Make dropdown for role. */}
//     <select name="role" value={values.role} onChange={onChange}>
//       <option value="">------select role------</option>
//       <option value="instructor">Instructor</option>
//       <option value="student">Student</option>
//       <option value="graduate">Graduate</option>
//     </select>
//   </label>
}