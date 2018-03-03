var userAccount = {
	id : 536,
	name : 'shree',
	street : '206 S 3rd St.',
	apptNo : '566',
	state : 'california',
	country : 'USA',
	address : function(){
		return this.street + " ApptNo : " + this.apptNo + ", " + this.state + ", " + this.country;
	}
};

console.log("The address of user " + userAccount.name + " is "
		+ userAccount.address());