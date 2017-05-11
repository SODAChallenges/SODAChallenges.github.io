$(document).ready(function () {

    var md = new MobileDetect(window.navigator.userAgent);

    var isMobile = false;
    if (md.userAgent() != null && md.tablet() == null)
        isMobile = true;

    if (document.body.clientWidth < 768)
        isMobile = true;

    var img = '<img src="/static/img/qr.jpg" class="img-responsive">'

    $('#qr-code-top').tooltip({
        title: img,
        html: true
    });
    $('#qr-code-bottom').tooltip({
        title: img,
        html: true
    });

    $('#qr-code-top').show();
    $('#qr-code-bottom').hide();

    var navpos = $('.navbar').offset();
    var qrcontainer = $('#fixed-qrcode-wrapper').offset();
    var about1pos = $('#about-1').offset();
    var about2pos = $('#about-2').offset();
    var about3pos = $('#about-3').offset();
    var about4pos = $('#about-4').offset();

    var scrollTop = $(window).scrollTop();
    var scrollBottom = scrollTop + $(window).height();

    if (!isMobile && about1pos) {

        // alert("not mobile");

        if (scrollBottom > about1pos.top && scrollTop < about2pos.top) {
            var h = about2pos.top - about1pos.top;
            var d = scrollBottom - about1pos.top;
            var t = 10 * d / h + 10;
            $('#bottle').css({
                'top': t * 0.5 + 40 + '%'
            });
            $('#bottle-cap').css({
                'top': 45 - t + '%'
            });
        }

        if (scrollBottom > about2pos.top && scrollTop < about3pos.top) {
            var h = about3pos.top - about2pos.top;
            var d = scrollBottom - about2pos.top;
            var t = 90 - 25 * d / h;
            $('#thermo').css({
                'top': t + '%'
            });
            $('#thermo-in').css({
                'bottom': t + '%'
            });
        }

        if (scrollBottom > about3pos.top && scrollTop < about4pos.top) {
            var h = about4pos.top - about3pos.top;
            var d = scrollBottom - about3pos.top;
            var t = -10000 + 4000 * d / h;
            if (t > 100) {
                t = 100;
            }
            $('#about-3').css({
                'background-position': '100% ' + t + '%'
            });
        }

        $('.timeline').removeClass('.mobile');

        $('.video').append('\
            <embed src="https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=b0385s9xqib&auto=0" \
             allowFullScreen="true" quality="high" width="480" height="320" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash">\
            </embed>\
		');
    }

    if (isMobile) {

        // alert("mobile");

        $('.navbar').css('display', 'none');

        $('.featurette').css('height', '540px');

        $('.featurette .col-xs-6').removeClass('col-xs-6');

        $('.timeline').addClass('mobile');

        $('#bottle').css({
            'top': '70%',
            'left': '20%',
            'width': '48%'
        });
        $('#bottle-cap').css({
            'top': '60%',
            'left': '50%',
            'width': '40%'
        });
        $('#thermo-img').css({
            'padding': '0 50px'
        });
        $('#thermo-in').css({
            'display': 'none'
        });
        $('#about-3').css({
            'background-size': '90%',
            'background-position': 'bottom'
        });
        $('#youku').width('100%');
        $('#youku').height('100%');

        $('.timeline-inverted').each(function () {
            $(this).removeClass('timeline-inverted');
        });
        $('.timeline-panel.right').each(function () {
            $(this).removeClass('right');
            $(this).addClass('left');
        });
        $('.timeline-badge').css({
            'left': '90%'
        })
        $('.timeline-panel').css({
            'width': '80%'
        });
        $('.mobile-no').css('display', 'none');
        $('#rules button').css({
            'height': '120px'
        });
        $('.rule-content .col-xs-6').css({
            'width': '100%'
        });
        $('.rule-content img').css({
            'display': 'none'
        });
        $('.qr-container').hide();

        $('#partners .mobile-row').each(function () {
            $(this).addClass('row');
        })
        $('#partners .row.left').each(function () {
            $(this).addClass('col-xs-5');
            $(this).removeClass('row');
            $(this).removeClass('col-xs-12');
        });
        $('#partners .row.right').each(function () {
            $(this).addClass('col-xs-5');
            $(this).addClass('col-xs-offset-1');
            $(this).removeClass('row');
            $(this).removeClass('col-xs-12');
        });
    }

    $(window).bind('scroll', function () {
        if (navpos) {
            if ($(window).scrollTop() > navpos.top) {
                $('.navbar').addClass('navbar-fixed-top');
                var diff = 102;
                $('.header-image').css('margin-top', diff);
                $('#qr-code-top').hide();
                $('#qr-code-bottom').show();
            }
            else {
                $('.header-image').css('margin-top', 0);
                $('.navbar').removeClass('navbar-fixed-top');
                $('#qr-code-top').show();
                $('#qr-code-bottom').hide();
            }
        }


        if (!isMobile && qrcontainer) {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > qrcontainer.top) {
                $('#fixed-qrcode-wrapper').css('position', 'fixed').css('top', '10px');
            } else {
                $('#fixed-qrcode-wrapper').css('position', 'absolute').css('top', '');
            }
        }


        if (!isMobile && about1pos) {

            var scrollTop = $(window).scrollTop();
            var scrollBottom = scrollTop + $(window).height();
            if (scrollBottom > about1pos.top && scrollTop < about2pos.top) {
                var h = about2pos.top - about1pos.top;
                var d = scrollBottom - about1pos.top;
                var t = 10 * d / h + 10;
                $('#bottle').css({
                    'top': t * 0.5 + 40 + '%'
                });
                $('#bottle-cap').css({
                    'top': 45 - t * 1.1 + '%'
                });
            }

            if (scrollBottom > about2pos.top && scrollTop < about3pos.top) {
                var h = about3pos.top - about2pos.top;
                var d = scrollBottom - about2pos.top;
                var t = 90 - 25 * d / h;
                $('#thermo').css({
                    'top': t + '%'
                });
                $('#thermo-in').css({
                    'bottom': t + '%'
                });
            }

            if (scrollBottom > about3pos.top && scrollTop < about4pos.top) {
                var h = about4pos.top - about3pos.top;
                var d = scrollBottom - about3pos.top;
                var t = 750 - 250 * d / h;
                if (t < 100) {
                    t = 100;
                }
                $('#about-3').css({
                    'background-position': '100% ' + t + '%'
                });
            }
        }
    });

    $('#table-extra').hide();

    showInfo1();

    $('#rules .arrow-up').hide();
    $('.rule-content').hide();
    $('#r-a-1').show();
    $('#r-c-1').show();
    $('#rules button:first').css('background-color', '#000');

    $("#rules button").click(function () {
        $(this).css('background-color', '#000');
    });
});

