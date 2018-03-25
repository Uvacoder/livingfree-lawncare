(() => {

  let docEl = document.documentElement;
  let quoteSection = document.querySelector('#contact');


  // Scroll to Quote Section
  document.getElementById('get-quote').onclick = () => {
    let itemTop = quoteSection.offsetTop;
    scrollTo(docEl, itemTop, 500);
  }


  // Scroll to
  const scrollTo = (element, to, duration) => {
    let start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    let animateScroll = () => {
      currentTime += increment;
      let val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }

  // Ease function
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

})();