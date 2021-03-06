const scroller = () => {
  let navbar = document.querySelector('.home_nav');
  // const homepage = document.querySelector('.home-container');
  if (navbar) {
    window.addEventListener('scroll', (event) => {
      const scrollValue = $(window).scrollTop() / (240)
      navbar.style.background = `rgba(97, 71, 255, ${scrollValue})`;
      navbar.style.boxShadow = `0 0 15px rgba(0,0,0,${Math.min(scrollValue / 5, 0.2)})`;
      // console.log(scrollValue);
    });
  }
}

export {scroller}
