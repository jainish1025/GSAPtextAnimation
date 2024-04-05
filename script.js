
function lenis() {
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}
function TextAnim1() {
  const revelanim1 = document.querySelectorAll("#rev1");
  revelanim1.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars' });
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 2,
        markers: false,
      },
      opacity: 0.2,
      stagger: 0.1,
    })
  })
}
function TextAnim2() {
  const revelanim2 = document.querySelectorAll("#rev2");
  revelanim2.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars' });
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 2,
        markers: false,
      },
      scaleY: 0,
      y: -20,
      transformOrigin: 'top',
      opacity: 0,
      stagger: 0.1,
    })
  })
}
function TextAnim3() {
  const revelanim3 = document.querySelectorAll("#rev3");
  revelanim3.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars' });
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 2,
        markers: false,
      },
      scaleX: 0,
      x: -20,
      transformOrigin: 'top',
      opacity: 0,
      stagger: 0.1,
    })
    

  })
}
function TextAnim4() {
  const revelanim4 = document.querySelectorAll("#rev4");
  revelanim4.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars' });
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 2,
        markers: false,
      },
      scale: 0,
      x: 20,
      transformOrigin: 'center',
      opacity: 0,
      stagger: 0.1,
    })
    

  })
}

function wavetextAnim() {
  gsap.to(".svg-container .text__path", {
    attr: { startOffset: "120%" },
    duration: 2.5,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".svg-container",
      // markers: true,
      start: "10% top",
      end: "top -100%",
      scrub: 4,
      pin: true,
    }
  });

}

lenis();
TextAnim1();
TextAnim2();
TextAnim3();
TextAnim4();
wavetextAnim();