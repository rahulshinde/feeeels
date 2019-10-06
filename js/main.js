document.addEventListener("DOMContentLoaded", function(){
  var random_num = Math.floor(Math.random() * Math.floor(4));

  document.body.classList.add('order_' + random_num);

  var expandable = document.body.querySelectorAll('.content');
  [].forEach.call(expandable, function(expand){
    expand.addEventListener('click', function(){
      toggleOpenSection(expand);
    });
  });

  var nav_items = document.body.querySelectorAll('.nav_item');
  [].forEach.call(nav_items, function(nav_item){
    nav_item.addEventListener('click', toggleSectionWithNav);
  });
});

function toggleSectionWithNav(e){
  console.log('hello1');
  var nav_item = e.target.closest('.nav_item');
  var expanding = document.querySelector('#' + nav_item.dataset.target)
  toggleOpenSection(expanding);
}

function toggleOpenSection(expanding){
  console.log(expanding);
  // var expanding = e.target.closest('.content');


  if(expanding.classList.contains("expanded")){
    return;
  }else{
    var contents = document.body.querySelectorAll('.content');

    [].forEach.call(contents, function(content) {
      content.classList.remove('expanded');
    });

    expanding.classList.add('expanded');
    [].forEach.call(document.body.querySelectorAll('.nav_item'), function(content) {
      console.log(content);
      content.classList.remove('current');
    });
    document.querySelector('.nav_item' + expanding.dataset.section).classList.add('current');

    scrollTo(expanding);
  }
}

function scrollTo(target){
  var bounding = target.getBoundingClientRect();
  document.documentElement.scrollTop = document.body.scrollTop = offset(target);
}

function offset(el) {
  var rect = el.getBoundingClientRect(),
  scroll_top = window.pageYOffset || document.documentElement.scrollTop;
  return rect.top + scroll_top;
}

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || 
                              Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}



