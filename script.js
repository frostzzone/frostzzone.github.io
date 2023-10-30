function changeText() {
	const season = [Math.floor(((new Date()).getMonth() / 12 * 4)) % 4];
	const local = document.getElementById('location');
	const age = document.getElementById('age');

	const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

	local.innerText = [
		'in a barren, cold wasteland somewhere in',
		'very wet state in',
		'somewhat hot place in',
		'in a chilly state of'
	][season]
	age.innerText = `${getAge('2005-07-25')}`
}

changeText();