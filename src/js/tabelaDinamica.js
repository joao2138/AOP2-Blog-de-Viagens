var x = 0;
function atualiza() {
    if(x == 0){
        atualizarTabela(menor_preco_bairro);
        document.getElementById("caption").innerHTML="Menor preço por Bairro";

        //muda a posição dos circulos que estao abaixo da tabela
        document.getElementById("selecao").innerHTML="<div class='circle'></div><div class='circle'><div class='selected'></div></div><div class='circle'></div><div class='circle'></div>";
        x++;
    }
        
    else if( x == 1){
        atualizarTabela(media_geral);
        document.getElementById("caption").innerHTML="Média Geral dos Combustíveis";

        document.getElementById("selecao").innerHTML='<div class="circle"></div><div class="circle"></div> <div class="circle"><div class="selected"></div></div><div class="circle"></div>';
        x++;
    }
        
    else if( x == 2){
        atualizarTabela(media_por_posto);
        document.getElementById("caption").innerHTML="Média Combustíveis por Posto";

        document.getElementById("selecao").innerHTML='<div class="circle"></div><div class="circle"></div></div><div class="circle"></div><div class="circle"><div class="selected"></div></div>';
        x++;
    }
        
    //volta para o padrão    
    else{
        atualizarTabela(info_postos);
        document.getElementById("caption").innerHTML="Informações sobre os postos";

        document.getElementById("selecao").innerHTML='<div class="circle"><div class="selected"></div></div><div class="circle"></div><div class="circle"></div><div class="circle"></div>';
        x = 0;
    }
}


function atualizarTabela(array) {
    var novaTabela = array;

    // selecionando a tabela e os elementos
    const tabela = document.getElementById("tabela-dinamica");

    const thead = tabela.getElementsByTagName("thead")[0];
    const tbody = tabela.getElementsByTagName("tbody")[0];

    // limpar a tabela
    thead.innerHTML = "";
    tbody.innerHTML = "";

    //adicionando a linha de cabeçalho e pegando as chaves do objeto/dicionario para usar como os nomes de cabeçalho
    const cabecalho = document.createElement("tr");
    const colunas = Object.keys(novaTabela[0]);
    

    //percorrendo a lista com os cabeçalhos(chaves) e adicionando os cabeçalhos na linha
    for(let i=0;  i < colunas.length; i++ ) {
        const th = document.createElement("th");
        th.textContent = colunas[i];
        cabecalho.appendChild(th); 
    };
    thead.appendChild(cabecalho);

    
    // loop para adicionar as linhas da tabela, para cada objeto cria uma nova tr
    //cada 'dado' retorna o indice da posição do objeto/dicionario no array
    for(let dado in novaTabela) {
        const tr = document.createElement("tr"); 
        
        //no loop interno, cada linha tr, é preenchida com elementos td e seu valor
        //cada 'coluna' retorna a chave do objeto
        for(let coluna of colunas) {
            // console.log(coluna);
            const td = document.createElement("td"); 

            //acessa a posição do objeto na lista/ acessa o objeto
            td.textContent = novaTabela[dado][coluna];

            tr.appendChild(td); // adiciona o valor no td
        };
        tbody.appendChild(tr); // adiciona o tr na tabela
    };
}


//esses são os valores de cada tabela, usei uma estrutura de dicionario para usar as chaves como cabeçalho e usar as mesmas chaves para recuperar os valores, acho que no javascript sao chamados objetos. entao cada objeto no array funciona como um tr e dentro dele o td, funcionou melhor do que o esperado usar innerHTML não deu muito certo
const menor_preco_bairro = [
    {
        "Bairros": "Camará",
        "Gasolina Comum": " R$ 5,64 ",
        "Gasolina Aditivada": " R$ 5,89 ",
        "Etanol": " R$ 3,89 ",
        " Diesel ": " R$ 5,89 "
       
    },
    {
        "Bairros": "Manguinhos",
        "Gasolina Comum": " R$ 5,64 ",
        "Gasolina Aditivada": " R$ 6,64 ",
        "Etanol": " R$ 3,99 ",
        " Diesel ": " R$ 5,85 "
        
    },
    {
        "Bairros": "Jardim Limoeiro",
        "Gasolina Comum": " R$ 5,89 ",
        "Gasolina Aditivada": " R$ 6,09 ",
        "Etanol": " R$ 4,19 ",
        " Diesel ": " R$ 5,99 "
        
    },
    {
        "Bairros": "Chácara Pareral",
        "Gasolina Comum": " R$ 5,89 ",
        "Gasolina Aditivada": " R$ 6,16 ",
        "Etanol": " R$ 4,39 ",
        " Diesel ": " R$ 5,99 "
    
    }
]

