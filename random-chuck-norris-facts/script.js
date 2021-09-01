const generateQuote = function() {
   let url;
   let category =  document.getElementById("category").value;

   if(category !== "all") {
     url ="https://api.chucknorris.io/jokes/random?category=" + category;
   } else {
        url ="https://api.chucknorris.io/jokes/random";
   }

    fetch(url)
    .then(function(response) {
        return response.json(); 
    }) // Getting the raw JSON data
    .then(function(data) {
  
        // Storing the quotes internally upon 
        // successful completion of request
        this.data = data; 
  
        // Displaying the quote When the Webpage loads
        console.log(this.data);
        document.getElementById("icon").src = this.data.icon_url;
        document.getElementById("quote").innerHTML = this.data.value;
}).catch();

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}