function ruleClear() {
    $('#rules .arrow-up').hide();
    $('#rules button').css('background-color', '#3cc6f2');
    $('.rule-content').hide();
}

function showRule1() {
    ruleClear();
    $('#r-a-1').show();
    $('#r-c-1').show();
}

function showRule2() {
    ruleClear();
    $('#r-a-2').show();
    $('#r-c-2').show();
}

function showRule3() {
    ruleClear();
    $('#r-a-3').show();
    $('#r-c-3').show();
}

function showRule4() {
    ruleClear();
    $('#r-a-4').show();
    $('#r-c-4').show();
}

function showRule5() {
    ruleClear();
    $('#r-a-5').show();
    $('#r-c-5').show();
}

function showRule6() {
    ruleClear();
    $('#r-a-6').show();
    $('#r-c-6').show();
}

function showRule7() {
    ruleClear();
    $('#r-a-7').show();
    $('#r-c-7').show();
}

function infoClear() {
    $('#information-circle .arrow-down').css('visibility', 'hidden');
    $('#information-circle .arrow-up').css('visibility', 'hidden');
    $('#information .info-content').hide();
    $('#information-circle .circle').css({
        'color': '#000',
        'background-color': '#fff'
    })
}

function showInfo1() {
    infoClear();
    $('#i-a-1').css('visibility', '');
    $('#i-c-1').show();
    $('#i-1').css({
        'color': '#fff',
        'background-color': '#3cc6f2'
    });
}
function showInfo2() {
    infoClear();
    $('#i-a-2').css('visibility', '');
    $('#i-c-2').show();
    $('#i-2').css({
        'color': '#fff',
        'background-color': '#3cc6f2'
    });
}
function showInfo3() {
    infoClear();
    $('#i-a-3').css('visibility', '');
    $('#i-c-3').show();
    $('#i-3').css({
        'color': '#fff',
        'background-color': '#3cc6f2'
    });
}
function showInfo4() {
    infoClear();
    $('#i-a-4').css('visibility', '');
    $('#i-c-4').show();
    $('#i-4').css({
        'color': '#fff',
        'background-color': '#3cc6f2'
    });
}
function showInfo5() {
    infoClear();
    $('#i-a-5').css('visibility', '');
    $('#i-c-5').show();
    $('#i-5').css({
        'color': '#fff',
        'background-color': '#3cc6f2'
    });
}
function showInfo6() {
    infoClear();
    $('#i-a-6').css('visibility', '');
    $('#i-c-6').show();
    $('#i-6').css({
        'color': '#fff',
        'background-color': '#3cc6f2'
    });
}
function showInfo7() {
    infoClear();
    $('#i-a-7').css('visibility', '');
    $('#i-c-7').show();
    $('#i-7').css({
        'color': '#fff',
        'background-color': '#3cc6f2'
    });
}
function showInfo8() {
    infoClear();
    $('#i-a-8').css('visibility', '');
    $('#i-c-8').show();
    $('#i-8').css({
        'color': '#fff',
        'background-color': '#3cc6f2'
    });
}
function showInfo9() {
    infoClear();
    $('#i-a-9').css('visibility', '');
    $('#i-c-9').show();
    $('#i-9').css({
        'color': '#fff',
        'background-color': '#3cc6f2'
    });
}
function showInfo10() {
    infoClear();
    $('#i-a-10').css('visibility', '');
    $('#i-c-10').show();
    $('#i-10').css({
        'color': '#fff',
        'background-color': '#3cc6f2'
    });
}

