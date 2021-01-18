let card = document.getElementById("ham");
let tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
let toggle = false;

tl.to(".ham", {
    background: "f1a393",
    borderRadius: "40% 0 0 40%",
});
tl.to(
    "nav",
    {
        clipPath: "ellipse(100% 100% at 50% 50%)",
    },
    "-=.5"
);
tl.to(
    "nav a",
    {
        opacity: 1,
        transform: "translateX(0)",
        stagger: 0.2,
    },
    "-=.2"
);
tl.pause();

card.addEventListener("click", () => {
    toggle = !toggle;
    if (toggle ? tl.play() : tl.reverse());
});