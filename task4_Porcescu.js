let counter = 0;//Nr4
const ol_list = document.querySelector(".list"); 

listCreation = setInterval(() => {
	
	let li = document.createElement("li");
  	li.textContent = `Element Nr ${counter+1}`;
  	ol_list.append(li);
  	
  	if (counter % 2 == 0) {
  		li.style.backgroundColor = "violet";
  	}else{
  		li.style.backgroundColor = "green";
  	}

  	if (counter == 19) {

		clearInterval(listCreation);
	
	}
	counter++;
}, 2000);