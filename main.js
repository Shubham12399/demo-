let tl = gsap.timeline();
tl.from(".logo , .buttons , ul li",{
    y:-100,
    duration:1,
    opacity:0,
    delay:0,
    stagger:0.2
})
// gsap.from("ul li",{
//     y:-100,
//     duration:1,
//     stagger:.1,
//     opacity:0
// })

tl.from("#main-heading h1",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:.3
});
tl.from(".hero-section>img" , {
    scale:0,
    duration:1,
    opacity:0,
    stagger:0.3
})
tl.from("#scroll-dwn" , {
   scale:0,
    opacity:0
})
tl.to("#scroll-dwn" , {
    y:20,
    repeat:-1,
    yoyo:true
})
// tl.from("#second-img" , {
//     scale:0,
//     duration:1,
//     opacity:0,
// })
// tl.from("#third-img" , {
//     scale:0,
//     duration:1,
//     opacity:0,
// })
// tl.from("#fourth-img" , {
//     scale:0,
//     duration:1,
//     opacity:0,
// })



