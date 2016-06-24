    /* Anchor collecions */

    var anchorList = {
        active : [
            {"class":"activeItem", "type":"Athletics"},
            {"class":"activeItem","type":"Badminton"},
            {"class":"activeItem","type":"Basketball"},
            {"class":"activeItem","type":"Boxing"},
            {"class":"activeItem","type":"Cricket"},
            {"class":"activeItem","type":"Cycling"},
            {"class":"activeItem","type":"Exercise"},
            {"class":"activeItem","type":"Football"},
            {"class":"activeItem","type":"Golf"},
            {"class":"activeItem","type":"Gymnastics"},
            {"class":"activeItem","type":"Horseriding"}
        ],
        Visualizer : [
            {"class":"visualizerItem", "type":"Animator"},
            {"class":"visualizerItem", "type":"Caricatures"},
            {"class":"visualizerItem", "type":"Decoration"},
            {"class":"visualizerItem", "type":"Doodle"},
            {"class":"visualizerItem", "type":"Event Management"},
            {"class":"visualizerItem", "type":"Fashion"},
            {"class":"visualizerItem", "type":"Graffitti"},
            {"class":"visualizerItem", "type":"Illustrator"},
            {"class":"visualizerItem", "type":"Movie/Play Director"}
        ],
        PeoplePerson : [
            {"class":"peopleItem", "type":"Advice"},
            {"class":"peopleItem", "type":"Elected Representative"},
            {"class":"peopleItem", "type":"Good Humour"},
            {"class":"peopleItem", "type":"Mediator"},
            {"class":"peopleItem", "type":"Organiser"},
            {"class":"peopleItem", "type":"Teaching"},
            {"class":"peopleItem", "type":"Social Work"},
            {"class":"peopleItem", "type":"Team Player"},
            {"class":"peopleItem", "type":"Volunteer"},
            {"class":"peopleItem", "type":"Good Listener"},
            {"class":"peopleItem", "type":"Extrovert"},
            {"class":"peopleItem", "type":"Connecting with people"},
            {"class":"peopleItem", "type":"Social"},
            {"class":"peopleItem", "type":"Psychology of people"},
            {"class":"peopleItem", "type":"Adaptable"}
        ],
        Reader : [
            {"class":"readerItem", "type":"Fiction"},
            {"class":"readerItem", "type":"Reasearch"},
            {"class":"readerItem", "type":"Non-fiction"},
            {"class":"readerItem", "type":"Magazines"},
            {"class":"readerItem", "type":"Online Reading"},
            {"class":"readerItem", "type":"Crosswords"},
            {"class":"readerItem", "type":"Classics"},
            {"class":"readerItem", "type":"Personal Development"},
            {"class":"readerItem", "type":"Encyclopedia"},
            {"class":"readerItem", "type":"Autobiographics"},
            {"class":"readerItem", "type":"Science Fiction"},
            {"class":"readerItem", "type":"Thesaurus"},
            {"class":"readerItem", "type":"Popular Science"},
            {"class":"readerItem", "type":"Poetry"},
            {"class":"readerItem", "type":"Editorials"}
        ]
    };

    var activeEvidence = [];
    for(var i=0; i<anchorList.active.length; i++){
        var object =  anchorList.active[i];
        activeEvidence.push(object.type);
    }

    var visualizerEvidence = [];
    for(var i=0; i<anchorList.Visualizer.length; i++){
        var object = anchorList.Visualizer[i];
        visualizerEvidence.push(object.type);
    }

    var peoplePersonEvidence = [];
    for(var i=0; i<anchorList.PeoplePerson.length; i++){
        var object = anchorList.PeoplePerson[i];
        peoplePersonEvidence.push(object.type);
    }

    var readerEvidence = [];
    for(var i=0; i<anchorList.Reader.length; i++){
        var object = anchorList.Reader[i];
        readerEvidence.push(object.type);
    }

    var sliderAnchor = [
        {"name":"active", "icon":"active", "text":"Active"},
        {"name":"visualizer", "icon":"visualizer", "text":"Visualizer"},
        {"name":"peoplePerson", "icon":"people-person", "text":"People Person"},
        {"name":"reader", "icon":"reader", "text":"Reader"}
    ]

    for(var i=0; i<sliderAnchor.length; i++){
        var el = '<li class="" id="sliderAnchorNumber'+i+'"><span class="icon '+sliderAnchor[i].icon+'"></span><span class="name">' + sliderAnchor[i].text + '</span><span class=""></span></li>'
        $('#anchorSlider .bxslider').append(el);
    }

    

    
    
