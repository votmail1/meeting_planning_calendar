function manager(){
	let body = document.querySelector('#calendar');	
	let div = document.createElement('div');
	div.id = 'manager';
	body.appendChild(div);
	
	//name
	let container = document.createElement('div');
	container.id = 'name';
	container.innerHTML = 'Calendar';
	div.appendChild(container);
	tempArr =[];
	
	//members menu
	 let temp = '';
	 todoList = JSON.parse(localStorage.getItem('event'));
	 if (todoList!=undefined){
			for (let i=0; i < todoList.length; i++){
				if (!temp.match(todoList[i].participant)){
				temp += ',' + todoList[i].participant;
				}
			}
		tempArr = temp.split(',');
		let shTempArr = tempArr.shift();		
	 }
	
	let members = document.createElement('select');
	members.id = 'members';
	div.appendChild(members);
	
	for (let i=0; i<tempArr.length+1; i++){
		let options = document.createElement('option');
		members.appendChild(options);
		options.innerHTML = tempArr[i-1];
		if (i == 0){
			options.selected='selected';
			options.innerHTML = 'All members';
		}		
	}
	 
	//button
	let eventButton = document.createElement('button');
	eventButton.innerHTML = 'New event +';
	eventButton.id = 'eventButton';
	div.appendChild(eventButton);
	eventButton.onclick = ()=>{
		window.location.href = 'create-event.html';
	}
}