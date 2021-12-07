const tl = gsap.timeline({defaults:{ ease:"power1.out" } });

tl.to('.text1', {y:'0%', duration:1.5, stagger: 0.25});
tl.to('.text2', {y:'0%', duration:2, stagger: 0.25});
tl.to('.text3', {y:'0%', duration:3, stagger: 0.25});
tl.to('.intro', {y:'-100%', duration:2, opacity:0 });
tl.fromTo('.big-text',{opacity: 0}, {opacity:1, duration:2}, "-=1");
tl.fromTo('.scroll',{opacity: 0}, {opacity:1, duration:1});

$(function(){
    $().timeline({
        orientation: 	'vertical',
        issuesSpeed: 	300,
        datesSpeed: 	100,
        arrowKeys: 		'true',
        startAt:		3
    })
});