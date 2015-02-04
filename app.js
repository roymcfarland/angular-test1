angular.module("basicApp", [])

.controller("mainController", funciton() {

	// Bind this to vm (View-model)
	var vm = this;

	// Define variables and objects on this so they are available for views

	// Define a basic variable
	vm.message = "Hi, Roy! Come and see cool your Angular code is!";

	// Define a list of items
	vm.computers = [
		{name: "MacBook Pro", color: "Silver", nerdiness: 7},
		{name: "Yoga 2 Pro", color: "Gray", nerdiness: 6},
		{name: "Chromebook", color: "Black", nerdiness: 5}
	];

});