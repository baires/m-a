//language

var language = window.navigator.userLanguage || window.navigator.language;

if (language == 'pt-BR') {
  $('.es').hide();
  $('.pt').show();
};

// Preloader
      $(window).load(function() { // makes sure the whole site is loaded
          $('#preloader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
          $('body').delay(150).css({'overflow':'visible'});
      })

// map
var styles = [ ]

  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"})

  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(-34.586899, -58.409920),
    scrollwheel: false,
     styles: [   {featureType:"administrative",elementType:"all",stylers:[{visibility:"on"},{saturation:-100},{lightness:20}]},  {featureType:"road",elementType:"all",stylers:[{visibility:"on"},{saturation:-100},{lightness:40}]},    {featureType:"water",elementType:"all",stylers:[{visibility:"on"},{saturation:-10},{lightness:30}]},    {featureType:"landscape.man_made",elementType:"all",stylers:[{visibility:"simplified"},{saturation:-60},{lightness:10}]},   {featureType:"landscape.natural",elementType:"all",stylers:[{visibility:"simplified"},{saturation:-60},{lightness:60}]},    {featureType:"poi",elementType:"all",stylers:[{visibility:"off"},{saturation:-100},{lightness:60}]},    {featureType:"transit",elementType:"all",stylers:[{visibility:"off"},{saturation:-100},{lightness:60}]}],


    // disable mapType-top_right corner
    mapTypeControl: false,
    disableDefaultUI: false,
    draggable: true,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map']
    }
  };
    var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

    var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(-34.586899, -58.409920),
        map: map,
        icon: 'images/marker.png' // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
    });


map.mapTypes.set('map', styledMap);
map.setMapTypeId('map');

// Date Stuff

var today = new Date();
var date_we_kiss = new Date('2012-03-10');
var date_we_met = new Date('2011-11-28');
var date_we_move_in = new Date('2012-12-20');
var date1 = today.getTime() - date_we_kiss.getTime();
var date2= today.getTime() - date_we_met.getTime();
var date3 = today.getTime() - date_we_move_in.getTime();

var result1 = Math.ceil(date1 / (1000 * 60 * 60 * 24));
var result2 = Math.ceil(date2 / (1000 * 60 * 60 * 24));
var result3 = Math.ceil(date3 / (1000 * 60 * 60 * 24));



var options = {
  useEasing : true,
  useGrouping : true,
  separator : ',',
  decimal : '.'
}

var number1 = new countUp("one", 5, result1, 0, 2.5, options);
var number2 = new countUp("two", 5, result2, 0, 2.5, options);
var number3 = new countUp("three", 5, result3, 0, 2.5, options);

$('.numbers').waypoint(function() {
  number1.start();
  number2.start();
  number3.start();
}, { offset: 100 });

// CountDown
// set the date we're counting down to
var target_date = new Date("Marc 28, 2014").getTime();

// variables for time units
var days, hours, minutes, seconds;

// get tag element
var countdown = document.getElementById("countdown");

// update the tag with id "countdown" every 1 second
setInterval(function () {

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    // format countdown string + set tag value
    countdown.innerHTML = days + " Días, " + hours + " horas, "
    + minutes + " minutos, " + seconds + " segundos";

}, 1000);