$(document).ready(function() {
    $('.login_nav_wrapper li.login_text .dropdown').click(function() {
        $(this).toggleClass('show');
    });

    $('.calender-trigger').click(function() {
        $('.calender-box').toggleClass('is-active');
    })

    $('.search-traveler').click(function() {
        $('.pax-drop').toggleClass('is-active');
    });

});

// reset_success is only true when the reset form is

function showHideForm(prm1, prm2, e) {

    document.getElementById(prm1).style.display = 'block';
    document.getElementById(prm2).style.display = 'none';
    return false;
}