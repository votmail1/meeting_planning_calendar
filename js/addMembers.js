			function options (elemen, data){
		let options = document.createElement('option');
		elemen.appendChild(options);
		options.innerHTML = data;
	}
		options (members, 'Maria, Bob, Alex');
		options (members, 'Maria');
		options (members, 'Bob');
		options (members, 'Alex');
		options (members, 'John');