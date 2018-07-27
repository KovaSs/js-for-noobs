function myApp(name, age) {

	document.write(`Hello my name ${name} and this is my first program! <br>`);

	function showSkills() {
		// Write your skills
		let skills = [ "HTML", "CSS", "JS"],
				ageText;

		for (let i = 0; i < skills.length; i++) {
				// Write "I'm know <br>"
			let skillsText = "I know " + skills[i] + "<br>";
			document.write(skillsText);
			console.log(skillsText);
				
		}
	}

	function checkAge() {
		if (age >	18) {
			// Write message
			ageText = "I congratulate you more than 18 years! <br>";
			document.write(ageText);
			console.log(ageText);
		} else {
			// Wrire condition if
			ageText = "You are under 18 years old! <br>";
			console.log(ageText);
			document.write(ageText);
		}
	}

	function pow(num) {
		// Write function sqrt^2
		let powText = Math.pow(num, 2);
		console.log(powText);
		document.write(powText);

	}

	showSkills();
	checkAge();
	pow(age);
};

myApp("Denis", 22);