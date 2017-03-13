import React from 'react'
import {connect} from 'react-redux'
import Login from './Login'
import WhoAmI from './WhoAmI'
import { Link, browserHistory } from 'react-router';
import store from '../store'



const App = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
  <div>
 
	<nav className="navbar navbar-inverse">
  		<div className="container-fluid">
			<div className="navbar-header">
      			<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        			<span className="sr-only">Toggle navigation</span>
        			<span className="icon-bar"></span>
        			<span className="icon-bar"></span>
        			<span className="icon-bar"></span>
      			</button>
    		</div>
			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      			<ul className="nav navbar-nav">
        			<li className='log'>{user ? <WhoAmI/> : <Login/>}</li>
        	
      			</ul>
      			<form className="nav navbar-nav brand">
        			<div className="form-group">
          				<textarea className="stretch" placeholder="say 'show commands' to see options"/>
        			</div>
  
      			</form>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><button id='showCommands' className='button btn-xs btn-success'>Conversation</button> <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to='/showModal'><p id='showModal'>Teach Arty to Speak!</p> </Link>
                    </li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">"Go Back" : Goes to the last page</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
              </li>
            </ul>
      			<ul className="nav navbar-nav navbar-right">
        			<li><a><button className='button btn-xs btn-primary home' onClick={e=>browserHistory.push('/barBalancer')}>Home</button></a></li>
        			<li className="dropdown">
          				<a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><button id='showCommands' className='button btn-xs btn-info'>Audio Commands</button> <span className="caret"></span></a>
          				<ul className="dropdown-menu">
            				<li><a href="#">Action</a></li>
            				<li><a href="#">Another action</a></li>
            				<li><a href="#">"Go Back" : Goes to the last page</a></li>
            				<li role="separator" className="divider"></li>
            				<li><a href="#">Separated link</a></li>
          				</ul>
        			</li>
      			</ul>
       
    		</div>
  		</div>
	</nav>
	 {children}

</div>
)

export default App

//////////////////// arty party //////////////////

let startArtyom




$(()=>{

let cmds=   [
                  {
                        indexes: ["select *"],
                        smart: true,
                        action: function(i,wildcard){
                              let letter = wildcard[0].toLowerCase()
                              let num = wildcard.replace(/\D/g,'')
                              $('.slider'+letter).focus().val(num).blur()
                        }
                  },
                  {
                        indexes: ["grab Bar *"],
                        smart: true,
                        action: function(i,wildcard){
                             console.log('taco!', wildcard)
                             $('.bar'+wildcard).click()
                        }
                  },
                  {
                        indexes: ["go back"],
                        action: i => history.back()
                  },
                  {
                        indexes: ["go forward"],
                        action: i=> history.forward()
                  },
                  {
                        indexes: ["finalize command"],
                        action: i=>  $('#addCommand').click()
                  },
                  {
                    	indexes: ["go home"],
                        action: i=> { $('.home').click(); artyom.say("Geez! Don't be so mean")}
                  },
                  {
                      indexes: ["add to conversation"],
                        action: i=> { $('#showModal').click(); artyom.say("Yes! Please teach me to say something")}
                  },
                  {
                      indexes: ["close form", "closed form", "clothes form"],
                        action: i=> { $('#closeModal').click();artyom.say("closing")}
                  },
                  {
                    	indexes: ["show commands"],
                        action: i=> $('#showCommands').click()
                  },
                  {
                      indexes: ['add prompt', 'and fronts', 'add prompts','prompt'],
                        action: i=> {
                          $('#prompt').blur()
                          $('#prompt').focus()
                        }
                  },
                  {
                      indexes: ["add response"],
                        action: i=> {
                          $('#response').blur()
                          $('#response').focus()
                        }
                  },
                  {
                    	indexes: ["hide commands"],
                        action: i=> $('#showCommands').click()
                  },
   				        {
                    	indexes: ["log out", "logout"],
                        action: i=> $('#byebye').click()
                  },
                  {
                    	indexes: ["log in", "login"],
                        action: i=> $('#login').click()
                  },
                  {
                    	indexes: ["tell me what it's all about", "tell me what it is all about"],
                        action: i=> artyom.say("The true meaning of life is to plant trees, under whose shade you do not expect to sit.")
                  },
                  {
                    	indexes: ["sorry"],
                        action: i=> artyom.say("We are still Cool Homey")
                  }


            ] 

    

	artyom.addCommands(cmds);

	artyom.when("COMMAND_RECOGNITION_END",function(status){
	      if(status.code == "continuous_mode_enabled"){
	            console.info("Command reconition finalized, restarting because the continuous mode is enabled");
	      }
	});

	function start(language){

		startArtyom = function(t){
			artyom.initialize({
				lang: language,// Start artyom with provided language
				continuous:true,// Continuous mode enabled
				listen:true, // Start recognizing
				debug:true, // Show everything in the console
				speed:1, // talk normally
				executionKeyword: "now" // say "now" at the end of a command to execute it immediately
			})
			console.log("Artyom is listening to your commands")
		}
		artyom.fatality();
		setTimeout(startArtyom,250);
	}

	artyom.when("ERROR",function(data){
	console.error(data);
	})

	start("en-US")



	artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
	    if(isFinal){
           $('.stretch').val(recognized)
           
           if ($("#prompt").is(":focus")) {
                $("#prompt").val(recognized)
                $("#prompt").blur()
            }else if ($("#response").is(":focus"))
              $("#response").val(recognized)
              $("#response").blur()
	    }else{
	        console.log(recognized);
	    }
	});

})






























