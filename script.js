const getDataButton = document.getElementById("getDataButton");
const outputDiv = document.getElementById("output");

getDataButton.addEventListener("click", fetchData);

function fetchData() {
    
    const apiUrl = "https://jsonplaceholder.typicode.com/posts/1"; 
    
    
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            
            outputDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch((error) => {
            console.error("Fetch Error:", error);
        });
}
