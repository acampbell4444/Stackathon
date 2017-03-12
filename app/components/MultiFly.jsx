import React from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form'

let spotOne, spotTwo, spotThree, spotFour, spotFive, spotSix, position, error
let aWt, bWt, cWt
export function MultiFly ({personA, personB, personC}) { 
let show = personA||personB||personC ? true : false
aWt = personA
bWt = personB
cWt = personC    
    // let diff = (+personA > +personB) ? (personA - personB) : (personB - personA)
    // let error = (diff>110&&personA>0&&personB>0) ? 'The Maximum weight difference for this bar is 110 lbs.\n The Current Difference is ' + diff + ' lbs.' : null
    tripBalance(+personA,+personB, +personC)
    return (
         <div className='container-fluid'>
            <h2 className='header'>The MultiFlyer (Regular) Triple Bar</h2>
            <div>
            <form>
               <div>
                  <div className='row center'>
                    <div className='well trip'>
                      <p className='weight A'>Person A {personA ? personA + ' lb' : ''}</p>
                      <Field name="personA" component='input' type="range" min='0' max='400' className='slidera'/>
                    </div>
                    <div className='well'>
                      <p className= 'weight B'>Person B {personB ? personB + ' lb' : ''} </p>
                      <Field name="personB" component='input' type="range" min='0' max='400' className='sliderb'/>
                    </div>
                    <div className='well'>
                      <p className= 'weight C'>Person C {personC ? personC + ' lb' : ''} </p>
                      <Field name="personC" component='input' type="range" min='0' max='400' className='sliderc'/>
                    </div>
                    <div className='error' >
                	{
                		error&&(<p>{error}</p>)
                	}
                    </div>
                  </div>
                </div>
            </form>


           

            <div className='container-fluid barContainer'>
              <img className='img-responsive barImage' 
                   src='../../public/MultiFly.png'
              />
              <p className={spotOne + ' indicators tripTop'  } id='tripLeft1'>{spotOne}</p> 
              <p className={spotTwo + ' indicators tripTop' } id='tripLeft2'>{spotTwo}</p>
              <p className={spotThree + ' indicators tripTop' } id='tripLeft3'>{spotThree}</p>
              <p className={spotFour + ' indicators tripTop' } id='tripLeft4'>{spotFour}</p>
              <p className={spotFive + ' indicators tripTop' } id='tripLeft5'>{spotFive}</p>
              <p className={spotSix + ' indicators tripTop' } id='tripLeft6'>{spotSix}</p>
              {
	              show&&(
		              <p className={'spPosArrow indicators tripPosArrowTop' } id={'tripArrowLeft' + position}>
		                <span className='glyphicon glyphicon-arrow-down'></span> 
		              </p>
		           )
          	   }
            </div>
          </div>
      </div>
    )
}

export default reduxForm({
  form: 'triple' 
})(MultiFly)

