import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ScrollingReveal() {

    gsap.registerPlugin(ScrollTrigger);

    let scrollerNode = document.querySelector('#c-scrolling-reveal');

    /* ScrollingReveal - standard reveal =============================================================================*/
    let items = scrollerNode.querySelectorAll('[data-scroll]');

    // Attach scroller triggers to items and apply settings
    items.forEach((item, index) => {
        let trigger = item;
        let start = 'top 50%';
        let scrub = '2';

        ScrollTrigger.create({
            trigger: trigger,
            start: start,
            scrub: scrub,
            onEnter: () => {
                trigger.classList.add('--is-in-view');
            },
            onEnterBack: () => {
                trigger.classList.add('--is-in-view');
            },
            onLeave: () => {
                trigger.classList.remove('--is-in-view');
            },
            onLeaveBack: () => {
                trigger.classList.remove('--is-in-view');
            },
        });
    });
}

export { ScrollingReveal as ScrollingReveal };
