$('#toggleSidebar').on('click', function () {

$('body').toggleClass('iconic-sidebar');
});

$('#openSidebar').on('click', function (e) {

e.stopPropagation();
$('body').removeClass('open-search');
$('body').addClass('open-sidebar');
$('#sidebarBackdrop').addClass('show');
$('#headerBackdrop').removeClass('show');
});

$('#hideSidebar').on('click', function () {
$('body').removeClass('open-sidebar');
$('#sidebarBackdrop').removeClass('show');
});
