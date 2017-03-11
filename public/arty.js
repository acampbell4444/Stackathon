let command, stopArtyom

let funky = function(){return startArtyom()}
$(document).ready(function(){


      command = {
        indexes: ["select *"],
        smart: true,
        action: function(i,wildcard){
            console.log(wildcard)
            let letter = wildcard[0].toLowerCase()
            let num = wildcard.replace(/\D/g,'')
            $('.slider'+letter).focus().val(num).blur()
            funky()
         }

          
      };

      artyom.addCommands(command);
      
      

      startArtyom = function(){
        artyom.initialize(
          {
            lang: 'en-GB', 
            coninuous: true,
            debug: true,
            listen: true
          }
        )
      }

      function stopArtyom(){
        return artyom.fatality()
      }

})

