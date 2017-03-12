import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';







export default class BarBalancer extends Component {
  render() {
  artyom.addCommands([{
                    	indexes: ["hello"],
                        action: i=> artyom.say("hey buddy!")
                  }])
      
    return (
	    <div className=''>
	    	<h1 className='center bottom50'>Choose Your Bar</h1>
    		<h3 className='center bottom20'>Triple Bars</h3>
			<div className='row center bottom50'>
				<span className='margin40 '>

					<button onClick={e=>browserHistory.push('/multifly')} className='barone bar1'>
					<p className='barNum'>1</p>
						<img className='img-responsive img-thumbnail thumbs center tripleShrink' 
				 			 src='../../public/MultiFly.png'
						/>
						</button>
					</span>
				
				<span className='margin40'> 
	        		<button onClick={e=>browserHistory.push('/multiflyAdv')} className='bartwo bar2'>
	        		<p className='barNum'>2</p>
		        		<img className='img-responsive img-thumbnail thumbs center tripleShrink' 
		       		 		 src='../../public/mbva.png'
		       			/>
		       		</button>
		    	</span>
	    	</div>
	    	<h3 className='center bottom20'>Double Bars</h3>
	    	<div className='row center'>
				<span className='margin40'>
					<button onClick={e=>browserHistory.push('/double')} className='barthree bar3'>
					<p className='barNum'>3</p>
			       		<img className='img-responsive img-thumbnail thumbs center dubShrink' 
			       		 	 src='../../public/Doublizer.jpg'
			       		/>
		       		</button>
		    	</span>
				<span className='margin40'>
					<button onClick={e=>browserHistory.push('/doubleSp')} className='barfour barfor bar4'>
					<p className='barNum'>4</p>
		       			<img className='img-responsive img-thumbnail  thumbs center dubShrink' 
		       				 src='../../public/DoublSP.jpg'
		        		/>
	        		</button>
		    	</span>
	    	</div>
	    	{this.props.children}
    	</div>
	 
    )
  }
}


