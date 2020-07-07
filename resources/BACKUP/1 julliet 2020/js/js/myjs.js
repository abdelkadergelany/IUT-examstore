$('#toggleSidebar').on('click', function () {
   // console.log('Togglesidebar');

$('body').toggleClass('iconic-sidebar');
});

$('#openSidebar').on('click', function (e) {
//console.log('opensidebar');

e.stopPropagation();
$('body').removeClass('open-search');
$('body').addClass('open-sidebar');
$('#sidebarBackdrop').addClass('show');
$('#headerBackdrop').removeClass('show');
});

$('#hideSidebar').on('click', function () {
//console.log('hidesidebar');
$('body').removeClass('open-sidebar');
$('#sidebarBackdrop').removeClass('show');
});
