$(document).ready(function(){
  'use strict';
  $('.navbar').sticky({
    topSpacing: 0
  });
  $('body').on('click', '.page-scroll a', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 99
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
  $('body').scrollspy({
    target: '.navbar-default',
    offset: 100
  });
  $(window).load(function(){
    $('#subscribeModal').modal('show');
  });
  $('body').on('shown.bs.modal.', function(){
    $('#firstname').focus();
  });
  $('.js-view-more').on('click', function(event){
    var that = $(this);
    event.preventDefault();
    that.hide();
    $('.js-view-more-spinner').show();
    setTimeout(function(){
      $('.gallery__item--hidden').each(function(index, element) {
        $(element)
          .removeClass('gallery__item--hidden')
          .children('.gallery__link')
          .attr('data-lightbox', 'gallery');
      });
      $('.js-view-more-spinner').toggle();
    }, 1000);
  });
  $('#subscribeForm').on('submit', function(event){
    event.preventDefault();
    $(this).hide();
    $('.modal-header-content').hide();
    $('.modal-thank-you').show();
  });
});
