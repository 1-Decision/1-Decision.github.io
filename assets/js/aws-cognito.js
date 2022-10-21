if(param_map.get("email") != "") {
	var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

	var poolData = {
		UserPoolId: 'us-west-1_PmJfEDNM4', 
		ClientId: '34d4if06g886ovue2ni3pr24i4', // Your client id here
	};

	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

	var attributeList = [];

	var dataEmail = {
		Name: 'email',
		Value: param_map.get("email").replace("%40", "@"),
	};

	var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

	attributeList.push(attributeEmail);

	userPool.signUp(dataEmail.Value, 'DummyPassword123$%^', attributeList, null, function(
		err,
		result
	) {
		if (err) {
			alert(err.message || JSON.stringify(err));
			return;
		}

		var cognitoUser = result.user;
		//alert('user name is ' + cognitoUser.getUsername());
	});

	document.getElementById("home-section").style.display = "none";
	document.getElementById("home-section").style.opacity = 0.0;
	document.getElementById("done-section").style.display = "block";
	document.getElementById("done-section").style.opacity = 1.0;
}