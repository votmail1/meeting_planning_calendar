function newEvent (){
	const body = document.querySelector('#calendar');
	body.innerHTML = ' ';
	function options (elemen, data){
		let options = document.createElement('option');
		elemen.appendChild(options);
		options.innerHTML = data;
	}
	//name of event form
	let containerName = document.createElement('div');
	containerName.id = 'containerName';
	containerName.innerHTML = 'Name of the event:';
	body.appendChild(containerName);
	let textareaName = document.createElement('textarea');
	textareaName.id = 'textareaName';
	textareaName.maxlength="10"
	containerName.appendChild(textareaName);
	//Participants selector
	let containerParticipants = document.createElement('div');
	containerParticipants.id = 'participants';
	containerParticipants.innerHTML = 'Participants:';
	body.appendChild(containerParticipants);
	
	let members = document.createElement('select');
	members.id = 'participantsMenu';
	containerParticipants.appendChild(members);
	
    //add you members list here
	options (members, 'Maria, Bob, Alex');
	options (members, 'Maria');
	options (members, 'Bob');
	options (members, 'Alex');
	options (members, 'John');
	
	//day selector
	let containerDay = document.createElement('div');
	containerDay.id = 'containerDay';
	containerDay.innerHTML = 'Day:';
	body.appendChild(containerDay);
	
	let day = document.createElement('select');
	day.id = 'day';
	containerDay.appendChild(day);
	
	options (day, 'Monday');
	options (day, 'Tuesday');
	options (day, 'Wednesday');
	options (day, 'Thursday');
	options (day, 'Friday');
	
	//time selector
	let containerTime = document.createElement('div');
	containerTime.id = 'containerTime';
	containerTime.innerHTML = 'Time:';
	body.appendChild(containerTime);
	
	let time = document.createElement('select');
	time.id = 'time';
	containerTime.appendChild(time);
	for (let i = 0; i < 9; i++){
		options (time, '1'+i+':00');
	}
	//buttons
	let containerButtons = document.createElement('div');
	containerButtons.id = 'containerButtons';
	body.appendChild(containerButtons);
	
	let cancelButton = document.createElement('button');
	cancelButton.innerHTML = 'Cancel';
	cancelButton.id = 'cancelButton';
	containerButtons.appendChild(cancelButton);
	cancelButton.onclick = ()=>{
		window.location.href = 'calendar.html';
	}
	
	let createlButton = document.createElement('button');
	createlButton.innerHTML = 'Create';
	createlButton.id = 'createlButton';
	containerButtons.appendChild(createlButton);	
	
	let todoList = [];
	if (localStorage.getItem('event')!=undefined){
		todoList = JSON.parse(localStorage.getItem('event'));
	}
	createlButton.onclick = ()=>{
			let temp = {};
			temp.participant= members.value
			temp.name = textareaName.value.slice(0,15);
			temp.day = document.querySelector('#day').value;
			temp.time = time.value.slice(0,2);
			let i = todoList.length;
			if (temp.name == 0){
				alertMessage ('Filed to create an event. Enter the name of the evrnt.');
				return;
			}
			console.log(temp.name == 0);
			for (let i = 0; i < todoList.length; i++){
				console.log(todoList[i].day);
				console.log(todoList[i].time);
				if ((todoList[i].day == temp.day) && (todoList[i].time == temp.time)){
					alertMessage ('Filed to create an event. Time slot is already booked.');
					return;
				}
			}			
			todoList[i] = temp;			
			localStorage.setItem('event', JSON.stringify(todoList));
			window.location.href = 'calendar.html';			
	}
	//alert message at the top of the window
	function alertMessage (message){
		let div = document.createElement('div');
		div.id = 'alertMessage';		
		body.appendChild(div);
		div.style.display = 'flex';
		let redDot = document.createElement('div');
		redDot.id = 'redDot';
		div.appendChild(redDot);
		let warning = document.createElement('div');
		warning.id = 'warning';
		warning.innerHTML = message;
		div.appendChild(warning);
		let redCross = document.createElement('div');
		redCross.id = 'redCross';		
		redCross.onclick = ()=> {
			div.style.display = 'none';
		}
		div.appendChild(redCross);
		
	}
}