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

/* --------------------------  Chapitre 1  ---------------------------*/

/* --------------------------  Chapitre 2  ---------------------------*/

var animvole = gsap.timeline({repeat: -1});
animvole.to(".OiseauChap2", {x:"-900%", y:"90%", ease: "power1.inOut", duration: "2"});
animvole.to(".OiseauChap2", {x:"-400%", y:"-60%", ease: "power1.inOut", duration: "2"});
animvole.to(".OiseauChap2", {x:"300%", y:"150%", ease: "power1.inOut", duration: "2"});
animvole.to(".OiseauChap2", {x:"-1000%", y:"300%", ease: "power1.inOut", duration: "2"});
animvole.to(".OiseauChap2", {x:"-500%", y:"-300%", ease: "power1.inOut", duration: "2"});
animvole.to(".OiseauChap2", {x:"0%", y:"0%", ease: "power1.inOut", duration: "2"});

/* --------------------------  Chapitre 3  ---------------------------*/

gsap.to(".OiseauChap3",{rotation: 360, repeat: -1, ease: "none"});

/* --------------------------  Chapitre 4  ---------------------------*/

/* --------------------------  Chapitre 5  ---------------------------*/

/* --------------------------  Chapitre 6  ---------------------------*/

var animmarche = gsap.timeline({repeat: -1});
animmarche.to(".CerfChap6", {y:"-5%", ease:"power1.inOut"});
animmarche.to(".LapinChap6", {y:"-5%", ease:"power1.inOut"}, "<");
animmarche.to(".LoupChap6", {y:"0%", ease:"power1.inOut"}, "<");
animmarche.to(".LoupChap6", {y:"-5%", ease:"power1.inOut"});
animmarche.to(".CerfChap6", {y:"0%", ease:"power1.inOut"}, "<");
animmarche.to(".LapinChap6", {y:"0%", ease:"power1.inOut"}, "<");
animmarche.to(".LoupChap6", {y:"0%", ease:"power1.inOut"});

var nuages = gsap.timeline({repeat: -1});
nuages.to(".Nuage1",{x: "-1000%",ease: "none", duration: "6"});
nuages.to(".Nuage2",{x: "-1000%",ease: "none", duration: "6"}, "-=2");
nuages.to(".Nuage4",{x: "-1000%",ease: "none", duration: "8"}, "-=2");
nuages.to(".Nuage3",{x: "-1000%",ease: "none", duration: "6"}, "-=2");
nuages.to(".Nuage5",{x: "-1000%",ease: "none", duration: "8"}, "-=2");

var arbres = gsap.timeline({repeat: -1});
arbres.to(".Arbre1",{x: "-2000%",ease: "none", duration: "5"});
arbres.to(".Arbre2",{x: "-2000%",ease: "none", duration: "5"}, "-=2");
arbres.to(".Arbre3",{x: "-2000%",ease: "none", duration: "5"}, "-=2");
arbres.to(".Arbre4",{x: "-2000%",ease: "none", duration: "5"}, "-=2");
arbres.to(".Arbre5",{x: "-2000%",ease: "none", duration: "5"}, "-=2");
