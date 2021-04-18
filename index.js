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


module.exports = validateLineup