function showTable() {
    $('#table-extra').show();
    $('#table-btn').hide();
}

function showImage(imgSrc, desc) {
    $('#media-modal .modal-body').html('<img src="' + imgSrc + '" class="img-responsive"/>');
    $('#media-modal .modal-footer').html('<p>' + desc + '</p>');
    $('#media-modal').modal('show');
}


function showVideo(videoSrc, desc) {
    var w = 898;
    var h = 502;
    if ($(window).width()<=768){
        w = 598;
        var dw = $(window).width()-20;
        var dh = dw/w * h;
        w = dw;
        h = dh; 
    }else if ($(window).width()<=992){
        w = 598;
    }
    $('#media-modal .modal-body').html('<iframe frameborder="0" width="'+w+'" height="'+h+'" src="' + videoSrc + '" allowfullscreen></iframe>');
    $('#media-modal .modal-footer').html('<p>' + desc + '</p>');
    $('#media-modal').modal('show');
    $('#media-modal').one('hidden.bs.modal', function (e) {
        $('#media-modal .modal-body').html('');
    })
}

function showMoreProject() {
    $('#hide-more-project').show();
    $('#show-more-project').hide();
    $('.more-project').show();
}

function hideMoreProject() {
    $('#hide-more-project').hide();
    $('#show-more-project').show();
    $('.more-project').hide();
     $(window).scrollTo($('#show-more-project').offset().top-500, 500);
}

function showMoreNews() {
    $('#hide-more-news').show();
    $('.more-news').show();
    $('#show-more-news').hide();
}

function hideMoreNews() {
    $('#hide-more-news').hide();
    $('.more-news').hide();
    $('#show-more-news').show();
    $(window).scrollTo($('#show-more-news').offset().top-500, 500);
}

function showSponsorModal() {
    $('#sponsor-modal').modal('show');
}

function submitForm() {
    var data = {
        contact: $('#contact').val(),
        phone: $('#phone').val(),
        email: $('#email').val(),
        position: $('#position').val(),
        demand: $('#demand').val(),
        brif: $('#brif').val(),
    }

    if (data.contact && data.phone && data.email && data.position && data.demand && data.brif) {
        $.ajax({
            url: '/api/sponsor',
            type: 'post',
            data: data,
            dataType: 'json',
            success: function (response) {
                if (response.errcode === 0) {
                    //success
                    $('#sponsor-modal').modal('hide');
                    $('#sponsor-success-modal').modal('show');
                } else {
                    var flag = false;
                    for (key in response.msg) {
                        if (response.msg[key] && response.msg[key].length > 0) {
                            if ($('#' + key).length > 0) {
                                flag = true;
                                $('#' + key).parents('.form-group').removeClass('has-success').addClass('has-error').find('.with-errors').text(response.msg[key][0]);
                            }
                        }
                    }
                    if (!flag) {
                        alert('网络错误，稍后再试')
                    }
                }
            }
        })
    }
}