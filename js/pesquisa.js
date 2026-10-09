const pesquisa = document.getElementById("pesquisa");
  const vermais = document.getElementById("verMais");

pesquisa.addEventListener("keydown", function (evento) {
   
    if (evento.key === "Enter") {

       
    const texto = pesquisa.value.toLowerCase();

    const produtosFiltrados = produtos.filter(function (produto) {
     

        return (
            produto.titulo.toLowerCase().includes(texto) ||
            produto.descricao.toLowerCase().includes(texto) ||
            produto.categoria.toLowerCase().includes(texto) 
        );
        
    });

    console.log(produtosFiltrados);

    mostrarProdutos(produtosFiltrados);
        
    vermais.style.display = "none";
}
});