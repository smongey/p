var deviceReadyDeferred = $.Deferred();
var jqmReadyDeferred = $.Deferred();

$(document).on("deviceready", function() {
  deviceReadyDeferred.resolve();
});

$(document).on("mobileinit", function () {
  jqmReadyDeferred.resolve();
});

$.when(deviceReadyDeferred, jqmReadyDeferred).then(init);

function init() {
}


// $(document).ready(function(){
//   FastClick.attach(document.body);
// });

// navigation links
$(document).on('click', 'div.fixednav a', function(){

	$('.fixednav li').removeClass('active');
	$(this).parent().addClass('active');
	console.log($(this).text() + ' hey');

// channel sublinks
}).on('touchstart', '.channelnav a', function(){

	$('.channelnav a').removeClass('active')
	$(this).addClass('active');
	$('.next div').toggleClass('active');

});

// $(document).on('touchstart', 'body', function(){
// 	console.log('worked');
// })

$(document).on('vclick', 'a', function(){
    console.log('worked');
});