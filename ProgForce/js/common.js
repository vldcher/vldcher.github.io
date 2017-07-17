
$(function() {


	var name, surname, email, phone, birthdate;
	var arrayPersons = [];
	var submit = document.getElementById('submit');
	var chooseWinnerButton = document.getElementById('winner');
	var winnerName = document.getElementById('winnerName');

	submit.onclick = function addPerson(){

			//get necessary values
			name = document.getElementById('name').value;
			surname = document.getElementById('surname').value;
			email = document.getElementById('email').value;
			phone = document.getElementById('phone').value;
			birthdate = document.getElementById('birthdate').value;

			//input validation

			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			if (name != '' && email != '' && surname != '') {
				if (email.match(emailReg)) {

				} else {
					alert("Error, email should look like 'example@gmail.com'");

					return false;
				}
			} else {
				alert("Fields: Name, Surname, Email are required!");
				showError(name, ' Укажите имя');
				return false;
			}

			//find table
			var tbody = document.getElementById('lotteryTable').getElementsByTagName('tbody')[0];

			//create table and add row 
			var row = document.createElement('tr');
			tbody.appendChild(row);

			//create cells in row
			var td1 = document.createElement("td");
			var td2 = document.createElement("td");
			var td3 = document.createElement("td");
			var td4 = document.createElement("td");
			var td5 = document.createElement("td");

			row.appendChild(td1);
			row.appendChild(td2);
			row.appendChild(td3);
			row.appendChild(td4);
			row.appendChild(td5);

			//add values to cells
			td1.innerHTML = name;
			td2.innerHTML = surname;
			td3.innerHTML = email;
			td4.innerHTML = phone;
			td5.innerHTML = birthdate;

			function getArray() {

				inp = document.getElementsByClassName('nameField');

				function save() {
					for (var i = 0; i < inp.length; i++) {
						//add new person names to array
						arrayPersons.push(inp[i].value);
					}
					console.log(arrayPersons);
				}
				save();
			} 
			getArray();
			return false;
			submit();
		}

		chooseWinnerButton.onclick = function getWinner() {

			var haveWinner = document.querySelector(".winnerStyle");

			if (!haveWinner) {
				//randow choose from array
				var rand = Math.floor(Math.random() * arrayPersons.length);
				randomWinner = arrayPersons[rand];

				if (!randomWinner){
					alert('Attention, to start, please add at least one person for game');
				}
				else {
					//append our winner name to HMTL and some styles
					var name = document.createElement('span');
					name.className = 'winnerStyle';
					name.innerHTML = randomWinner;
					winnerName.appendChild(name);
				}		
			}
			else {
				haveWinner.remove();
				getWinner(); // if delete that, we need press Choose button twice for new winner
			}
		};
	});
