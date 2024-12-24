gsap.registerPlugin(ScrollTrigger)


gsap.from("#img",{opacity:0, y:-50, duration:1.5})

var vl = gsap.timeline({
    scrollTrigger:{
        trigger:"#part2",
        start: "top 50%",
        end:"50% 50%",
        // markers:true
    }
})
vl.from("#img1",{opacity:0, y:-50, duration:1.5} )