$(document).ready(function() {
    // process bar
    setTimeout(function() {
        $('#minorContainer').hide();
        $('#continue').hide();
        $('#txtLast').hide();
        $('#continuelast').hide();
        $('.spinner').fadeOut();
        $('#secondpreloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function init() {
    document.getElementById('titleWebMajor').innerHTML = CONFIG.titleWebMajor
    $('#continue').text(CONFIG.btnContinue)
    $('#no').text(CONFIG.btnNo)

    var xYes = (0.9 * $(window).width() - $('#yes').width() - $('#no').width()) / 2;
    var xNo = xYes + $('#yes').width() + 0.1 * $(window).width();
    var y = 0.75 * $(window).height();
    $('#yes').css("left", xYes);
    $('#yes').css("top", y);

    $('#no').css("left", xNo);
    $('#no').css("top", y);
}

init()

var i = 0;
var i2 = 0;
var i3 = 0;
var txtFirst = 'I....';
var txtSecond = 'Like';
var txtThird = 'You :)';
var speed = 500;
var speed2 = 100;
var speed3 = 100;
const writerDelay = setTimeout(typeWriter, 1200)
const writerDelay2 = setTimeout(typeWriterClimax, 5000)
const writerDelay3 = setTimeout(typeWriterEnding, 5500)
const buttonDelay = setTimeout((function (){
    $('#continue').show();
}), 7000)

function typeWriter() {
    if (i < txtFirst.length) {
    document.getElementById("orientationText").innerHTML += txtFirst.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}
}
function typeWriterClimax() {
    if (i2 < txtSecond.length) {
    document.getElementById("climaxText").innerHTML += txtSecond.charAt(i2);
    i2++;
    setTimeout(typeWriterClimax, speed2);
}
}
function typeWriterEnding() {
    if (i3 < txtThird.length) {
    document.getElementById("endingText").innerHTML += txtThird.charAt(i3);
    i3++;
    setTimeout(typeWriterEnding, speed3);
}
}

$('#continue').click(() => {
    $('#majorContainer').hide();
    $('#minorContainer').show();
    setTimeout(typeWriterMinor, 1000)
    setTimeout((function(){
        $('#continue').hide();
        $('#continuelast').show();
    }),4000);
})

var iMinor = 0;
var iLast = 0;
var txtMinor = 'Can I be closer with u?';
var txtLast = 'Apapun jawabannya, aku berterima kasih.'
var speed4 = 100
var speed5 = 100

function typeWriterMinor() {
    if (i < txtMinor.length) {
        document.getElementById("minorText").innerHTML += txtMinor.charAt(iMinor);
        iMinor++;
        setTimeout(typeWriterMinor, speed4);
    }}

    function typeWriterLast() {
        if (i < txtLast.length) {
            document.getElementById("lastText").innerHTML += txtLast.charAt(iLast);
            iLast++;
            setTimeout(typeWriterLast, speed4);
        }}
        $('#continuelast').click(() => {
            $('#minorText').hide();
            $('#txtLast').show();
            $('#continuelast').hide();
            setTimeout(typeWriterLast, 1000);
        })
