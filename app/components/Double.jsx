import React from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form'

let spotOne, spotTwo, spotThree, spotFour, spotFive, spotSix
let errorFlag 
export function Double ({personA, personB}) { 


    let diff = (+personA > +personB) ? (personA - personB) : (personB - personA)
    let error = (diff>110&&personA>0&&personB>0) ? 'The Maximum weight difference for this bar is 110 lbs.\n The Current Difference is ' + diff + ' lbs.' : null
    spBalance(personA,personB)
    return (
      <div >
         
         <div className='container-fluid'>
            <h2 className='header'>The Doublizer (Regular) Tandem Bar</h2>
            <div>
            <form>
               <div>
                  <div className='row center'>
                    <div className='well'>
                      <p className='weight A'>Person A {personA ? personA + ' lb' : ''}</p>
                      <Field name="personA" component='input' type="range" min='0' max='400' className='slidera'/>
                    </div>
                    <div className='well'>
                      <p className= 'weight B'>Person B {personB ? personB + ' lb' : ''} </p>
                      <Field name="personB" component='input' type="range" min='0' max='400' className='sliderb'/>
                    </div>
                    <div className='error' >
                      {error ? error : personA&&personB ? "Difference " + diff : null  }
                    </div>
                  </div>
                </div>
            </form>
          </div>
           

            <div className='container-fluid barContainer'>
              <img className='img-responsive barImage' 
                   src='../../public/Doublizer.png'
              />
              <p className={spotOne + ' indicators dubTop'  } id='dubLeft1'>{spotOne}</p> 
              <p className={spotTwo + ' indicators dubTop' } id='dubLeft2'>{spotTwo}</p>
              <p className={spotThree + ' indicators dubTop' } id='dubLeft3'>{spotThree}</p>
              <p className={spotFour + ' indicators dubTop' } id={'dubLeft4'+spotFour}>{spotFour}</p>
              <p className={spotFive + ' indicators dubTop' } id={'dubLeft5'+spotFive}>{spotFive}</p>
              <p className={spotSix + ' indicators dubTop' } id='dubLeft6'>{spotSix}</p>
            </div>
          </div>
      </div>
    )
}

export default reduxForm({
  form: 'double' 
})(Double)

function spBalance(a,b) {
  if(!+a&&!+b){
    spotOne=null
    spotTwo=null
    spotThree = null
    spotFour = null
    spotFive = null
    spotSix = null
    return
  }
  else if(+a && !+b){
    spotOne="A"
    spotSix="A"
    spotTwo = null
    spotThree = null
    spotFour = null
    spotFive = null
    return
  }else if (!+a && +b) {
    spotOne="B"
    spotSix="B"
    spotTwo=null
    spotThree=null
    spotFour=null
    spotFive=null
    return
  }else if(a-b>110||b-a>110){
    spotOne=null
    spotFour=null
    spotTwo = null
    spotThree = null
    spotFive = null
    spotSix= null
    return
  }else{
    let aGreater = +a >= +b
    let diff = Math.abs(a - b)

    switch(true) {
      case (diff<=11):
        spotTwo = null
        spotFour = null
        spotOne = aGreater ? 'A' : 'B'
        spotThree = aGreater ? 'A' : 'B'
        spotFive = aGreater ? 'B' : 'A'
        spotSix = aGreater ? 'B' : 'A'
        break;
      case( diff<=40):
        spotOne=null
        spotTwo = aGreater ? 'A' : 'B'
        spotThree = null
        spotFour = aGreater ? 'AB' : 'BA'
        spotFive = null
        spotSix = aGreater ? 'B' : 'A'
        break;
      case( diff<=60):
        spotOne=null
        spotTwo = aGreater ? 'A' : 'B'
        spotThree = null
        spotFour = aGreater ? 'A' : 'B'
        spotFive = aGreater ? 'B' : 'A'
        spotSix = aGreater ? 'B' : 'A'
        break;
      case( diff<=110):
        spotOne=null
        spotTwo = aGreater ? 'A' : 'B'
        spotThree = null
        spotFour = null
        spotFive = aGreater ? 'AB' : 'BA'
        spotSix = aGreater ? 'B' : 'A'
       
        break;

  }
  return
  }
  
  
}