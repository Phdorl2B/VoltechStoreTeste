
function criarCard(produto) {
    const card = document.createElement("article");

    card.className =
        "flex-none w-[80%] sm:w-[45%] md:w-[calc((100%-3rem)/4)] " +
        "bg-white rounded-2xl shadow-md p-4 flex flex-col gap-3";

    card.innerHTML = `
        <img
            src="${produto.imagem}"
            alt="${produto.titulo}"
            draggable="false"
            class="w-full h-44 object-contain"
        >

        <h3 class="text-lg font-semibold">
            ${produto.titulo}
        </h3>

        <p class="text-xl font-bold mt-auto">
            ${produto.preco}
        </p>

        <button
            type="button"
            class="bg-black text-white rounded-lg p-3 hover:bg-gray-800"
        >
            Ver produto
        </button>
    `;

    card.querySelector("button").addEventListener("click", () => {
        window.location.href = `produto.html?id=${produto.id}`;
    });

    return card;
}