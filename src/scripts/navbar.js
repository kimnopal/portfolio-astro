const navLinks = document.querySelectorAll('#nav-link')
console.log("ok")
console.log(window.location.pathname.includes(navLinks[0].href.split('/')[3]))
navLinks.forEach(link => {
    if (window.location.pathname.includes(link.href.split('/')[3])) {
        // link.classList.add('border-l-2 border-white')
        console.log(link.classList.add("test"))
    }
})