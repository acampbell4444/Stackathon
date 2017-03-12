import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';








export default class BarBalancer extends Component {
  render() {
      
    return (
	    <div className=''>
	    	<h1 className='center bottom50'>Choose Your Bar</h1>
    		<h3 className='center bottom20'>Triple Bars</h3>
			<div className='row center bottom50'>
				<span className='margin40 '>
					<button onClick={e=>browserHistory.push('/multifly')} className='barone bar1'>
						<img className='img-responsive img-thumbnail thumbs center tripleShrink' 
				 			 src='../../public/MultiFly.png'
						/>
						</button>
					</span>
				
				<span className='margin40'> 
	        		<button onClick={e=>browserHistory.push('/multiflyAdv')} className='bartwo bar2'>
		        		<img className='img-responsive img-thumbnail thumbs center tripleShrink' 
		       		 		 src='../../public/MultiFlyAdv.png'
		       			/>
		       		</button>
		    	</span>
	    	</div>
	    	<h3 className='center bottom20'>Double Bars</h3>
	    	<div className='row center'>
				<span className='margin40'>
					<button onClick={e=>browserHistory.push('/double')} className='barthree bar3'>
			       		<img className='img-responsive img-thumbnail thumbs center dubShrink' 
			       		 	 src='../../public/Doublizer.png'
			       		/>
		       		</button>
		    	</span>
				<span className='margin40'>
					<button onClick={e=>browserHistory.push('/doubleSp')} className='barfour barfor bar4'>
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


