const card = document.getElementById("bio")
const headshot = document.getElementById("headshot")
const info = document.querySelectorAll(".seq")

const tl = gsap.timeline({ defaults: { ease: "power2.inOut", duration: 1.5 } })

tl.from(headshot, { xPercent: "-20", opacity: 0 })
    .from(card, { opacity: 0, duration: .5 }, "-=1")
    .from(card, { xPercent: "-10", backdropFilter: "blur(0px)" })
    .from(info, { yPercent: "30", opacity: 0, stagger: .2, duration: .5 }, "-=.5")

