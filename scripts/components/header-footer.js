<<<<<<< HEAD
document.getElementById("header").innerHTML = `
<nav class="buttons">
    <a class="desktop" href="/pages/home">Home</a>
    <a class="mobile" href="/pages/home">🏡</a>
    <a class="desktop" href="/pages/about">About us</a>
    <a class="mobile" href="/pages/about">📙</a>
    <a class="desktop" href="/pages/events">Events</a>
    <a class="mobile" href="/pages/events">📅</a>
    <a class="desktop" href="/pages/contact.html">Contact</a>
    <a class="mobile" href="/pages/contact.html">📞</a>
</nav>`

//hay que hacer el footer
//document.getElementById("footer").innerHTML = ``
=======
const labels = `
<nav class="buttons">
    <a id="home" href="../../index.html">Home</a>
    <a id="about" href="/pages/about.html">About us</a>
    <a id="events" href="/pages/events">Events</a>
    <a id="contact" href="/pages/form.html">Contact</a>
</nav>
`

document.getElementById("header").innerHTML =labels
>>>>>>> 8ad84fc29e46335f8e922355da1e96f696205bd0
