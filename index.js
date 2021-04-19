
//create validatelineup function
const validateLineup = (lineup) => {
    //salarycap
    const playerSalaries = lineup.map
             ( lu => lu.salary).reduce
             ((sum, val) => sum + val, 0)
             if (playerSalaries > 45000){
            return false
             }       
    //max teammates
    const team1 = lineup.filter
                        (max => 
                       max.teamId === 12).length
                        if ( team1 > 2){
                            return false
                        }        
    const team2 = lineup.filter
            (max => 
                max.teamId === 11).length
                 if (team2 > 2){
                     return false
                    }
    const team3 = lineup.filter
                 (max => 
                max.teamId === 14).length
                if (team3 > 2){
                 return false
                }           
    const team4 = lineup.filter
                (max => 
               max.teamId === 15).length
               if (team4 > 2){
                   return false
                } 
    const team5 = lineup.filter
               (max => 
              max.teamId === 18).length
              if (team5 > 2){
               return false
              }
    const team6 = lineup.filter
              (max => 
             max.teamId === 20).length
             if (team6 > 2){
              return false
             } 
    const team7 = lineup.filter
             (max => 
            max.teamId === 22).length
            if (team7 > 2){
             return false
            }
    const team8 = lineup.filter
            (max => 
           max.teamId === 27).length
           if (team8 > 2){
            return false
           }
       
    //max players from a game   
   const gameId1 = lineup.filter
           (max => 
               max.gameId === 123).length
                if (gameId1 > 3){
                    return false
                }
   const gameId2 = lineup.filter
                (max => 
               max.gameId === 115).length
               if (gameId2 > 3){
                return false
               }           
   const gameId3 = lineup.filter
               (max => 
              max.gameId === 101).length
              if (gameId3 > 3){
               return false
              } 
   const gameId4 = lineup.filter
              (max => 
             max.gameId === 134).length
             if (gameId4 > 3 ){
              return false
             }
   const gameId5 = lineup.filter
             (max => 
            max.gameId === 131).length
            if (gameId5 > 3){
             return false
            } 
   const gameId6 = lineup.filter
            (max => 
           max.gameId === 119).length
           if (gameId6 > 3){
            return false
           }
   const gameId7 = lineup.filter
           (max => 
          max.gameId === 126).length
          if (gameId7 > 3){
           return false
          } 
    const gameId8 = lineup.filter
          (max => 
         max.gameId === 123).length
         if (gameId8 > 3){
          return false
         } 
    const gameId9 = lineup.filter
         (max => 
        max.gameId === 124).length
        if (gameId9 > 3){
         return false
        } 
// players form each position
    const outfield = lineup.filter(
                     pos => 
                     pos.position === 'OF').length
                     if (outfield != 3){
                         return false
                     }
                       const pitcher = lineup.filter(
                        pos => 
                        pos.position === 'P').length
                        if (pitcher != 1){
                            return false
                        }
                       const catcher = lineup.filter(
                            pos => 
                            pos.position === 'C').length
                            if (catcher != 1){
                                return false
                            }
                        const first = lineup.filter(
                                pos => 
                                pos.position === '1B').length
                                if (first  !=1){
                                    return false
                                }
                        const second = lineup.filter(
                                    pos => 
                                    pos.position === '2B').length
                                    if (second  !=1){
                                        return false
                                    }
                        const third = lineup.filter(
                                        pos => 
                                        pos.position === '3B').length
                                        if (third != 1){
                                            return false
                                        } 
                         const shortstop = lineup.filter(
                                            pos => 
                                            pos.position === 'SS').length
                                            if (shortstop != 1){
                                                return false
                                            }   
                                                                   
            return true                   
}  
        
module.exports = validateLineup