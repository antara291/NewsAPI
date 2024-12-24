

console.log(8);



// Select the form and input elements
const subjectInput = document.getElementById('subject');
const startDateInput = document.getElementById('startDate');
const endDateInput = document.getElementById('endDate');
const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('results');



// Add event listener to the button
searchButton.addEventListener('click', () => {

    const subject = subjectInput.value;
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;

    // Validate inputs
    if (!subject || !startDate || !endDate) {
        resultsDiv.innerHTML = '<p style="color: red;">Please fill in all fields.</p>';
        return;
    }

    

    // construct api url

    const apiKey = '9763c2cae5394f2e8f880f45bf668f07';
    const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(subject)}&from=${startDate}&to=${endDate}&sortBy=publishedAt&apiKey=${apiKey}`;

    console.log(6);

    //Make GET request

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            console.error(`HTTP Error: ${response.status}`);
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Articles:', data.articles);
        resultsDiv.innerHTML = data.articles.length > 0 
            ? data.articles.map(article => `<p>${article.title}</p>`).join('') 
            : '<p>No articles found.</p>';
    })
    .catch(error => {
        console.error('Error fetching data:', error.message);
        resultsDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    });


    console.log('API URL:', apiUrl);
    
    
});


console.log(subjectInput.value);
console.log(startDateInput.value);
console.log(endDateInput.value);


