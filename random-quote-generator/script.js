const generateQuote = function() {
    const quotes = [
    {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        author: "Albus Dumbledore"
    },
    {
        quote: "It is impossible to manufacture or imitate love",
        author: "Horace Slughorn"
    },
    {
        quote: "Being different isn't a bad thing. I means that you are brave enough to be yourself.",
        author: "Luna Lovegood"
    },
    {
        quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
        author: "Sirius Black"
    },
    {
        quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
        author: "Arthur Weasley"
    },
    {
        quote: "Every human life is worth the same, and worth saving.",
        author: "Kingsley Shacklebolt"
    },
    {
        quote: "Have a biscuit, Potter.",
        author: "Minerva McGonagall"
    },
    {
        quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        author: "Albus Dumbledore"
    },
    {
        quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
        author: "Dobby"
    }
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}
