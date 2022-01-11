let sendBtn = document.getElementById('send-btn');
sendBtn.addEventListener("click", giveResult);

function giveResult(){

	let debit = document.getElementById('debit');
	let presiune = document.getElementById('presiune');
	let stenoza = document.getElementById('stenosis-percentage');

	if(!debit.value || !presiune.value || !stenoza.value){
		alert("You must fill all inputs!");
		return false;
	}

	if(stenoza.value > 100){
		alert('Max stenosis percentage is 100.');
		return false;
	}


		debit = Number(debit.value);
		presiune = Number(presiune.value);
		stenoza = Number(stenoza.value);


	if(isNaN(debit) || isNaN(presiune) || isNaN(stenoza)){
		alert("Something is wrong with the values!");
		return false;
	}

	let debitOut = document.getElementById('debit-output');
	let presiuneOut = document.getElementById('presiune-output');

	let debitResult = Math.round(debit/(1/Math.pow((1-stenoza/100),4)),3);
	let presiuneResult = Math.round(presiune/(Math.pow((1-stenoza/100),4)),3);

	let resPanel = document.getElementById("results");

	resPanel.style.display = "flex";
	debitOut.innerText = debitResult + " mL/min";
	presiuneOut.innerText = presiuneResult + " mmHg";

	// window.location.href = "index.html#results";

}


