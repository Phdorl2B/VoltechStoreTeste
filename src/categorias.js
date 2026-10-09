const categoriasBtn = document.getElementById("categoriasBtn");
const categoriasBtnMobile = document.getElementById("categoriasBtnMobile");

const categoriasMenu = document.getElementById("categoriasMenu");
const categoriasMenuMobile = document.getElementById("categoriasMenuMobile");


// ==========================
// BOTÃO DESKTOP
// ==========================

categoriasBtn.addEventListener("click", function (event) {

    event.stopPropagation();

    categoriasMenu.classList.toggle("hidden");

});


// ==========================
// BOTÃO MOBILE
// ==========================

categoriasBtnMobile.addEventListener("click", function (event) {

    event.stopPropagation();

    categoriasMenuMobile.classList.toggle("hidden");

});


// ==========================
// CLICAR FORA
// ==========================

document.addEventListener("click", function (event) {

    if (
        !categoriasBtn.contains(event.target) &&
        !categoriasMenu.contains(event.target)
    ) {

        categoriasMenu.classList.add("hidden");

    }


    if (
        !categoriasBtnMobile.contains(event.target) &&
        !categoriasMenuMobile.contains(event.target)
    ) {

        categoriasMenuMobile.classList.add("hidden");

    }

});


// ==========================
// CATEGORIAS
// ==========================

const linksCategorias = document.querySelectorAll("[data-categoria]");

linksCategorias.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const categoria = link.dataset.categoria;

        const produtosFiltrados = produtos.filter(function (produto) {

            return produto.categoria === categoria;

        });

        mostrarProdutos(produtosFiltrados);

        categoriasMenu.classList.add("hidden");
        categoriasMenuMobile.classList.add("hidden");

        verMais.style.display = "none";

    });

});