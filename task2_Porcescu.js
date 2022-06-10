let counter = 0;
let num = 0;
let arr = [];

alert('Introduce number until will be enough');
do{
	n = prompt('Introduce number:');
	arr[num] = n;
	num ++;
}while (n != null);
arr.pop(); 								//Удаляем ненужный мусор

console.log('1). for method: ');		//Первый метод
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

console.log('2). do...while method: ');		//Второй метод
do{
	console.log(arr[counter]);
	counter++;
}while(arr.length != counter);

console.log('3). while method: ');		//Третий метод
counter = 0;
while(arr.length != counter){
	console.log(arr[counter]);
	counter++;
}

console.log('4). for-in method: ');		//Четвёртый метод
for (let key in arr) {
	console.log(arr[key]);
}

console.log('5). for-of method: ');		//Пятый метод
for (let key of arr) {
	console.log(key);
}

console.log('6). forEach method: ');		//Шестой метод
arr.forEach((item,id) => {
    console.log(item);
});

console.log('7) Map: ');                    //Седьмой Метод
let arrMap = arr.map(item => console.log(item));

//Не смотря на то, что все эти методы являются 
//циклическими конструкциями - каждый является наиболее эффективным в своём случае и в конкретной ситуации. 
