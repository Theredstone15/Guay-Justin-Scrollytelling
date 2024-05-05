gsap.registerPlugin(MotionPathPlugin);

/* --------------------------  Page titre  ---------------------------*/
gsap.to(".ligne",{y:"60%", yoyo: true, repeat: -1, ease:"power1.inOut"});

var animmenu = gsap.timeline({repeat: -1});
animmenu.to(".Titre", {x:"1%", ease:"power1.inOut"});
animmenu.to(".Soustitre", {x:"-1%", ease:"power1.inOut"}, "<");
animmenu.to(".Titre", {x:"0%", ease:"power1.inOut"});
animmenu.to(".Soustitre", {x:"0%", ease:"power1.inOut"}, "<");
animmenu.to(".Titre", {x:"-1%", ease:"power1.inOut"});
animmenu.to(".Soustitre", {x:"1%", ease:"power1.inOut"}, "<");
animmenu.to(".Titre", {x:"0%", ease:"power1.inOut"});
animmenu.to(".Soustitre", {x:"0%", ease:"power1.inOut"}, "<");

/* --------------------------  Transition 0 - 1 (complet) ---------------------------*/

gsap.to(".arbrestransi0", {
    x: "300%",
    ease: "none",
    duration: 5,
    scrollTrigger:{
      pin: true,
      scrub: true,
      markers: true,
      start: "top",
      end: "bottom -80%",
      trigger: "#Transition0-1",
    }
  })

/* --------------------------  Chapitre 1  ---------------------------*/

gsap.from("#ArbreBas", {
  y: "100%",
  ease: "power1.out",
  scrollTrigger:{
    pin: true,
    scrub: true,
    markers: true,
    start: "top",
    end: "bottom -50%",
    trigger: "#Chap1",
  }
})

gsap.from("#ArbreHaut", {
  y: "-200%",
  opacity: 0,
  ease: "power1.out",
  scrollTrigger:{
    scrub: true,
    markers: true,
    start: "top",
    end: "bottom -50%",
    trigger: "#Chap1",
  }
})

gsap.from("#Lac", {
  x: "200%",
  ease: "power1.out",
  scrollTrigger:{
    scrub: true,
    markers: true,
    start: "top",
    end: "bottom -50%",
    trigger: "#Chap1",
  }
})

/* --------------------------  Transition 1 - 2  ---------------------------*/

/* --------------------------  Chapitre 2  ---------------------------*/

gsap.to(".OiseauChap2", {
  motionPath: {
    path:".PathOiseau",
    align: ".PathOiseau",
    autoRotate: true,
    start: 0,
    end: 0,
    alignOrigin: [0.5,1],
  },
  scrollTrigger:{
    pin: true,
    scrub: true,
    markers: true,
    start: "top",
    end: "bottom",
    trigger: "#Chap2",
  },
});

/* --------------------------  Transition 2 - 3  ---------------------------*/

/* --------------------------  Chapitre 3  ---------------------------*/

gsap.to(".OiseauChap3",{rotation: 360, repeat: -1, ease: "none"});

/* --------------------------  Transition 3 - 4  ---------------------------*/

gsap.to(".arbrestransi4", {
  x: "300%",
  ease: "none",
  duration: 5,
  scrollTrigger:{
    pin: true,
    scrub: true,
    markers: true,
    start: "top",
    end: "bottom -80%",
    trigger: "#Transition3-4",
  }
})

/* --------------------------  Chapitre 4  ---------------------------*/

/* --------------------------  Transition 4 - 5  ---------------------------*/

/* --------------------------  Chapitre 5  ---------------------------*/

var animAmis = gsap.timeline({
  scrollTrigger:{
    pin: true,
    scrub: true,
    markers: true,
    start: "top",
    end: "bottom -80%",
    trigger: "#Chap5",
  },
});

animAmis.from(".CerfChap5",{x:"-350%", ease: "none"});
animAmis.from(".LapinChap5",{x:"750%", ease: "none"}, "<");
animAmis.to(".CerfChap5",{x:"50%", y:"20%", ease: "power1.out"});
animAmis.to(".LapinChap5",{x:"-50%", y:"20%", ease: "power1.out"}, "<");

/* --------------------------  Transition 5 - 6  ---------------------------*/

/* --------------------------  Chapitre 6 (Complet) ---------------------------*/

var animmarche = gsap.timeline({repeat: -1});
animmarche.to(".CerfChap6", {y:"-5%", ease:"power1.inOut"});
animmarche.to(".LapinChap6", {y:"-5%", ease:"power1.inOut"}, "<");
animmarche.to(".LoupChap6", {y:"0%", ease:"power1.inOut"}, "<");
animmarche.to(".LoupChap6", {y:"-5%", ease:"power1.inOut"});
animmarche.to(".CerfChap6", {y:"0%", ease:"power1.inOut"}, "<");
animmarche.to(".LapinChap6", {y:"0%", ease:"power1.inOut"}, "<");
animmarche.to(".LoupChap6", {y:"0%", ease:"power1.inOut"});

var nuages = gsap.timeline({repeat: -1});
nuages.to(".Nuage1",{x: "-1500%",ease: "none", duration: "6"});
nuages.to(".Nuage2",{x: "-1500%",ease: "none", duration: "6"}, "-=2");
nuages.to(".Nuage4",{x: "-1500%",ease: "none", duration: "8"}, "-=2");
nuages.to(".Nuage3",{x: "-1500%",ease: "none", duration: "6"}, "-=2");
nuages.to(".Nuage5",{x: "-1500%",ease: "none", duration: "8"}, "-=2");

var arbres = gsap.timeline({repeat: -1});
arbres.to(".Arbre1",{x: "-2000%",ease: "none", duration: "5"});
arbres.to(".Arbre2",{x: "-2000%",ease: "none", duration: "5"}, "-=2");
arbres.to(".Arbre3",{x: "-2000%",ease: "none", duration: "5"}, "-=2");
arbres.to(".Arbre4",{x: "-2000%",ease: "none", duration: "5"}, "-=2");
arbres.to(".Arbre5",{x: "-2000%",ease: "none", duration: "5"}, "-=2");