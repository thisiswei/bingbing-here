function getShortMessages(messages) {
	var wholeNew = messages.filter(function(messageP) {
		return messageP.message.length < 50;
	});
	return wholeNew.map(function(item) {
		return item.message;
	});
}


module.exports = getShortMessages