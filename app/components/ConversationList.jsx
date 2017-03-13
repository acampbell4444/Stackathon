import React from 'react';
import { Link } from 'react-router';
import store from '../store'



export default function ConversationList (props) { 

    console.log('steeeeelooo',store.getState().commands.allCommands)
    let commands = store.getState().commands.allCommands
    let currentClass;
    let classy = function(i){
      let classes=['success','danger','info','warning']
      if(!currentClass ){
        currentClass = 'success'
      }else {
        let idx = classes.indexOf(currentClass)
        if(idx === classes.length-1){
          currentClass = 'success'
        }else {
          currentClass = classes[idx+1]
        }
       }
       return currentClass
    }

    return (
      <div className='container-fluid'>
         
      <table className="table">
    <thead>
      <tr>
        <th>Prompt</th>
        <th>Response</th>
      </tr>
    </thead>
    <tbody>
      {
        commands.map((command,idx)=>(
          <tr key={idx} className={classy(idx)}>
            <td>{command.prompt}</td>
            <td>{command.response}</td>
          </tr>   

        ))
      }

    </tbody>
  </table>
      </div>
    )
}
