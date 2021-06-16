
const appID = "2bbdbb9c486343bba522a4e508822c73"
const date = Date.now()

async function getExchange() {
  let response = await fetch("https://openexchangerates.org/api/latest.json?app_id=" + appID + "&symbols=PHP,USD");
  let data = await response.json()
  console.log(data)
  console.log("1 US Dollar equals " + data.rates.PHP + " Philippine Peso")
  console.log(date)
  return data;
}

async function update() {
  const t1 = new Date();
  await getExchange();
  setTimeout(update, 50000);
}
update();
