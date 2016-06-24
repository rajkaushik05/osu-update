	/* Anchor collecions */

	var anchorCollection = [
		{
			"name":"activeAnchor", 
			"icon":"active", 
			"status":"", 
			"text":"Active", 
			"evidence":['Athletics', 'Badminton', 'Basketball', 'Boxing', 'Cricket', 'Cycling', 'Exercise', 
			'Football', 'Golf', 'Gymnastics', 'Horseriding'],
			"des":"Do you like Football, Athletics or Wrestling?"
		},

		{
			"name":"visualizerAnchor", 
			"icon":"visualizer", 
			"status":"", 
			"text":"Visualizer", 
			"evidence":['Animator', 'Caricatures', 'Decoration', 'Doodle', 
			'Event Management', 'Fashion', 'Graffitti', 'Illustrator', 'Movie/Play Director'],
			"des":"Do you like Animation, Grafitti or even Doodling?"
		},

		{
			"name":"peoplePersonAnchor", 
			"icon":"people-person", 
			"status":"", 
			"text":"People Person", 
			"evidence":['Advice', 'Elected Representative', 'Good Humour', 'Mediator', 
			'Organiser', 'Teaching', 'Social Work', 'Team Player', 'Volunteer', 'Good Listener', 
			'Extrovert', 'Connecting with people', 'Social', 'Psychology of people', 'Adaptable'],
			"des":"Are you interested in teaching, social work or connecting with people?"
		},

		{
			"name":"readerAnchor", 
			"icon":"reader", 
			"status":"", 
			"text":"Reader", 
			"evidence":['Fiction', 'Reasearch', 'Non-fiction', 'Magazines', 
			'Online Reading', 'Crosswords', 'Classics', 'Personal Development', 'Encyclopedia', 
			'Autobiographics', 'Science Fiction', 'Thesaurus', 'Popular Science', 'Poetry', 'Editorials'],
			"des":"Love Crosswords or a Keats's Poem? Do you like reading books?"
		}
	];

	var Store = {

	};
	
	for(var i=0; i<anchorCollection.length; i++){
		var elId = anchorCollection[i].name +"Item";
		var el = '<li class="" id="'+elId+'"><span class="icon '+anchorCollection[i].icon+'"></span><span class="name">' + anchorCollection[i].text + '</span><span class="status-icon"></span></li>'
		$('#anchorSlider .bxslider').append(el);
	}
	
	/* compass page-2 listed Anchor list items */	
	for(var i=0; i<anchorCollection.length; i++){
		var elId = anchorCollection[i].name +"Item";
		var el = '<li class="" id="'+elId+'"><span class="icon '+anchorCollection[i].icon+'"></span><span class="name">' + anchorCollection[i].text + '</span><p>'+anchorCollection[i].des+'</p></li>';
		$('#anchorListItems').append(el);
	}


	function showBehaviorInBlock(anchorName, index){
        $('#anchorDetails').empty();
        var prev = Store[index]||[];
        for(item in anchorName.evidence){
			var elId = anchorName.name + item;
			var count = item;
			count++;
			var isChecked  =  (prev.indexOf(elId)!==-1)? 'checked="checked"' :'';
			var isActive = (prev.indexOf(elId)!== -1) ? 'active' : '';
			var els = '<li class="'+anchorName.name+' '+isActive+'"><input  ' +isChecked +' data-parent="'+index+'" type="checkbox" id="'+elId+'" ><label for="'+elId+'"><span class="icon"></span><span class="count">' + count + '</span>'+ anchorName.evidence[item] +'</label></li>';               
			$('#anchorDetails').append(els);
		}
    }

    $('#anchorSlider li').click(function(){ 
   		showBehaviorInBlock(anchorCollection[$(this).index()], $(this).index());
   		var index = ($(this).index());
   		var prev = Store[index] || [];
   		for(el in Store){
   			$('#anchorSlider li').eq(el).removeClass().addClass('done');
   		}
   		if (prev.length > 0){
   			$(this).removeClass().addClass('done');
   		} else {
   			$(this).addClass('active');
   		}
   		var anchorText = $(this).next().find('.name').text();
   		$('#nextAnchorText').text(anchorText);
   		$('#thirdStepCompassBtn').show();
   		$('#thirdStepCompassContinueBtn').hide();
   		$('#anchorSlider .anchor-arrow').show();
    });

    $('#anchorDetails').on("change", "input[type='checkbox']",  function(){
    	var index =  $(this).attr('data-parent');
    	var prev = Store[index] ||  (Store[index] = []);  
    	var elId =  $(this).attr('id');
    	if($(this).is(':checked')){
    		prev.push(elId);
            $(this).parents('li').addClass('active');
        } else {
        	prev.splice(prev.indexOf(elId),1);
        	$(this).parents('li').removeClass('active');
        }
    });

	

	
	
$(document).ready(function(){

	/* Add PERSONALITY block compass-1.html page*/
	
	/* code for compass page */

	$('.anchor-list li').click(function(){
		var elId = $(this).attr('id');
		//var temp = 'compass-3.html#' + elId;
		window.location.href = 'compass-3.html#' + elId;
	});

	/*Active slider item arrow position get*/

	$('.bxslider li').click(function(){
		var x = $(this).position().left;
		x += 100;
		$('#anchorSlider .anchor-arrow').css('left', x + 'px');
	});

	/* Compass third step continue button */
	$('#thirdStepCompassContinueBtn').click(function(){
		window.location.href = 'compass-4.html';
		return false
	});

	/* Start final selected Anchor Evidence list and Drag and Drop functionality*/
	$('#thirdStepCompassBtn').click(function(){
		$('#anchorDetails').empty();
		var size  = Object.keys(Store).length;
        var prev = [];
        var elementsList = [];
		for(var i=0; i<size; i++){
		  var tempArray = Store[i];
		  for(prop in tempArray){
		    prev.push(tempArray[prop]);
		  }
		}
		var count = 1;
        for(var i=0; i<anchorCollection.length; i++){
	        for(item in anchorCollection[i].evidence){
				var elId = anchorCollection[i].name + item;
				if(prev.indexOf(elId) !== -1){
					//var els = '<li><label> '+ anchorCollection[i].evidence[item] +' </label></li>';               					
					var els = '<li class="active '+anchorCollection[i].name+'"><input  checked="checked" type="checkbox" id="'+elId+'" disabled="disabled"><label for="'+elId+'"><span class="icon"></span><span class="count">'+count+'</span>'+ anchorCollection[i].evidence[item] +'</label><span class="move-icon"></span></li>'; 
					elementsList.push(els);
					count++;
				}
			}
        };
        
        for(el in elementsList){
        	var ele = elementsList[el];
        	$('#anchorDetails').append(ele);
        }
        $(this).hide();
        $('#thirdStepCompassContinueBtn').show();
		return false
	});

	function updateCount(){
		$('#anchorDetails li').each(function(i, el){
			$(this).find('.count').html(i+1);
		})
	}

	$('#anchorDetails').on('dragleave','li', function(){
		updateCount();
	})

	var moveAbleItem = document.getElementsByClassName('moveableAnchorList')[0];
	var sortable = Sortable.create(moveAbleItem);

	/* End final selected Anchor Evidence list and Drag and Drop functionality*/





})