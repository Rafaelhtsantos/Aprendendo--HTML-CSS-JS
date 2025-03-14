// Criarção de uma timeline do GSAP com animações sincronizadas com o scroll
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        markers: true, //depuração
    },
});

tl.to(
    "#fanta",
    {
        top: "120%", // move o elemento com ID falta para 120% do topo
        left: "0%",
    },
    "orange"
); //Nomeando esse trecho de animação como "orange" para sincronização

tl.to(
    "#laranja-cortada",
    {
        top: "160%", // move o elemento com "orange-cut" para 160% do topo
        left: "23%", // move o elemento com "orange-cut" para 23% da esquerda
    },
    "orange"
); // Sincronizado com a animação nomeada "orange"

tl.to(
    "#laranja",
    {
        width: "15%", // Reduz a largura do elemento com ID "orange" para 15%
        top: "160%", // move o elemento para 160% do topo
        right: "10%", // move o elemento para 10% da direita
    },
    "orange"
); // Sincronizado com a animação nomeada "orange"

tl.to(
    "#folha",
    {
        top: "110%", // Move o elemento com ID "folha" para 110% do topo
        rotate: "530deg", // Rotaciona o elemento "folha" em 530 graus
        left: "70%", // Move o elemento "folha" para 70% da esquerda
    },
    "orange"
); // Sincronizado com a animação nomeada "orange"

tl.to(
    "#folha2",
    {
        top: "110%", // Move o elemento com ID "folha" para 110% do topo
        rotate: "530deg", // Rotaciona o elemento "folha" em 530 graus
        left: "0%", // Move o elemento "folha" para 70% da esquerda
    },
    "orange"
); // Sincronizado com a animação nomeada "orange"

// criando outra timeline

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%", // Fim da amnimação (topo da tela atinge 50% da altura quando estiver
        // 20% da seção ,three)
        scrub: true,
        markers: true, //depuração
    },
});

tl2.from(
    ".lemon1",
    {
        rotate: "-90deg",
        left: "100%",
        top: "110%",
    },
    "lemon"
);

tl2.from(
    "#cocacola",
    {
        rotate: "-90deg",
        left: "-100%",
        top: "110%",
    },
    "cocacola"
);

tl2.from(
    ".lemon2",
    {
        rotate: "90deg",
        left: "100%",
        top: "110%",
    },
    "lemon2"
);

tl2.from(
    "#pepsi",
    {
        rotate: "90deg",
        left: "100%",
        top: "110%",
    },
    "pepsi"
);

tl2.from(
    "#laranja-cortada",
    {
        width: "18%",
        left: "42%",
        top: "204%",
    },
    "laranja-cortada"
);

tl2.to(
    "#fanta",
    {
        width: "25%",
        left: "37%",
        top: "225%",
    },
    "fanta"
);