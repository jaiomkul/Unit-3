            
        const grandPaa = {
            surname : 'Gupta',
            height : true,
            colour : 'black',
            IQ : 'high'
        }
        console.log("grandPaa:", grandPaa)


        const Parents = Object.create(grandPaa)
        Parents.eyes = "brown"
        console.log("Parents :", Parents)

        const me = Object.create(Parents)
        me.Iq = "High"
        console.log("me :", me)
       
