Prod_obj = [{sla: 12}];
sla = 0;

class Produtos{
    
    static PK = 0;

    constructor(nomeP, infP, qtdP, precoP, descontoP, valTot){
        this.id = Produtos.PK++;
        this.nome = nomeP;
        this.descricao = infP;
        this.qtd = qtdP;
        this.preco = precoP;
        this.desconto = descontoP;
        this.valTot = valTot
    }

    mostrarInf(){
        console.log("\nId do produto: " + this.id + ". \n" + 
                    "Nome do produto: " + this.nome + ". \n" +
                    "Descrição: " + this.descricao + ". \n" +
                    "Quantidade estocada: " + this.qtd + ". \n" +
                    "Preço unitário: " + this.preco + ". \n" +
                    "Desconto: " + this.desconto + ". \n" + 
                    "Valor do estoque: " + this.valTot + ". \n"
                    );
    }
}

function salvar(){

    /* TRAZ AS INFORMAÇÕES */
    nomeP = document.getElementById("nome").value;
    infP = document.getElementById("descProd").innerHTML;
    qtdP = document.getElementById("qtd").value;
    precoP = document.getElementById("preco_Und").value;
    descontoP = document.getElementById("desconto").value;

    var novoObj = new Produtos(nomeP, infP, qtdP, precoP, descontoP, valTot);
    Prod_obj.push(novoObj);
    console.log(Prod_obj);
}


/* ESTRUTURA DE CÁLCULO DO DESCONTO */
function calcular(){

    // Quantidade, Preço e Desconto
    qtdP = document.getElementById("qtd").value;
    precoP = document.getElementById("preco_Und").value;
    descontoP = document.getElementById("desconto").value;


    if(descontoP <= 100 && descontoP >=0){
        if(descontoP != 0){
            /* CÁLCULO COM DESCONTO */
            //cálculo de desconto
            var desc = parseFloat(1 - (descontoP/100));
            console.log("Valor do desconto: " + desc);
            
            //Cálculo do valor estcado com desconto
            valTot = (qtdP * precoP)* desc;
            console.log("Valor do estoque com desconto:" + valTot);
        }
        else{
            valTot = (qtdP * precoP);
            console.log("Valor do estoque:" + valTot);
        }
    }
    else{
        alert("VALOR INSERIDO NO DESCONTO INVÁLIDO! \n(O valor deve estar entre 0 e 100)")
    }

    // Altera o valor do
    document.getElementById("val_tot").value = parseFloat(valTot);
}

/* FUNÇÃO PARA MOSTRAR AS INFORMAÇÕES DOS PRODUTOS */
function mostrar(){
    
    var id = parseInt(prompt("Insira o Id do produto."));
    console.log(Prod_obj[id]);
}