fetch('https://disease.sh/v3/covid-19/countries/india')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
    document.getElementById("active").innerHTML = data.active.toLocaleString();
    document.getElementById("total").innerHTML = data.cases.toLocaleString();
    document.getElementById("deaths").innerHTML = data.deaths.toLocaleString();
    document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
	document.getElementById("critical").innerHTML = data.recovered.toLocaleString();
	document.getElementById("tests").innerHTML = data.recovered.toLocaleString();
});

// Scroll TO Top
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 100);
			return false;
		});
});

// Contact Tag
$(document).ready(function(){
	$('.toggle').click(function(){
	  $('.sidebar-contact').toggleClass('active')
	  $('.toggle').toggleClass('active')
	})
  })

//Try

$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true
    });
});