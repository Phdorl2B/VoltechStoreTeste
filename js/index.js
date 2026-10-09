
const vitrine = document.getElementById("vitrine");

// Configuração das seções da loja
const secoes = [
    {
        titulo: "Ofertas",
        tipo: "Ofertas"
    },
    {
        titulo: "Placas-mãe",
        categoria: "Placa-mãe"
    },
    {
        titulo: "Placas de vídeo",
        categoria: "Placa de Video"
    },
    {
        titulo: "Todos os produtos",
        tipo: "todos"
    }
];

// Cria uma seção com seu próprio carrossel
function criarSecao(secao) {
    const section = document.createElement("section");

    section.innerHTML = `
        <h2 class="text-2xl font-bold mb-5">
            ${secao.titulo}
        </h2>

        <div class="flex gap-4 overflow-x-auto pb-4 select-none
                    cursor-grab active:cursor-grabbing"
             style="scrollbar-width: none;">
        </div>
    `;

    const carrossel = section.querySelector("div");

    let arrastando = false;
    let inicioX = 0;
    let scrollInicial = 0;
    let houveArraste = false;

    // Arrastar com o mouse
    carrossel.addEventListener("mousedown", event => {
        if (event.button !== 0) return;

        arrastando = true;
        houveArraste = false;
        inicioX = event.pageX;
        scrollInicial = carrossel.scrollLeft;
    });

    window.addEventListener("mousemove", event => {
        if (!arrastando) return;

        const distancia = event.pageX - inicioX;

        if (Math.abs(distancia) > 5) {
            houveArraste = true;
            carrossel.scrollLeft = scrollInicial - distancia;
        }
    });

    window.addEventListener("mouseup", () => {
        arrastando = false;
    });

    window.addEventListener("blur", () => {
        arrastando = false;
    });

    carrossel.addEventListener("dragstart", event => {
        event.preventDefault();
    });

    // Seleciona os produtos da seção
    let lista = produtos;

    if (secao.tipo === "Ofertas") {
        const ids = ["003", "004", "001"];

        lista = produtos.filter(produto =>
            ids.includes(produto.id)
        );
    } else if (secao.categoria) {
        lista = produtos.filter(produto =>
            produto.categoria.toLowerCase() ===
            secao.categoria.toLowerCase()
        );
    }

    // Cria os cards usando cards.js
    lista.forEach(produto => {
        const card = criarCard(produto);

        // Evita abrir o produto se o usuário estiver arrastando
        card.querySelector("button").addEventListener("click", event => {
            if (houveArraste) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }
        }, true);

        carrossel.appendChild(card);
    });

    // Só exibe se houver produtos
    if (lista.length > 0) {
        vitrine.appendChild(section);
    }
}

// Monta todas as seções
if (typeof produtos !== "undefined") {
    secoes.forEach(criarSecao);
} else {
    console.error("Não foi possível encontrar a lista de produtos.");
}