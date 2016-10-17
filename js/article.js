$(function(){
    $('.long-card').each(function(){
        $(this).addClass('z-depth-1');
    });
    generate_dir();
    $('.scrollspy').scrollSpy();
    $('#directory>ul').pushpin({top: $('#directory').offset().top});
    
});

function generate_dir(){
    var heading= $('#content .scrollspy');
    //console.log(heading);
    var counter= 0;
    heading.each(function(){
        $(this).attr('id', 'heading-'+ (++counter).toString());
        //console.log($(this));
    });
    heading= heading.toArray();
    //console.log(heading);
    var result= $('<ul class="table-of-contents"></ul>');
    //console.log(result);
    counter=0;
    for(var i in heading){
        var elem= heading[i];
        var name= $(elem).children('h2,h3,h4')[0].tagName;
        var text= $(elem).children('h2,h3,h4').text();
        var li= $('<li class="dir-'+name+'"><a href="#heading-'+ ++counter+'">'+text+'</a></li>');
        result.append(li);
        //console.log(li);
    }
    $('#directory').append(result);
    
}