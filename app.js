const urlll = 'https://blockchain.info/ticker';


const requisicao = fetch(urlll, {mode: 'cors'})
    .then(Response => {
        return Response.json();
        console.log(requisicao)
    })
    .then(jsonBody =>{
      const formatado = jsonBody.USD.last.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      document.getElementById("price").innerHTML = [formatado];
          console.log(jsonBody);
          console.log(formatado)
        console.log(jsonBody.USD.last);
    })

// Grafico começa aqui seu filho da puta inutel
var ctx = document.getElementById('myChart').getContext('2d');
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});
