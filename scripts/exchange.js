const gooey_exchange = document.querySelector("#exchange .exchange-text")
const appID = "2bbdbb9c486343bba522a4e508822c73"
const date = Date.now()
let rate, 
rate_tenth, 
rate_php;

async function getExchange() {
  let response = await fetch("https://openexchangerates.org/api/latest.json?app_id=" + appID + "&symbols=PHP,USD");
  let data = await response.json()
  rate = (1 / data.rates.PHP).toFixed(3);
  rate_php = (data.rates.PHP).toFixed(2);
  rate_tenth = (data.rates.PHP % 1).toFixed(1);
  console.log("1 US Dollar equals " + data.rates.PHP + " Philippine Peso " + rate + " " + rate_tenth)
  gooey_exchange.innerHTML = rate_php;
  return data;
}

// SET FOR INSTALL (SET TO RATE TO CHECK EXCHANGE) // 30 MINUTES
async function update() {
  const t1 = new Date();
  await getExchange();
  setTimeout(update, 1800000);
}

update();
