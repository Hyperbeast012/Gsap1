var tl= gsap.timeline()
tl.from("#img1,#nav1,#nav2",{
    y:-100,
    duration:1,
    delay:1,
    stagger:1
   
})

tl.from( "#main h1",{
    x:-100,
    opacity:0,
    delay:1,
    duration:2,
    stagger:0.5

})

tl.from(" #left,#right",{
        opacity:0,
        delay:1,
        duration:1
})

tl.from("h5",{
  scale:0,
  opacity:0
})

tl.to("h5",{
    y:40,
    repeat:-1,
    yoyo:true,
    duration:0.5
})