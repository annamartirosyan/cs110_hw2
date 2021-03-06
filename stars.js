// function for space number
const space = function (b) {
	if (b===0) {
		return '';
	}
	return " " + space(b-1);
};

// function for stars number
const row = function (a) {
	if (a===1) {
		return '*';
	}
	return "**"+ row(a-1);
};
// loop for console row with counter

const triangleStars = function (n){

	const counter = function(count) {
		if(count > n) 
			return;
		console.log(space(n-count) + row(count));
		counter(count + 1); 
	};

	counter(1);
};


triangleStars(5);
