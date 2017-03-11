      var command = {
        indexes: ["person a *"],
        smart: true,
        action: function(i,wildcard){
          artyom.say(wildcard);
        }
      };
      
      artyom.addCommands(command);

      function startArtyom(){
        artyom.initialize(
          {
            lang: 'en-GB', 
            coninuous: false,
            debug: true,
            listen: true
          }
        )
      }

      function stopArtyom(){
        return artyom.fatality()
      }