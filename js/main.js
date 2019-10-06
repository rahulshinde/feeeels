document.addEventListener("DOMContentLoaded", function(){
  var random_num = Math.floor(Math.random() * Math.floor(4));

  document.body.classList.add('order_' + random_num);

  var expandable = document.body.querySelectorAll('.expand');
  [].forEach.call(expandable, function(expand){
    expand.addEventListener('click', toggleOpenSection);
  });
});

function jumpToLink(){
  scrollTo(document.querySelector('main'));
}

function backToMenu(){
  scrollTo(document.querySelector('nav'));
}

function toggleOpenSection(e){
  var contents = document.body.querySelectorAll('.content');

  [].forEach.call(contents, function(content) {
    content.classList.remove('expanded');
  });

  var expanding = e.target.closest('.content')

  expanding.classList.add('expanded');

  scrollTo(expanding)
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



