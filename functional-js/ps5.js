
function checkUsersValid(goodUsers) {
	return function userdata(users) {
		return users.every(function(user) {
			return goodUsers.indexOf(user) >= 0;
		})
	}
}

module.exports = checkUsersValid