$(document).ready(function(){
  var random_num = Math.floor(Math.random() * Math.floor(4));

  $('body').addClass('order_' + random_num);
  $('.index_link').on('click', jumpToLink);
  $('.menu').on('click', backToMenu);
  
  $('.expand').on('click', toggleOpenSection);


});

function jumpToLink(){
  var scroll_position = $('main').offset().top;
  console.log(scroll_position);
  $(document).scrollTop(scroll_position - 100); 
}

function backToMenu(){
  $(document).scrollTop(0); 
}

function toggleOpenSection(){
  $('.content').removeClass('expanded');
  $(this).parent('.content').addClass('expanded');
}