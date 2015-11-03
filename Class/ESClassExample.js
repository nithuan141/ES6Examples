class Bake {
constructor(cake) {
this.cake = cake;
}
getTheCake() {
console.log(`${this.cake}`);
}
}
var a = new Bake('Plum cake');
a.getTheCake();
a.cake='Choclate cake';
a.getTheCake();
