function Person(name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
}

Person.prototype.greet = function(other) {
  console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

var sonny = new Person(
  'Sonny', 'sonny@hotmail.com', '483-485-4948');

var jordan = new Person(
  'Jordan', 'jordan@aol.com', '495-586-3456');

console.log(sonny.greet(jordan));
console.log(jordan.greet(sonny));
console.log('Contact Info:' + sonny.email + ', ' + sonny.phone);
console.log('Contact Info:' + jordan.email + ', ' + jordan.phone);