function tripBalance(a,b,c) {

  position = 0
  spotOne = spotTwo = spotThree = spotFour = spotFive = spotSix = error = null
  if(a&&!b&&!c){
  	spotTwo='A'
  	spotFive='A'
    return
  }else if(!a&&b&&!c) {
  	spotTwo='B'
  	spotFive='B'
    return
  }else if(!a&&!b&&c) {
  	spotTwo='C'
  	spotFive='C'
    return
  }else if(a&&b&&!c){
  	return justDubs(['A',+aWt],['B',+bWt])
  }else if(a&&!b&&c){
  	return justDubs(['A',+aWt],['C',+cWt])
  }else if(!a&&b&&c){
  	return justDubs(['B',+bWt],['C',+cWt])
  }else if(a&&b&&c){
  	return trips(a,b,c)
  }
 }

 function justDubs(a,b){
 	let aGreater = a[1] >= b[1]
 	let diff = Math.abs(a[1]-b[1])
 	if(diff>172){
 		position = 9
 		spotOne = spotTwo = spotThree = spotFour = spotFive = spotSix = error = null
 		error = 'Cannot Have a difference of More than 172 lbs with doubles using this bar.  Your Current Difference is ' + diff + ' lbs'
 	}
 	switch(true) {
      case (diff<=7):
        spotOne = spotThree = aGreater ? a[0] : b[0]
        spotFour = spotSix = aGreater ? b[0] : a[0]
        return
      case (diff<=22):
 		position = 1;
 		spotOne = spotThree = aGreater ? a[0] : b[0]
        spotFour = spotSix = aGreater ? b[0] : a[0]
        return
      case (diff<=37):
		position = 2;
 		spotOne = spotThree = aGreater ? a[0] : b[0]
        spotFour = spotSix = aGreater ? b[0] : a[0]
        return
      case (diff<=52):
		position = 3;
 		spotOne = spotThree = aGreater ? a[0] : b[0]
        spotFour = spotSix = aGreater ? b[0] : a[0]
        return   
      case (diff<=67):
		position = 4;
 		spotOne = spotThree = aGreater ? a[0] : b[0]
    spotFour = spotSix = aGreater ? b[0] : a[0]
        return
      case (diff<=82):
		position = 5;
 		spotOne = spotThree = aGreater ? a[0] : b[0]
        spotFour = spotSix = aGreater ? b[0] : a[0]
        return  
      case (diff<=97):
 		spotOne = spotFour = aGreater ? a[0] : b[0]
        spotFive = spotSix = aGreater ? b[0] : a[0]
        return   
      case (diff<=112):
      	position = 1
 		spotOne = spotFour = aGreater ? a[0] : b[0]
        spotFive = spotSix = aGreater ? b[0] : a[0]
        return   
      case (diff<=127):
      	position = 2
 		spotOne = spotFour = aGreater ? a[0] : b[0]
        spotFive = spotSix = aGreater ? b[0] : a[0]
        return    
      case (diff<=142):
      	position = 3
 		spotOne = spotFour = aGreater ? a[0] : b[0]
        spotFive = spotSix = aGreater ? b[0] : a[0]
        return  
      case (diff<=157):
      	position = 4
 		spotOne = spotFour = aGreater ? a[0] : b[0]
        spotFive = spotSix = aGreater ? b[0] : a[0]
        return      
      case (diff<=172):
      	position = 5
 		spotOne = spotFour = aGreater ? a[0] : b[0]
        spotFive = spotSix = aGreater ? b[0] : a[0]
        return
    }
    return
 }

 
function trips (a,b,c){
  let diffs = [Math.abs(a-b),Math.abs(a-c),Math.abs(b-c)]
  var i = diffs.indexOf(Math.max(...diffs))
  let pair, leftover;
  if(i===0){pair=[['A',a],['B',b]]; leftover = ['C',c]}
  if(i===1){pair=[['A',a],['C',c]]; leftover = ['B',b]}
  if(i===2){pair=[['B',b],['C',c]]; leftover = ['A',a]}
  let diff1 = Math.abs(pair[0][1]-leftover[1])
  let diff2 = Math.abs(pair[1][1]-leftover[1])
  let middle = (diff1 >= diff2 ? pair.shift() : pair.pop())[0]
  let leftover2 = pair[0]
  let left = leftover[1] >= leftover2[1] ? leftover : leftover2
  let right = (left[0] === leftover[0] ? leftover2 : leftover)
  let diff = left[1] - right[1]
  left = left[0]
  right=right[0]
  spotOne = spotTwo = left 
  spotThree = spotFour = middle
  spotFive = spotSix = right
  if(diff>82){
  		spotOne = spotTwo = spotThree = spotFour = spotFive = spotSix = error = null
  		position = 9
 		error = 'This weight differences are too extreme for this triple combination when using the MultiFlyer Regular Bar. At least two passengers must be within 82 lbs of each other'
 	}
  console.log('diffage',diff)
  switch(true) {
      case (diff<=7):
      	position=0
      	return
      case (diff<=22):
 		position = 1
        return
      case (diff<=37):
		position = 2;
        return
      case (diff<=52):
		position = 3;
        return   
      case (diff<=67):
		position = 4;
        return
      case (diff<=82):
		position = 5;
        return  
  }
   
}


