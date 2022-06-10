const btnPlus = document.getElementById("btn_plus");
let input_s = document.getElementById("inputS")
const btnMinus = document.getElementById("btn_minus");

input_s.disabled = true;
input_s.value = 0;
btnMinus.disabled = true;

btnPlus.onclick = () => {
	if (input_s.value >= 0 && input_s.value<=9) {
		input_s.value++;
		if(input_s.value == 9){
			btnPlus.disabled = true;
		} else {			
  			btnMinus.disabled = false;
		}

	}
};

btnMinus.onclick = () => {
	if (input_s.value >= 0 && input_s.value<=9) {
		input_s.value--;
		if(input_s.value == 0){
			btnMinus.disabled = true;
		} else {
			btnPlus.disabled = false;
		}
	}
}