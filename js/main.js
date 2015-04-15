var $navBtn = $('.nav-btn');
var $navagationDropdown = $('.navagation-dropdown');

$navBtn.on('click', function () {
    $navagationDropdown.toggleClass('js-nav-open');
});

var $tabs = $('.tabs');
var $panels = $('.panel');

$tabs.on('click', 'a', function (e) {
  e.preventDefault();
  var id = $(this).attr('href');

  $panels.filter(':not([hidden])').attr('hidden', true);
  $(id).removeAttr('hidden');

  $tabs.find('.js-current').removeClass('js-current');
  $(this).addClass('js-current');
    
});

var $thumbs =$('.thumbnails');
var $lbImg = $('.lightbox-img');
var $lb = $ ('.lightbox');
var $btnClose = $('.btn-close');

$thumbs.on('click', 'a', function (e) {
    e.preventDefault();
var big = $(this).attr('href');
  $lbImg.attr('src', big);
  $lb.attr('data-state','visible');
});

$btnClose.on('click', function () {
    $lb.attr('data-state','hidden');
});


var $navList = $('.nav-list');
var $footer = $('.footer');
var $tabs = $('.tabs');

$navList. localScroll();
$footer. localScroll();
$tabs. localScroll();

var $dogSection = $('.dog');

$dogSection.waypoint(function () {
    $dogSection.toggleClass('js-active')
}, {offset: '90%' });