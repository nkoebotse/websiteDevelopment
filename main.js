// Content Variables
const content = {
    headerTitle: "Join our community",
    headerSubtitle: "30-day, hassle-free money back guarantee",
    headerDescription: "Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.",
    priceTitle: "Monthly Subscription",
    priceAmount: "$29",
    pricePeriod: " per month",
    priceSmallText: "Full access for less than $1 a day",
    signUpButtonText: "Sign Up",
    whyUsTitle: "Why Us",
    whyUsDetails: [
        "Tutorials by industry experts",
        "Peer & expert code review",
        "Coding exercises",
        "Access to our GitHub repos",
        "Community forum",
        "Flashcard decks",
        "New videos every week"
    ],
    footerText: "Bootcamp 2024 by <a href='https://www.mlab.co.za' target='_blank'>CodeTribe</a>. Developed by nkoebotse elliot sekgobela<a href='#'>https://github.com/nkoebotse/Portfolio-Website</a>."
};

function populateContent() {
    document.getElementById('header-title').textContent = content.headerTitle;
    document.getElementById('header-subtitle').textContent = content.headerSubtitle;
    document.getElementById('header-description').textContent = content.headerDescription;
    document.getElementById('price-title').textContent = content.priceTitle;
    document.getElementById('price-amount').textContent = content.priceAmount;
    document.getElementById('price-period').textContent = content.pricePeriod;
    document.getElementById('price-small-text').textContent = content.priceSmallText;
    document.getElementById('sign-up-button').textContent = content.signUpButtonText;
    document.getElementById('why-us-title').textContent = content.whyUsTitle;
    document.getElementById('why-us-details').innerHTML = content.whyUsDetails.map(item => `<p>${item}</p>`).join('');
    document.getElementById('footer-text').innerHTML = content.footerText;
}

document.addEventListener('DOMContentLoaded', populateContent);