$(document).ready(function(){

    
    /* code for compass page */

    $('.anchor-list li').click(function(){
        window.location.href = "compass-3.html";
    });

    /*Active item position get*/

    $('.bxslider li').click(function(){
        $('.bxslider li').removeClass('active');
        $(this).addClass('active');
        var x = $(this).offset().left;
        x += 57;
        $('#anchorSlider .anchor-arrow').css('left', x + 'px');
    });

    var activeEvidenceChecked = [];
    var visualizerEvidenceChecked = [];
    var peoplePersonEvidenceChecked = [];
    var readerEvidenceChecked = [];
    $('#anchorDetails').on("change", "input[type='checkbox']",  function(){
        if($(this).is(':checked') && $(this).parents('li').attr('class') === anchorList.active[0].class){
            var elIndex = ($(this).parents('li').index());
            activeEvidenceChecked.push(elIndex);
            activeEvidenceChecked.sort();
            console.log(activeEvidenceChecked);
            $(this).parents('li').addClass('active');
        }
        else if ($(this).is(':checked') && $(this).parents('li').attr('class') === anchorList.Visualizer[0].class){
            var elIndex = ($(this).parents('li').index());
            visualizerEvidenceChecked.push(elIndex);
            visualizerEvidenceChecked.sort();
            $(this).parents('li').addClass('active');
        }
        else if ($(this).is(':checked') && $(this).parents('li').attr('class') === anchorList.PeoplePerson[0].class){
            var elIndex = ($(this).parents('li').index());
            peoplePersonEvidenceChecked.push(elIndex);
            peoplePersonEvidenceChecked.sort();
            $(this).parents('li').addClass('active');
        }
        else if ($(this).is(':checked') && $(this).parents('li').attr('class') === anchorList.Reader[0].class){
            var elIndex = ($(this).parents('li').index());
            readerEvidenceChecked.push(elIndex);
            readerEvidenceChecked.sort();
            $(this).parents('li').addClass('active');
        } else {
            $(this).parents('li').removeClass('active');
        }
    });

    $('#anchorSlider li').click(function(){
        if($(this).attr('id') === 'sliderAnchorNumber0') {
            showBehaviorInBlock(anchorList.active[0].class, activeEvidence, activeEvidenceChecked);
        }
        if($(this).attr('id') === 'sliderAnchorNumber1') {
            showBehaviorInBlock(anchorList.Visualizer[0].class, visualizerEvidence, visualizerEvidenceChecked);
        }
        if($(this).attr('id') === 'sliderAnchorNumber2') {
            showBehaviorInBlock(anchorList.PeoplePerson[0].class, peoplePersonEvidence, peoplePersonEvidenceChecked);
        }
        if($(this).attr('id') === 'sliderAnchorNumber3') {
            showBehaviorInBlock(anchorList.Reader[0].class, readerEvidence, readerEvidenceChecked);
        }
    });

    function showBehaviorInBlock(value, arry, evidenceName){
        $('#anchorDetails').empty();
        for(var i=0; i<arry.length; i++){
                var count = i+1;
                var idcount = value+i;      
            if(evidenceName[i] == -1){
                var els = '<li class="active '+value+'"><input type="checkbox" id="'+idcount+'" checked="checked"><label for="'+idcount+'"><span class="icon"></span><span class="count">' + count + '</span>'+ arry[i] +'</label></li>';

            }
            else{
                var els = '<li class="'+value+'"><input type="checkbox" id="'+idcount+'" ><label for="'+idcount+'"><span class="icon"></span><span class="count">' + count + '</span>'+ arry[i] +'</label></li>';               
            }
            $('#anchorDetails').append(els);
        }
    }

    showBehaviorInBlock(anchorList.active[0].class, activeEvidence, activeEvidenceChecked);

})