class Bake {
constructor(cake) {
this.cake = cake;
}
getTheCake() {
console.log(`${this.cake}`);
}
}


class BakeWithFlavour extends Bake{
constructor(cake,flavour){
super(cake);
this.flavour=flavour;
}
getFlavouredCake(){
console.log(`${this.cake} with ${this.flavour} flavour` );
}
}

var a = new BakeWithFlavour('Plum cake','choclate');
a.getFlavouredCake();
