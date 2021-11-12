$(document).ready(function() {
    $('.nav_item.has_dropdown').click(function() {
        $(this).toggleClass('show');
    });

    $('.calender-trigger').click(function() {
        $('.calender-box').toggleClass('is-active');
    })

    $('.search-traveler').click(function() {
        $('.pax-drop').toggleClass('is-active');
    });

    $('.flight_detail_btn a').click(function() {
        $('.flight_btn_tabs').toggleClass('show');
    })

});

// reset_success is only true when the reset form is

function showHideForm(prm1, prm2, e) {

    document.getElementById(prm1).style.display = 'block';
    document.getElementById(prm2).style.display = 'none';
    return false;
}

jQuery(function($) {
    $('ul.tabs li a').click(function() {
        var a = $(this);
        var active_tab_class = 'active-tab-menu';
        var the_tab = '.' + a.attr('data-tab');
        $('ul.tabs li a').removeClass(active_tab_class);
        a.addClass(active_tab_class);
        $('.flight_btn_tabs .tab_content').css({
            'display': 'none'
        });
        $(the_tab).show();
        return false;
    });
});