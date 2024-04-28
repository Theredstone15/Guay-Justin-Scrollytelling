gsap.to(".ligne",{y:"60%", yoyo: true, repeat: -1, ease:"power1.inOut"});

var animmenu= gsap.timeline({repeat: -1});
animmenu.to(".Titre", {x:"1%", ease:"power1.inOut"});
animmenu.to(".Soustitre", {x:"-1%", ease:"power1.inOut"}, "<");
animmenu.to(".Titre", {x:"0%", ease:"power1.inOut"});
animmenu.to(".Soustitre", {x:"0%", ease:"power1.inOut"}, "<");
animmenu.to(".Titre", {x:"-1%", ease:"power1.inOut"});
animmenu.to(".Soustitre", {x:"1%", ease:"power1.inOut"}, "<");
animmenu.to(".Titre", {x:"0%", ease:"power1.inOut"});
animmenu.to(".Soustitre", {x:"0%", ease:"power1.inOut"}, "<");