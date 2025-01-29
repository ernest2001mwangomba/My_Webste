// Array of biblical motivational quotes
const quotes = [
    "I can do all things through Christ who strengthens me. - Philippians 4:13",
    "The Lord is my shepherd; I shall not want. - Psalm 23:1",
    "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope. - Jeremiah 29:11",
    "The joy of the Lord is your strength. - Nehemiah 8:10",
    "With God all things are possible. - Matthew 19:26",
    "For we walk by faith, not by sight. - 2 Corinthians 5:7",
    "Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; He will never leave you nor forsake you. - Deuteronomy 31:6",
    "Cast all your anxiety on Him because He cares for you. - 1 Peter 5:7",
    "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. - Galatians 5:22-23",
    "The Lord will fight for you; you need only to be still. - Exodus 14:14",
    "Commit to the Lord whatever you do, and He will establish your plans. - Proverbs 16:3",
    "And we know that in all things God works for the good of those who love Him, who have been called according to His purpose. - Romans 8:28",
    "The Lord is close to the brokenhearted and saves those who are crushed in spirit. - Psalm 34:18",
    "For God gave us a spirit not of fear but of power and love and self-control. - 2 Timothy 1:7",
    "Do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand. - Isaiah 41:10",
    "You are the light of the world. A town built on a hill cannot be hidden. - Matthew 5:14",
    "Be still, and know that I am God. - Psalm 46:10",
    "Therefore encourage one another and build each other up. - 1 Thessalonians 5:11",
    "Trust in the Lord with all your heart and lean not on your own understanding. - Proverbs 3:5",
    "For where your treasure is, there your heart will be also. - Matthew 6:21",
    "Take delight in the Lord, and He will give you the desires of your heart. - Psalm 37:4",
    "You will keep in perfect peace those whose minds are steadfast, because they trust in you. - Isaiah 26:3",
    "The Lord is my light and my salvation—whom shall I fear? - Psalm 27:1",
    "What is impossible with man is possible with God. - Luke 18:27",
    "Let all that you do be done in love. - 1 Corinthians 16:14",
    "Blessed is she who has believed that the Lord would fulfill His promises to her! - Luke 1:45",
    "For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life. - John 3:16",
    "Do not be overcome by evil, but overcome evil with good. - Romans 12:21",
    "I have told you these things, so that in me you may have peace. - John 16:33",
    "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus. - Philippians 4:7",
    "The Lord is near to all who call on Him, to all who call on Him in truth. - Psalm 145:18",
    "Blessed are those who hunger and thirst for righteousness, for they will be filled. - Matthew 5:6",
    "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up. - Galatians 6:9",
    "Do not let your hearts be troubled. You believe in God; believe also in me. - John 14:1",
    "For where two or three gather in my name, there am I with them. - Matthew 18:20",
    "If God is for us, who can be against us? - Romans 8:31",
    "Finally, be strong in the Lord and in His mighty power. - Ephesians 6:10",
    "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint. - Isaiah 40:31",
    "In all your ways submit to Him, and He will make your paths straight. - Proverbs 3:6",
    "Blessed are the pure in heart, for they will see God. - Matthew 5:8",
    "Be strong and take heart, all you who hope in the Lord. - Psalm 31:24",
    "Let us run with perseverance the race marked out for us. - Hebrews 12:1",
    "God is our refuge and strength, an ever-present help in trouble. - Psalm 46:1",
    "When I am afraid, I put my trust in you. - Psalm 56:3",
    "For the Lord gives wisdom; from His mouth come knowledge and understanding. - Proverbs 2:6",
    "The righteous are as bold as a lion. - Proverbs 28:1",
    "Those who trust in the Lord are like Mount Zion, which cannot be shaken but endures forever. - Psalm 125:1",
    "He gives strength to the weary and increases the power of the weak. - Isaiah 40:29",
    "The Lord is my strength and my shield; my heart trusts in Him, and He helps me. - Psalm 28:7",
    "You are a chosen people, a royal priesthood, a holy nation, God's special possession. - 1 Peter 2:9"
];

// Variable to track the current quote index
let currentQuoteIndex = 0;

// Function to display a quote
function displayQuote() {
    const quoteElement = document.getElementById("quote-container");
    quoteElement.innerHTML = `<p>${quotes[currentQuoteIndex]}</p>`;
}

// Function to go to the next quote
function nextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length; // Loop back to the start
    displayQuote();
}

// Function to go to the previous quote
function previousQuote() {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length; // Loop back to the end
    displayQuote();
}

// Initial display of the first quote
window.onload = displayQuote;

// Attach next and previous quote buttons (if needed)
document.getElementById("next-btn").addEventListener("click", nextQuote);
document.getElementById("prev-btn").addEventListener("click", previousQuote);

// Handle Sign-Up Form Submission
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get user input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    // Simple validation
    if (name && email) {
        alert(`Thank you for signing up, ${name}!`);
        // Clear form after submission
        document.getElementById("signup-form").reset();
    } else {
        alert("Please fill in both name and email.");
    }
});

// Function to share on WhatsApp
document.getElementById("share-btn").addEventListener("click", () => {
    const favoriteQuote = quotes[currentQuoteIndex] || "Check out these quotes!";
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(favoriteQuote)}`;
    window.open(whatsappURL, "https://web.whatsapp.com/");
});
