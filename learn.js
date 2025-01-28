class vacation{
    constructor(d,l){
        this.d=d;
        this.l=l;
    }
    print(){
        console.log(`${this.d} ${this.l}`)
    }
}
class New extends vacation{
    constructor(d,l,g){
        super(d,l);
        this.g=g;
    }
    print(){
        console.log(`${this.d} ${this.l} ${this.g}`)
    }
}

const trip=new New("Sahith",7,8)
trip.print()