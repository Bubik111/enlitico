$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function init() {
    document.getElementById('titleWeb').innerHTML = CONFIG.titleWeb
    $('#title').text(CONFIG.title)
    $('#desc').text(CONFIG.desc)
    $('#yes').text(CONFIG.btnYes)
    $('#no').text(CONFIG.btnNo)

    var xYes = (0.9 * $(window).width() - $('#yes').width() - $('#no').width()) / 2;
    var xNo = xYes + $('#yes').width() + 0.1 * $(window).width();
    var y = 0.75 * $(window).height();
    $('#yes').css("left", xYes);
    $('#yes').css("top", y);

    $('#no').css("left", xNo);
    $('#no').css("top", y);
}

function firstQuestion() {
    $('.content').hide();
    Swal.fire({
        title: CONFIG.introTitle,
        text: CONFIG.introDesc,
        allowOutsideClick: false,
        allowEscapeKey: false,
        background: '#fff url("img/iput-bg.jpg")',
        imageAlt: 'Custom image',
        confirmButtonText: CONFIG.btnIntro
    }).then(function() {
        $('.content').show(200);
        var audio = new Audio('sound/sound.mp3');
        audio.play();
        audio.volume = 0.35;
    })
}

// switch button position
function switchButton() {
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button position
function moveButton() {
    var audio = new Audio('sound/Swish1.mp3');
    audio.play();
    var x = Math.random() * ($(window).width() - $('#no').width()) * 0.9;
    var y = Math.random() * ($(window).height() - $('#no').height()) * 0.9;
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}

init()

var n = 0;
$('#no').mousemove(function() {
    if (Math.random() < 0.5 || n == 1)
        moveButton();
    else
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width >= 900)
        moveButton();
})

// show popup
$('#yes').click(function() {
    Swal.fire({
        title: "Jangan kasih tau siapa-siapa ok?",
        showCancelButton: true,
        allowEscapeKey: true,
        allowOutsideClick: true,
        background: '#fff url("img/iput-bg.jpg")',
        confirmButtonText: 'Boleh',
        cancelButtonText: 'Gamau',
        customClass: {
            actions: 'my-actions',
            confirmButton: 'order-1',
            cancelButton: 'order-2'
        },
    }).then((result) => {
        console.log(result)
        if (result.isConfirmed) {
            window.location.href = 'major.html'
        }
    })
})
