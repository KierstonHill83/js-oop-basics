//Rides
var Child = function(height, name, age) {
  this.height = height;
  this.name = name;
  this.age = age;
};

var Ride = function(minHeight, maxHeight) {
  this.minHeight = minHeight;
  this.maxHeight = maxHeight;
};

var firstChild = new Child(4, "Billy", 10);
console.log(firstChild);

var secondChild = new Child(6, "Sally", 12);
console.log(secondChild);

var firstRide = new Ride(3, 8);
console.log(firstRide);

var secondRide = new Ride(4, 9);
console.log(secondRide);


function testRide(child, ride) {
  if(child.height >= ride.minHeight && child.height <= ride.maxHeight) {
    return true;
  } else {
    return false;
  }
}
console.log(testRide(firstChild, firstRide));


//Miles
var Car = function(mpg, gallons) {
  this.mpg = mpg;
  this.gallons = gallons;
};

var Route = function(totMiles, destName, location) {
  this.totalMiles = totMiles;
  this.destinationName = destName;
  this.location = location;
};

var firstCar = new Car(30, 21);
console.log(firstCar);

var secondCar = new Car(17, 19);
console.log(secondCar);

var firstRoute = new Route(125, "BYU", "Provo, Utah");
console.log(firstRoute);

var secondRoute = new Route(800, "Disney World", "Orlando, Florida");
console.log(secondRoute);


function makeTrip(car, route) {
  var miles = car.mpg * car.gallons;
  if (miles >= route.totalMiles) {
    return true;
  } else {
    return false;
  }
}
console.log(makeTrip(firstCar, firstRoute));
