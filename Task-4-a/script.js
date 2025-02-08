document.querySelectorAll('.navbar a').forEach(anchor =>{
    anchor.addEventListener('click', function(e)
    {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});


document.querySelector('.contact-container a').addEventListener('click', function(e)
{
    e.preventDefault();
    const emailInput = document.querySelector('.contact-input input');
    const email = emailInput.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!emailPattern.test(email))
    {
        alert("Please enter a valid email address.");
    }
    else
    {
        alert("Email submitted successfully!");
    }
});


document.querySelectorAll("#about-images img").forEach(img => {
    img.addEventListener("mouseover", () => img.style.transform = "scale(1.2)");
    img.addEventListener("mouseout", () => img.style.transform = "scale(1)");
});


document.querySelectorAll('.card').forEach(card => {
    card.addEventListener("mouseover", () => card.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.46)");
    card.addEventListener("mouseout", () => card.style.boxShadow = "none");
});