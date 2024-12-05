 // Funções para alterar o conteúdo para dipositivos mobile

 function verificarTamanhoFooter() {
    var historia = document.getElementById('historias');
    var elemento = document.getElementById("pesquisa");
  
    //matchMedia para simular uma media query
    if (window.matchMedia("(max-width: 405px)").matches) {
        // Se a largura for menor que 405px reduz o tamanho do texto
        historia.innerHTML = "Histórias viajantes";
     
        //caso não encontre o id retorne
        if(elemento == null) { return }
        elemento.innerHTML = "Pesquisa";

    } else {
        // se não volte ao padrão
        historia.innerHTML = "Histórias de viajantes";

        if(elemento == null) { return }
        elemento.innerHTML = "Pesquisa Combustíveis";
    }

}

function verificarTamanhoNavBar(){
    var nav;
    var links;
    nav = document.getElementsByClassName("nav-bar")[0];

    links = nav.getElementsByTagName("a");

    if(window.matchMedia("(max-width: 409px)").matches){
     //links[1] e [3] são as tags <a> 'dicas de viagem' e 'historias de viajantes' respectivamente
        links[1].innerHTML = "Dicas viagem";
        links[3].innerHTML = "Histórias";

    }else {
        links[1].innerHTML = "Dicas de viagem";
        links[3].innerHTML = "Histórias de viajantes";
    }
}

// Chamando as funções
verificarTamanhoFooter();
verificarTamanhoNavBar();

// Adicionando ouvintes para o evento de redimencionar 
window.addEventListener('resize', verificarTamanhoFooter);

window.addEventListener('resize', verificarTamanhoNavBar);
