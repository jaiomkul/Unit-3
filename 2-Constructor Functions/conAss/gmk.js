
    const Amar = {
        skill:'singer',
        type: 'classical',
        popularity:'High',
        sing(){
            console.log('Wow ' + this.skill)
        }
    }
    //Anthony.magic.call(Amar);

    const Akber = {
        skill:'Chef',
        type: 'Indian_Food',
        popularity:'Normal',
        fFood(){
            console.log('Wow ' + this.skill)
        }
    }
    Amar.sing.call(Akber);


    const Anthony = {
        skill:'Magician',
        type: 'scientific',
        popularity:'Normal',
        magic(){
            console.log('Wow ' + this.skill)
        }
    }
    Akber.fFood.call(Anthony);

    Anthony.magic.call(Amar);