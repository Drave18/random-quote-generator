const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const button = document.querySelector('.new-quote');

async function getQuote() {
  const url = "/api/quote"; 

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    quote.innerText = `"${data[0].quote}"`;
    author.innerText = `— ${data[0].author || "Unknown"}`;
  } catch (error) {
    quote.innerText = "Could not fetch quote.";
    author.innerText = "";
  }
}

button.addEventListener('click', getQuote);


