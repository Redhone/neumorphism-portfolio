const typeWriting = new TypeWriting({
	targetElement   : document.getElementsByClassName('terminal')[0],
	inputString     : "<h2>JOHN DOE</h2><br><p>a 23 year old talented full stack web developer from algeria, with +4 years of experience and +50 projects.</p>",
	typingInterval  : 25,
	blinkInterval   : '500ms',
	cursorColor     : 'black',
}, () => console.log('END'));