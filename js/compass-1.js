var Personalities = [
	{
		"name":"",
		"reason":['',''],
	},
	{
		"name":"",
		"reason":['',''],
	},
	{
		"name":"",
		"reason":['',''],
	},
	{
		"name":"",
		"reason":['',''],
	},
	{
		"name":"",
		"reason":['',''],
	}

]


var personality = 
	'<div class="add-personality"><div class="row field"><div class="col-9"><label for=""><span class="pro-icon"></span>Personality 1</label><ul><li><input type="text" class="form-control" placeholder="Name" id=""></li><li><input type="text" class="form-control" id="personalityReasonOne" placeholder="Reason"></li><li class="row"><input type="text" class="form-control" id="personalityReasonTwo" placeholder="Reason"><button class="btn btn-success addAnotherReason"><span class="plus-icon"></span>Add Another</button></li></ul></div><div class="thumb-up col-3"><p class="error"><span>Fantastic!</span>You are the only one in your class to select an Athiest to a party.<br><br> Christopher Hitchens was an American Author, essayist, orattor, prominant athiest and literary critic </p><img src="img/thumb-up.png" alt="Thumb up"></div></div><div class="row"><div class="col-9 save-next"><button class="btn btn-save-next">Save and add next<span class="next-icon"></span></button></div></div></div>';	
	$('#addPersonalityWrap').append(personality);

var count = 2;

$('#addPersonalityWrap').on('click', '.addAnotherReason', function(){
	count++;
	var el = '<li><input type="text" class="form-control" id="personalityOneReason' +count+ '" placeholder="Reason"></li>';	
	$(this).parents('li').before(el);
	return false
});

$('#addPersonalityWrap').on('click', '.btn-save-next', function(){
	if(count <= 5){
		var el = '<div class="add-personality"><div class="row field"><div class="col-9"><label for=""><span class="pro-icon"></span>Personality' +count+ '</label><ul><li><input type="text" class="form-control" placeholder="Name" id="personalityName' +count+ '"></li><li><input type="text" class="form-control" id="personalityReasonOne' +count+ '" placeholder="Reason"></li><li class="row"><input type="text" class="form-control" id="personalityReasonTwo' +count+ '" placeholder="Reason"><button class="btn btn-success addAnotherReason"><span class="plus-icon"></span>Add Another</button></li></ul></div><div class="thumb-up col-3"><p class="error"><span>Fantastic!</span>You are the only one in your class to select an Athiest to a party.<br><br> Christopher Hitchens was an American Author, essayist, orattor, prominant athiest and literary critic </p><img src="img/thumb-up.png" alt="Thumb up"></div></div><div class="row"><div class="col-9 save-next"><button class="btn btn-save-next">Save and add next<span class="next-icon"></span></button></div></div></div>';	
		$('#addPersonalityWrap').append(el);
		count++;
	}
	return false
});

