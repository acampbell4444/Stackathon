import React, { Component } from 'react';
import { Link } from 'react-router';

export default class BarBalancer extends Component {
  render() {
      
    return (
	    <div className=''>
	    	<h1 className='center bottom50'>Choose Your Bar</h1>
    		<h3 className='center bottom20'>Triple Bars</h3>
			<div className='row center bottom50'>
				<span className='margin40 '>
					<Link to='/multiFly'>
						<img className='img-responsive img-thumbnail thumbs center tripleShrink' 
				 			 src='../../public/MultiFly.png'
						/>
					</Link>
				</span>
				<span className='margin40'> 
	        		<Link to='/multiFlyAdv'>
		        		<img className='img-responsive img-thumbnail thumbs center tripleShrink' 
		       		 		 src='../../public/MultiFlyAdv.png'
		       			/>
		       		</Link>
		    	</span>
	    	</div>
	    	<h3 className='center bottom20'>Double Bars</h3>
	    	<div className='row center'>
				<span className='margin40'>
					<Link to='/double'>
			       		<img className='img-responsive img-thumbnail thumbs center dubShrink' 
			       		 	 src='../../public/Doublizer.png'
			       		/>
		       		</Link>
		    	</span>
				<span className='margin40'>
					<Link to='/doubleSp'>
		       			<img className='img-responsive img-thumbnail  thumbs center dubShrink' 
		       				 src='../../public/DoublSP.png'
		        		/>
	        		</Link>
		    	</span>
	    	</div>
    	</div>
	 
    )
  }
}