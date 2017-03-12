import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';







export default class BarBalancer extends Component {
  render() {
  	let fetched = this.props.fetchedCommands
  	let commands = fetched.map(command=>{
  		return {
  				indexes: [command.prompt], 
  				action: function(){ artyom.say(command.response) }
  				}	
  	})

  artyom.addCommands(commands)
      
    return (
	    <div className=''>
	    	<h1 className='center '>Choose Your Bar</h1>
			<div className='row center bottom50'>
				<span className='margin40 well'>

					<button onClick={e=>browserHistory.push('/multifly')} className='barone bar1 barwon'>
					<p className='barNum'>1</p>
						<img className='img-responsive img-thumbnail thumbs center tripleShrink' 
				 			 src='../../public/MultiFly.png'
						/>
						</button>
					</span>
				
				<span className='margin40 well'> 
	        		<button onClick={e=>browserHistory.push('/multiflyAdv')} className='bartwo bar2 barto bartoo'>
	        		<p className='barNum'>2</p>
		        		<img className='img-responsive img-thumbnail thumbs center tripleShrink' 
		       		 		 src='../../public/MultiFlyAdv.png'
		       			/>
		       		</button>
		    	</span>
	    	</div>
	    	<div className='row center'>
				<span className='margin40 well funk'>
					<button onClick={e=>browserHistory.push('/double')} className='barthree bar3'>
					<p className='barNum'>3</p>
			       		<img className='img-responsive img-thumbnail thumbs center dubShrink' 
			       		 	 src='../../public/Doublizer.png'
			       		/>
		       		</button>
		    	</span>
				<span className='margin40 well'>
					<button onClick={e=>browserHistory.push('/doubleSp')} className='barfour barfor bar4'>
					<p className='barNum'>4</p>
		       			<img className='img-responsive img-thumbnail  thumbs center dubShrink' 
		       				 src='../../public/DoublSP.png'
		        		/>
	        		</button>
		    	</span>
	    	</div>
	    	{this.props.children}
    	</div>
	 
    )
  }
}


