import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import emailjs from '@emailjs/browser';

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

document.querySelector('.furm').addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('service_c6izr4v', 'template_btgaagn', e.target, 'H9Pf8EA4rCku6kwMg')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset(); 
    
    document.querySelector('.resp').classList.toggle("non")
    setTimeout(() => {
        document.querySelector('.resp').classList.toggle("non")
    }, 3000);   
})


// const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_c6izr4v', 'template_btgaagn', e.target, 'H9Pf8EA4rCku6kwMg')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });
//     e.target.reset();    
// }

// cont.sendEmail()
