
var tl = gsap.timeline();

tl.from(".brand",{
    y:-100,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from(".nav-items a",{
    y:-100,
    duration:1.2,
    opacity:0,
    stagger:1   
})
tl.from("#content button",{
    y:20,
    opacity:0,
    duration:1
})
// tl.to(".rotate",{
//     x:1400,
//     repeat:-1,
//     yoyo:true,
//     duration:2,
//     rotate:360
// })