console.log(5)


const subjectInput = document.getElementById('subject');
const startDateInput = document.getElementById('startDate');
const endDateInput = document.getElementById('endDate');
const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('results');

console.log(subjectInput);


searchButton.addEventListener('click', () =>{

const subject = subjectInput.value;
const startDate = startDateInput.value;
const endDate = endDateInput.value;


console.log(subject)


const apiKey = '9763c2cae5394f2e8f880f45bf668f07';
const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(subject)}&from=${startDate}&to=${endDate}&sortBy=publishedAt&apiKey=${apiKey}`;

console.log(apiUrl);

const req = new Request(apiUrl);


fetchData();

async function fetchData(){

    try{

        const response = await fetch("req");

        if(!response.ok){
            throw new Error("could not fetch resource");
        
        }

        const data = await response.json();
        console.log(data);

    }
    catch(error){
        console.error(error);
    }
        
    }


});