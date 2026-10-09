
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const produto = produtos.find(produto => produto.id === id);

console.log(produto);

    if (produto) {
      document.getElementById("titulo").textContent = produto.titulo;
      document.getElementById("descricao").textContent = produto.descricao;
      document.getElementById("preco").textContent = produto.preco;
      document.getElementById("especificacoes").textContent = produto.especificacoes
      document.getElementById("imagem").src = produto.imagem;
      document.getElementsByClassName("categoria").textContent = produto.categoria
    } else {
      document.getElementById("titulo").textContent = "Produto não encontrado";
    }

