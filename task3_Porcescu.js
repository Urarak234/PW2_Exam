let array = [{x:1, y:2},  {x:null, y:4}, {x:3, y:4}, {x:3, y:undefined}];
filter(array);
console.log(array);
function filter(arr){
	let counter = 0;
	for (let i = 0; i < arr.length; i++) {
		((typeof(arr[i].x) == "number") && (typeof(arr[i].y) == "number")) ? (true) : (delete arr[i] && counter++);
	}
	arr.sort((a,b) => a - b);
	arr.length -= counter;
	return arr;
}