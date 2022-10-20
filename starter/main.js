ScrollReveal({ reset: true, distance: '100px',
duration: '2000', });
ScrollReveal().reveal('.headline, .line', {
    origin: 'left',
    
});


ScrollReveal().reveal('.firstsection-leftdiv p',{
    origin: 'right',
    
    
})
ScrollReveal().reveal('.line', {
   delay: '1000',
   origin: 'bottom'
});
ScrollReveal().reveal('.logotext', { scale: 3, origin: 'top' });
ScrollReveal().reveal('.secondsection-leftdiv', {
    origin: 'right',
    rotate: {
        // x: 180,
        // z: 180,
        y: 180,
    }
});
ScrollReveal().reveal('.secondsection-rightdiv', {
    origin: 'left',
    rotate: {
        // x: 180,
        // z: 180,
        y: 180,
    }
});