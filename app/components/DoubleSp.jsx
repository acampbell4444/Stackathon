import React from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form'

let spotOne, spotTwo, spotThree, spotFour, position
export function DoubleSp ({personA, personB}) {     
    let diff = (+personA > +personB) ? (personA - personB) : (personB - personA)
    let error = (diff>135&&personA>0&&personB>0) ? 'The Maximum weight difference for this bar is 135 lbs.\n The Current Difference is ' + diff + ' lbs.' : null
    spBalance(personA,personB)
    return (
      <div >
	       
         <div className='container-fluid'>
            <h2 className='header'>The Doublizer Sp Tandem Bar</h2>
            <div>
            <form>
               <div>
                  <div className='row center'>
                    <div className='well'>
                      <p className='weight A'>Person A Weight: {personA} lbs</p>
                      <Field name="personA" component='input' type="range" min='0' max='500' id='slider'/>
                    </div>
                    <div className='well'>
                      <p className= 'weight B'>Person B Weight: {personB} lbs</p>
                      <Field name="personB" component='input' type="range" min='0' max='500' id='slider'/>
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
  		       		   src='../../public/DoublSp.png'
  		       	/>
              <p className={spotOne + ' indicators spTop'  } id='spLeft1'>{spotOne}</p>
              <p className={spotTwo + ' indicators spTop' } id='spLeft2'>{spotTwo}</p>
              <p className={spotThree + ' indicators spTop' } id='spLeft3'>{spotThree}</p>
              <p className={spotFour + ' indicators spTop' } id='spLeft4'>{spotFour}</p>
              <p className={'spPosArrow indicators spPosArrowTop' } id={'spArrowLeft' + position}><span className='glyphicon glyphicon-arrow-down'></span> </p>

            </div>
          </div>


    
      

      </div>
    )
}

export default reduxForm({
  form: 'doubleSp' 
})(DoubleSp)

function spBalance(a,b) {
  position = 0
  if(!+a&&!+b){
    spotOne=null
    spotFour=null
    spotTwo = null
    spotThree = null
    return
  }
  else if(+a && !+b){
    spotOne="A"
    spotFour="A"
    spotTwo = null
    spotThree = null
    return
  }else if (!+a && +b) {
    spotOne="B"
    spotFour="B"
    spotTwo=null
    spotThree=null
    return
  }else if(a-b>135||b-a>135){
    spotOne=null
    spotFour=null
    spotTwo = null
    spotThree = null
    return
  }else{
    let aGreater = +a >= +b
    spotOne= aGreater ? 'A' : 'B'
    spotTwo= aGreater ? 'A' : 'B'
    spotThree = aGreater ? 'B' : 'A'
    spotFour = aGreater ? 'B' : 'A'
    let diff = Math.abs(a - b)

    switch(true) {
      case (diff<=10):
        position = 0
        break;
      case( diff<=35):
        position = 1
        break;
      case( diff<=60):
        position = 2
        break;
      case( diff<=85):
        position = 3
        break;
      case( diff<=110):
        position = 4
        break;
      case( diff<=135):
        position = 5
        break;
  }
  return
  }
  
  
}