const stylesheet = document.getElementById('stylesheet');
const deviceType = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (deviceType) {
  stylesheet.setAttribute('href', 'mobile.css');
} else {
  stylesheet.setAttribute('href', 'desktop.css');
  //mouse code
  document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY });


  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1 });

});
}