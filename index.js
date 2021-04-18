//destructure lineup
//create validatelineup function
const validateLineup = (lineup) => {
    //salarycap
    const playerSalaries = lineup.map
             ( lu => lu.salary).reduce
             ((sum, val) => sum + val, 0)
             if (playerSalaries > (45,000))
            return false
   }
   //maximum teammates and players from the same game
   const games = [123, 115, 101, 134, 126, 131, 119, 123, 124]
   const teams = [12, 11, 22, 20, 14, 18, 27, 15,]
       const maxTracker = 0
       for (let t = 0; t < lineup.length; t++){
           if (lineup[t].teamId === teams)
           maxTracker++
       }
      


module.exports = validateLineup