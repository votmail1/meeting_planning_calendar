function calendar(){
	document.title = 'Calendar';
	const body = document.querySelector('#calendar');
	let tableCreate = document.createElement('table');
	tableCreate.id = 'calendarTable';
	body.appendChild(tableCreate);
	let user = document.querySelector('#members').value;
	
	let table = document.querySelector('#calendarTable');

	const cell = [['Name', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'], 
				['10:00', 'Mon10', 'Tue10', 'Wed10', 'Thu10', 'Fri10',],
				['11:00', 'Mon11', 'Tue11', 'Wed11', 'Thu11', 'Fri11',],
				['12:00', 'Mon12', 'Tue12', 'Wed12', 'Thu12', 'Fri12',],
				['13:00', 'Mon13', 'Tue13', 'Wed13', 'Thu13', 'Fri13',],
				['14:00', 'Mon14', 'Tue14', 'Wed14', 'Thu14', 'Fri14',],
				['15:00', 'Mon15', 'Tue15', 'Wed15', 'Thu15', 'Fri15',],
				['16:00', 'Mon16', 'Tue16', 'Wed16', 'Thu16', 'Fri16',],
				['17:00', 'Mon17', 'Tue17', 'Wed17', 'Thu17', 'Fri17',],
				['18:00', 'Mon18', 'Tue18', 'Wed18', 'Thu18', 'Fri18',],];
	
	let selector = document.getElementsByTagName('select')[0];
	selector.onchange = choise;			
	let todoList = JSON.parse(localStorage.getItem('event'));
	
	//selectors function to choise the member
	function choise(){		
		let name = this.value;
		
		let tasks = document.getElementsByClassName('tasks');
		if (name != 'All members'){
			for (let l = 0; l < tasks.length; l++) {
				tasks[l].innerHTML='';
					for (let i = 0; i < todoList.length; i++) {	
						if (((todoList[i].day.slice(0,3)+todoList[i].time) == (tasks[l].id)) ){	
						if (!!(todoList[i].participant).match(name)){
							let container = document.createElement('div');
							container.className = 'container';
							container.style.display = 'flex';
							container.style.backgroundColor = '#daf3ba';
							tasks[l].appendChild(container);
							let containerEvent = document.createElement('div');
							containerEvent.className = 'event';
							containerEvent.innerHTML = todoList[i].name;
							container.appendChild(containerEvent);
							let containerX = document.createElement('div');
							containerX.className = 'X';
							containerX.innerHTML = 'X';
							containerX.onclick = ()=>{
								let myConfirm = document.createElement('div');
								myConfirm.id = 'myconfirm'
								myConfirm.style.display = 'block';
								body.appendChild(myConfirm);
								let message = document.createElement('div');
								message.id = 'message'
								message.style.display = 'block';
								message.innerHTML = 'Are you sure, you want to delete   "' + todoList[i].name.slice(0,18) + '"   event?'
								myConfirm.appendChild(message);
								let buttonsDiv = document.createElement('div');
								buttonsDiv.id = 'buttonsdiv'
								buttonsDiv.style.display = 'block';
								myConfirm.appendChild(buttonsDiv);
								let no = document.createElement('button');
								no.innerHTML = 'No';
								no.id = 'no';
								buttonsDiv.appendChild(no);
								no.onclick = ()=>{	
									myConfirm.style.display = 'none';
								}
								let ok = document.createElement('button');
								ok.innerHTML = 'Yes';
								ok.id = 'yes';
								buttonsDiv.appendChild(ok);
								ok.onclick = ()=>{		
									if (i == 0){
										todoList.shift();
									}
									todoList.splice ([i],[i]);
									localStorage.setItem('event', JSON.stringify(todoList));
									window.location.href = 'calendar.html';	
								}						
							}
							tasks[l].appendChild(containerX);	
						}	
					}
				}
			}
		}
		else {
			window.location.href = 'calendar.html';	
		}
	}	
	
	//default table
	for (let string of cell) {
		let tr = document.createElement('tr');	

		for (let elem of string) {
			let td = document.createElement('td');
			if (string == cell[0]){
				td.className = 'head';
				td.innerHTML = elem;
			}
			else if (string[0] == elem ){
				td.className = 'time';
				td.innerHTML = elem;
			}
			else if (string[1] = cell[1] ){
				td.className = 'tasks';
				td.id = elem;
				let container = document.createElement('div');
				container.className = 'container';
				td.appendChild(container);
				if (localStorage.getItem('event')!=undefined){
						for (let i = 0; i < todoList.length; i++) {							
							if (((todoList[i].day.slice(0,3)+todoList[i].time) == (elem)) ){
								container.style.display = 'flex';
								container.style.backgroundColor = '#daf3ba';								
								let containerEvent = document.createElement('div');
								containerEvent.className = 'event';
								
								containerEvent.innerHTML = todoList[i].name;
								container.appendChild(containerEvent);
								let containerX = document.createElement('div');
								containerX.className = 'X';
								containerX.innerHTML = 'X';
								containerX.onclick = ()=>{
									let myConfirm = document.createElement('div');
									myConfirm.id = 'myconfirm'
									myConfirm.style.display = 'block';
									body.appendChild(myConfirm);
									let message = document.createElement('div');
									message.id = 'message'
									message.style.display = 'block';
									message.innerHTML = 'Are you sure, you want to delete   "' + todoList[i].name.slice(0,18) + '"   event?'
									myConfirm.appendChild(message);
									let buttonsDiv = document.createElement('div');
									buttonsDiv.id = 'buttonsdiv'
									buttonsDiv.style.display = 'block';
									myConfirm.appendChild(buttonsDiv);
									let no = document.createElement('button');
									no.innerHTML = 'No';
									no.id = 'no';
									buttonsDiv.appendChild(no);
									no.onclick = ()=>{	
										myConfirm.style.display = 'none';
									}
									let ok = document.createElement('button');
									ok.innerHTML = 'Yes';
									ok.id = 'yes';
									buttonsDiv.appendChild(ok);
									ok.onclick = ()=>{											
										if (i == 0){
											todoList.shift();
										}
										todoList.splice([i],[i]);
										localStorage.setItem('event', JSON.stringify(todoList));
										window.location.href = 'calendar.html';	
									}
								}
								td.appendChild(containerX);	
							}
						}
					
				}	
			}
			tr.appendChild(td);			
		}
		table.appendChild(tr);
	}
}


