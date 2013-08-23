$(document).ready(function(){

	
	$('#cbox').jflickrfeed({
		limit: 60,
		qstrings: {
			id: '37836646@N03'
		},
		itemTemplate: '<li>'+
						'<a rel="colorbox" href="{{image}}" title="{{title}}">' +
							'<img src="{{image_s}}" alt="{{title}}" />' +
						'</a>' +
					  '</li>'
	}, function(data) {
		$('#cbox a').colorbox();
	});
	
	
	
	});
