gsap.registerPlugin(MotionPathPlugin, TextPlugin, DrawSVGPlugin, MorphSVGPlugin);
gsap.set("#ligne1-1",{drawSVG:"0% 100%"});
gsap.set("#ligne2-1",{drawSVG:"0% 100%"});
gsap.set("#ligne3-1",{drawSVG:"0% 100%"});
gsap.set("#ligne1-2",{drawSVG:"0% 100%"});
gsap.set("#ligne2-2",{drawSVG:"0% 100%"});
gsap.set("#ligne3-2",{drawSVG:"0% 100%"});

/* --------------------------  Page titre (Complet) ---------------------------*/
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
    scrollTrigger:{
      pin: true,
      scrub: true,
      start: "top",
      end: "bottom -80%",
      trigger: "#Transition0-1",
    }
  })

/* --------------------------  Chapitre 1 (Complet) ---------------------------*/

gsap.from("#ArbreBas", {
  y: "100%",
  ease: "power1.out",
  scrollTrigger:{
    pin: true,
    scrub: true,
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
    start: "top",
    end: "bottom -50%",
    trigger: "#Chap1",
  }
})

/* --------------------------  Transition 1 - 2 (Complet) ---------------------------*/

gsap.from("#ligne1-1", {
  drawSVG: "0% 0%",
  scrollTrigger:{
    pin: true,
    scrub: true,
    start: "top",
    end: "bottom",
    trigger: "#Transition1-2",
  }
})

gsap.from("#ligne2-1", {
  drawSVG: "0% 0%",
  scrollTrigger:{
    scrub: true,
    start: "top",
    end: "bottom",
    trigger: "#Transition1-2",
  }
})

gsap.from("#ligne3-1", {
  drawSVG: "0% 0%",
  scrollTrigger:{
    scrub: true,
    start: "top",
    end: "bottom",
    trigger: "#Transition1-2",
  }
})

/* --------------------------  Chapitre 2 (Complet) ---------------------------*/

gsap.to(".OiseauChap2", {
  motionPath: {
    path:".PathOiseau",
    align: ".PathOiseau",
    autoRotate: true,
    start: 1,
    end: 0,
    alignOrigin: [0,0],
  },
  scrollTrigger:{
    pin: true,
    scrub: true,
    start: "top",
    end: "bottom",
    trigger: "#Chap2",
  },
});

/* --------------------------  Transition 2 - 3 (Complet) ---------------------------*/

gsap.to("#Nuagemorph1", {
  morphSVG: "#Oiseaumorph1",
  scrollTrigger:{
    pin: true,
    scrub: true,
    start: "top",
    end: "bottom",
    trigger: "#Transition2-3",
  },
});

/* --------------------------  Chapitre 3 (Complet) ---------------------------*/
let chap3 = document.querySelector(".Chap3");
let hauteurChap3 = chap3.scrollHeight;

gsap.to("#Nuage",{
  y:hauteurChap3 * -0.3 * -1,
  ease: "none",
  scrollTrigger:{
    scrub: true,
    start: "top",
    end: "bottom",
    trigger:"#Chap3",
  }});

  gsap.to("#Arbrebas",{
    y:hauteurChap3 * -0.4 * -1,
    ease: "none",
    scrollTrigger:{
      scrub: true,
      start: "top",
      end: "bottom",
      trigger:"#Chap3",
    }});

    gsap.to(".OiseauChap3",{
      y:hauteurChap3 * -0.9 * -1,
      ease: "none",
      scrollTrigger:{
        scrub: true,
        start: "top",
        end: "bottom",
        trigger:"#Chap3",
      }});

gsap.to(".OiseauChap3",{rotation: 360, repeat: -1, ease: "none"});

/* --------------------------  Transition 3 - 4 (Complet) ---------------------------*/

gsap.to(".arbrestransi3", {
  x: "300%",
  ease: "none",
  duration: 5,
  scrollTrigger:{
    pin: true,
    scrub: true,
    start: "top",
    end: "bottom -80%",
    trigger: "#Transition3-4",
  }
})

/* --------------------------  Chapitre 4 (Complet) ---------------------------*/

gsap.to("#texteanime", {
  text: "Monsieur le loup m'a apercu",
  ease: "none",
  scrollTrigger:{
    pin: true,
    scrub: true,
    start: "top",
    end: "bottom -80%",
    trigger: "#Chap4",
  }
});

/* --------------------------  Transition 4 - 5 (Complet) ---------------------------*/

gsap.from("#ligne1-2", {
  drawSVG: "0% 0%",
  scrollTrigger:{
    pin: true,
    scrub: true,
    start: "top",
    end: "bottom",
    trigger: "#Transition4-5",
  }
})

gsap.from("#ligne2-2", {
  drawSVG: "0% 0%",
  scrollTrigger:{
    scrub: true,
    start: "top",
    end: "bottom",
    trigger: "#Transition4-5",
  }
})

gsap.from("#ligne3-2", {
  drawSVG: "0% 0%",
  scrollTrigger:{
    scrub: true,
    start: "top",
    end: "bottom",
    trigger: "#Transition4-5",
  }
})

/* --------------------------  Chapitre 5 (Complet) ---------------------------*/

var animAmis = gsap.timeline({
  scrollTrigger:{
    pin: true,
    scrub: true,
    start: "top",
    end: "bottom -80%",
    trigger: "#Chap5",
  },
});

animAmis.from(".CerfChap5",{x:"-350%", ease: "none"});
animAmis.from(".LapinChap5",{x:"750%", ease: "none"}, "<");
animAmis.to(".CerfChap5",{x:"50%", y:"20%", ease: "power1.out"});
animAmis.to(".LapinChap5",{x:"-50%", y:"20%", ease: "power1.out"}, "<");

/* --------------------------  Transition 5 - 6 (Complet) ---------------------------*/

gsap.to("#Nuagemorph2", {
  morphSVG: "#Oiseaumorph2",
  scrollTrigger:{
    pin: true,
    scrub: true,
    start: "top",
    end: "bottom",
    trigger: "#Transition5-6",
  },
});

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