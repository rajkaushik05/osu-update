	var d = {
	data: [	 
		{'title':"Mathematics", 'type':['no_medical', 'commerce_with-maths'] },
		{'title':"Physics", 'type': ['no_medical'] },
		{'title':"Chemistry", 'type': ['no_medical', 'medical'] },
		{'title':"Biology", 'type': ['medical']},
		{'title':"English", 'type': ['no_medical', 'medical', 'commerce_with-maths', 'commerce_without-maths']},
		{'title':"Engineering Graphics", 'type': []},
		{'title':"Accounts", 'type': ['commerce_with-maths', 'commerce_without-maths']},
		{'title':"Economics", 'type': ['commerce_with-maths', 'commerce_without-maths']},
		{'title':"Business Studies", 'type': ['commerce_with-maths', 'commerce_without-maths']},
		{'title':"Computers", 'type': []},
		{'title':"Fashion Studies", 'type': []},
		{'title':"Physical Education", 'type': []},
		{'title':"Geography ", 'type': []},
		{'title':"Political Science", 'type': []},
		{'title':"History", 'type': []},
		{'title':"Home Science", 'type': []},
		{'title':"Fine Arts", 'type': []},
		{'title':'Agriculture','type': []},
		{'title':'Multimedia and Web Technology','type': []},
		{'title':'Sociology','type': []},
		{'title':'Music and Dance','type': []},
		{'title':'Entrepreneurship','type': []},
		{'title':'Heritage Crafts','type': []},
		{'title':'Mass Media Studies','type': []},
		{'title':'Legal Studies','type': []},
		{'title':'Human Rights and Gender Studies','type': []},
		{'title':'National Cadet Crops','type': []}
	]
};
var no_medical	= d.data.filter(function(d){
	return (d.type.indexOf('no_medical') !== -1);
}).map(function(d){
	var d = JSON.parse(JSON.stringify(d));
	d.editable = false;
	return d;
});

var medical	= d.data.filter(function(d){
	return (d.type.indexOf('no_medical') !== -1);
}).map(function(d){
	var d = JSON.parse(JSON.stringify(d));
	d.editable = false;
	return d;
});