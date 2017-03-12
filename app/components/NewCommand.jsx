import React from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form'


export function NewCommand (props) { 

    return (
      <div >
         
         <div className='container-fluid'>
            <h2 className='header'>Add a Command</h2>
            <div>
            <form>
               <div>
                  <div className='row center'>
                    <div className='well'>
                      <p className='reg'>yo</p>
                      <Field name="personA" component='input' type="input" />
                    </div>
                    <div className='well'>
                      <p className= 'reg'>yo</p>
                      <Field name="personA" component='input' type="input" />
                    </div>
          
                  </div>
                </div>
            </form>
          </div>
           


          </div>
      </div>
    )
}

export default reduxForm({
  form: 'newCommand' 
})(NewCommand)