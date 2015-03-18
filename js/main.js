
var $navBtn = $('.nav-btn');
var $navagationDropdown = $('.navagation-dropdown');

$navBtn.on('click', function () {
    $navagationDropdown.toggleClass('js-nav-open');
});
    