class Vehicle{
constructor(name,type){
this.name = name;
this.type = type;
}
getName(){
return this.name;
}
getType(){
return this.type;
}
}
class Car extends Vehicle{
constructor(name){
super(name,'car');
}
getName(){
return super.getName();
}
}
class Bike extends Vehicle{
constructor(name){
super(name,'bike');
}
getName(){
return super.getName();
}
}
class Bus extends Vehicle{
constructor(name){
super(name,'bus');
}
getName(){
return super.getName();
}
}
let car = new Car("Swift");
console.log(car.getName());
console.log(car.getType());
let bike = new Bike("Hero Honda");
console.log(bike.getName());
console.log(bike.getType());
let bus = new Bus("Bharat Benz");
console.log(bus.getName());
console.log(bus.getType());