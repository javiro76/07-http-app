

/**
 * @returns {Object} quote information 
 */


const fetchQuote = async () => { 
        
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();
    
    console.log(data[0]);
    return data[0];
};





/**
 * 
 * @param {HTMLDivElement} element 
 */

export const BreakingbadApp = async ( element ) => { 
   document.querySelector("#app-tittle").innerHTML = `Breakingbad App`;
   element.innerHTML = `Loading...`;
   //await fetchQuote();
   
   const qouteLabel = document.createElement('blcokquote');
   const authoLabel = document.createElement('h3');
   const nextQuoteButton = document.createElement('button');
   nextQuoteButton.innerText = 'Next Quote';
   
   const renderQuote = ( data ) => {
       qouteLabel.innerHTML = data.quote;
       authoLabel.innerHTML = data.author;
       element.replaceChildren(qouteLabel, authoLabel, nextQuoteButton);
    };
    
    nextQuoteButton.addEventListener('click', async() => {   
        
        
        element.innerHTML = `Loading...`;
        const quote = await fetchQuote();
        renderQuote(quote);
        
    });
    
    
    fetchQuote()
        .then( renderQuote );
   
}


