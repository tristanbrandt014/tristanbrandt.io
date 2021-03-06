(function() {
  const header = document.querySelector('header');
  const headroom = new Headroom(header, {
    offset: 30,
    tolerance: 5,
    classes: {
      initial: 'animated',
      pinned: 'slideDown',
      unpinned: 'slideUp'
    }
  });
  headroom.init();
  window.headrooomEl = headroom;
})();
