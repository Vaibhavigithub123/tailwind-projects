import './style.css'

const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });

  
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#container",
        start: "10% 50%",
        end:"50% 50%",
        // markers:true,
        scrub:1,
    }
})
.to("#oneimg", {
    x: -500,
    rotate:-30
},0)
.to("#threeimg", {
    x: 500,
    rotate:30
},0)
.to("#twoimg", {
    x: -500,
    rotate:-30
},0)
.to("#fourimg", {
    x: 500,
    rotate:30
},0)
.to("#innertext", {
    y: -100,
    opacity:1
},0)