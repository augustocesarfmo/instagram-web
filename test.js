console.log("funcionou");

// Cria um novo elemento <p>
const novoParagrafo = document.createElement("p");

// Adiciona algum texto ao parágrafo
novoParagrafo.textContent = "Este é um parágrafo criado com JavaScript.";

// Opcional: Adiciona uma classe ao parágrafo
novoParagrafo.className = "meu-paragrafo";

// Adiciona o parágrafo ao corpo do documento
document.body.appendChild(novoParagrafo);

document.getElementById("demo").innerHTML = "Hello World!";
