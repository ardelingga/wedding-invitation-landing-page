$(document).ready(function () {
    // $('.modal-invitation').modal({backdrop: 'static', keyboard: false});

    $(window).bind("resize", function () {
        // console.log($(this).height())

        // Mobile Iphone 4
        if ($(this).height() <= 533) {
            $('#fh5co-header .display-tc h2').addClass('d-none');
        } else {
            // $('div').removeClass('red').addClass('yellow')
            $('#fh5co-header .display-tc h2').removeClass('d-none');
        }
    }).trigger('resize');
});