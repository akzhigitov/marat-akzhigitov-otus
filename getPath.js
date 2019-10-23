function getPath(selectedElement) {
	const elements = []
	while (selectedElement && selectedElement !== document.body) {
		const tag = selectedElement.tagName.toLowerCase()
		const id = selectedElement.id ? "#" + selectedElement.id : '';
		const className = selectedElement.className ? '.' + selectedElement.className.split(' ').filter(x => x).join('.') : ''
		const nth = getNthChild(selectedElement)
		
		elements.unshift(tag + id + className + nth);
		selectedElement = selectedElement.parentElement;
	}

	function getNthChild(selectedElement){
		let previousSibling = selectedElement.previousElementSibling
		let nthCount = 1

		while (previousSibling) {
			nthCount += 1
			previousSibling = previousSibling.previousElementSibling;
		}

		return nthCount > 1 ? ':nth-child(' + nthCount + ')' : ''
	}

	return elements.join('>')
}

function test(selectedElement) {
	var selector = getPath(selectedElement)
	console.log(selector);

	console.assert(document.querySelector(selector) === selectedElement)
	console.assert(document.querySelectorAll(selector).length === 1)
}
