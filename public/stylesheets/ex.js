book =  {
	id: 1,
	text: 'text more text'

}

findWords (book, 'text') // [0,10]


function findWords(book,word) {
	let returnArray = []  //case insensitive
	let text = book.text
	let (var i = 0; i < text.length; i++) {
		if(text.startsWith(word,i)){
			returnArray.push(i)
		}
	}
	return returnArray
}