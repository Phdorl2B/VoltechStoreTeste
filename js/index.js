const cards = document.getElementById("cards");

let quantidadeProdutos = 14;

function mostrarProdutos(lista) {

    cards.innerHTML = "";

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    lista.slice(0, quantidadeProdutos).forEach(function (produto) {

        const favoritado = favoritos.includes(produto.id);

        cards.innerHTML += `
        
        <div 
            onclick="window.location.href='produto.html?id=${produto.id}'"
            class="relative gap-4 flex flex-col bg-white rounded-2xl mt-4 shadow-lg m-0 p-3 w-[10em]  md:w-full md:m-1 hover:scale-105 transition duration-300 cursor-pointer"
        >

            <button
                onclick="favoritar(event, '${produto.id}')"
                class="absolute top-4 right-4 z-10 text-3xl transition ${
                    favoritado ? "text-red-500" : "text-gray-400"
                }"
            >
                ${favoritado ? "♥" : "♡"}
            </button>

            <img 
                class="w-full h-40 sm:h-48 md:h-64 object-contain rounded-xl"
                src="${produto.imagem}"
            >

            
            <h2 class="text-2xl font-light line-clamp-1">
                ${produto.titulo}
            </h2>


            <h2 class="text-2xl font-semibold mt-4">
                ${produto.preco}
            </h2>

                    
           <button
                onclick="adicionarCarrinho(event, '${produto.id}')"
                class="w-full mt-auto bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition cursor-pointer">
                 Adicionar ao carrinho
            </button>
        `;
    });
}


function favoritar(event, id) {

    event.stopPropagation();

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (favoritos.includes(id)) {

        favoritos = favoritos.filter(function (favorito) {
            return favorito !== id;
        });

    } else {

        favoritos.push(id);

    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    mostrarProdutos(produtos);
}


mostrarProdutos(produtos);


const verMais = document.getElementById("verMais");

verMais.addEventListener("click", function () {

    quantidadeProdutos += 10;

    mostrarProdutos(produtos);

});

function adicionarCarrinho(event, id) {

    event.stopPropagation();

    console.log("Produto adicionado ao carrinho:", id);

}