const media_geral = [
    {
        "Média Gasolina Comum": "R$ 5,87",
        "Média Gasolina Aditivada": "R$ 6,07",
        "Média Etanol": "R$ 4,09",
        "Média Diesel": "R$ 5,97",
        "Periodo ": "10/05 A 23/05"
        
    }
]

const media_por_posto = [
    {
        "Postos": "Posto Arara Azul",
        "Gasolina Comum": " R$ 5,89 ",
        "Gasolina Aditivada": " R$ 6,19 ",
        "Etanol": " R$ 4,39 ",
        "Diesel ": " R$ 5,99  "
    },
    {
        "Postos": "Posto Flora",
        "Gasolina Comum": " R$ 5,89 ",
        "Gasolina Aditivada": " R$ 5,92 ",
        "Etanol": " R$ 4,00 ",
        "Diesel ": " R$ 5,98  "
    },
    {
        "Postos": "Posto Marcela",
        "Gasolina Comum": " R$ 5,89 ",
        "Gasolina Aditivada": " R$ 6,09 ",
        "Etanol": " R$ 4,19 ",
        "Diesel ": " R$ 5,99  "
    },
    {
        "Postos": "Posto Marlim",
        "Gasolina Comum": " R$ 5,89 ",
        "Gasolina Aditivada": " R$ 6,19 ",
        "Etanol": " R$ 4,09 ",
        "Diesel ": " R$ 6,01  "
    },
    {
        "Postos": "Posto Trivela",
        "Gasolina Comum": " R$ 5,84 ",
        "Gasolina Aditivada": " R$ 6,14 ",
        "Etanol": " R$ 3,89 ",
        "Diesel ": " R$ 5,99  "
    },
    {
        "Postos": "Posto YAHOO",
        "Gasolina Comum": " R$ 5,82 ",
        "Gasolina Aditivada": " R$ 5,92 ",
        "Etanol": " R$ 3,99 ",
        "Diesel ": " R$ 5,85 "
    }
]

const info_postos = [
    {
        "Postos": "Posto Arara Azul",
        "Bairro": "Chácara Pareral",
        "Rua": "Rodovia ES-10",
        "Cidade": "Serra",
        "Qtd Amostras": "10"
    },
    {
        "Postos": "Posto Flora",
        "Bairro": "Camará",
        "Rua": "Rodovia ES-10",
        "Cidade": "Serra",
        "Qtd Amostras": "10"
    },
    {
        "Postos": "Posto Marcela",
        "Bairro": "Jardim Limoeiro",
        "Rua": "Rodovia Norte-Sul",
        "Cidade": "Serra",
        "Qtd Amostras": "10"
    },
    {
        "Postos": "Posto Marlim",
        "Bairro": "Manguinhos",
        "Rua": "Rodovia ES-10",
        "Cidade": "Serra",
        "Qtd Amostras": "10"
    },
    {
        "Postos": "Posto Trivela",
        "Bairro": "Camará",
        "Rua": "Rodovia ES-10",
        "Cidade": "Serra",
        "Qtd Amostras": "10"
    },
    {
        "Postos": "Posto YAHOO",
        "Bairro": "Manguinhos",
        "Rua": "Rodovia ES-10",
        "Cidade": "Serra",
        "Qtd Amostras": "10"
    }
]
