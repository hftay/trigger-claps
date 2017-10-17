

$('.hold_trigger').on('mousedown', function(event){
	var $parent = $(event.target).closest('body');
	var $claps = $parent.find('.claps-count');

	timerID = setInterval(function(){
		counter = Number( $claps.text() );
		counter ++;
		$claps.text(counter);
	},100)
}).bind('mouseup mouseleave', function(){
	clearInterval(timerID);
});