//var names = ['Dan', 'Julie', 'Jen'];

// names.forEach(function(name){
// 	console.log('forEach', name);
// });

// names.forEach((name) => {
// 	console.log('arrowfunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Dan'));

// var person = {
// 	name: 'Dan',
// 	greet: function(){
// 		names.forEach((name) => {
// 			console.log(this.name + ' says hi to ' + name)
// 		});
// 	}
// };
// person.greet();




function add (a, b) {
	return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

var addStatement = (a, b) => {
	console.log(a + b);
}
addStatement(1, 3);

var addExpression = (a, b) => a + b;
console.log(addExpression(9, 0));