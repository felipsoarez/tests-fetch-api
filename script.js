// fetch("https://ranekapi.origamid.dev/wp-json/api/produto")
//   .then(response => response.json())
//   .then(jsonResponse => {
//     document.querySelector("#app").innerText = jsonResponse[0].nome;
//   });

// const data = {
//   id: Math.random() + "andrerafa",
//   nome: "Andre",
//   email: Math.random() + "andrerafa@origamid.com",
//   senha: "123456",
//   cep: "123456",
//   rua: "Ali Perto",
//   numero: "230",
//   bairro: "Botafogo",
//   cidade: "Rio de Janeiro",
//   estado: "Rio de Janeiro"
// };
// fetch("https://ranekapi.origamid.dev/wp-json/api/usuario", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(data)
// });

const urlll = 'https://api.blockchain.info/stats';


const requisicao = fetch(urlll, {mode: 'cors'})
    .then(Response => {
        return Response.json();
    })
    .then(jsonBody =>{
    const formatado = jsonBody.market_price_usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    document.getElementById("price").innerHTML = [formatado];
        console.log(jsonBody);
        console.log(formatado)
    })

console.log(requisicao);

const requisicaodificuldade = fetch(urlll, {mode: 'cors'})
    .then(Response => {
        return Response.json();
    })
    .then(jsonBody =>{
    const formatado = jsonBody.difficulty.toLocaleString('en-US');
    document.getElementById("difficulty").innerHTML = [formatado];
    const hashrate = jsonBody.hash_rate.toLocaleString('en-US');
    document.getElementById("hashrate").innerHTML = [hashrate];
        console.log(hashrate);
        console.log()
    })
const data = jsonBody.market_price_usd


    var ctx = document.getElementById('myChart').getContext('2d');
    var myLineChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
  });
