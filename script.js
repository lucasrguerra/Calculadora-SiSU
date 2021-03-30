let UFPE = [
    [
        document.getElementById("checkboxBachareladoAdministracaoUFPE"),
        2, 2.5, 2, 1, 2.5, "UFPE",  "Administração", "Bacharelado", 518
    ],

    [
        document.getElementById("checkboxBachareladoArquiteturaEUrbanismoUFPE"),
        2, 2, 2, 1, 3, "UFPE",  "Arquitetura e Urbanismo", "Bacharelado", 674
    ],

    [
        document.getElementById("checkboxBachareladoCienciaDaComputacaoUFPE"),
        2, 4, 1, 1, 2, "UFPE", "Ciência Da Computação", "Bacharelado", 682
    ],

    [
        document.getElementById("checkboxBachareladoCienciasBiologicasUFPE"),
        1, 2, 1, 3.5, 2.5, "UFPE", "Ciências Biológicas", "Bacharelado", 625
    ],

    [
        document.getElementById("checkboxLicenciaturaCienciasBiologicasUFPE"),
        1, 2, 1, 3, 3, "UFPE", "Ciências Biológicas", "Licenciatura", 613
    ],

    [
        document.getElementById("checkboxBachareladoDesignUFPE"),
        2.5, 2, 2.5, 1, 2, "UFPE",  "Design", "Bacharelado", 630
    ],

    [
        document.getElementById("checkboxBachareladoDireitoUFPE"),
        3, 1, 2, 1, 3, "UFPE",  "Direito", "Bacharelado", 709
    ],

    [
        document.getElementById("checkboxBachareladoEnfermagemUFPE"),
        2, 1.5, 1, 2.5, 3, "UFPE", "Enfermagem", "Bacharelado", 677
    ],

    [
        document.getElementById("checkboxBachareladoEngenhariaUFPE"),
        1, 4, 1, 3, 1, "UFPE", "Engenharia", "Bacharelado", 620
    ],

    [
        document.getElementById("checkboxBachareladoEngenhariaDaComputacaoUFPE"),
        1, 4, 1, 2, 2, "UFPE",  "Engenharia Da Computação", "Bacharelado", 680
    ],

    [
        document.getElementById("checkboxPsicologiaUFPE"),
        1.5, 1, 3, 2, 2.5, "UFPE", "Psicologia", "Bacharelado", 678
    ]
];

let UFRPE = [
    [
        document.getElementById("checkboxBachareladoAdministracaoUFRPE"),
        3, 3.5, 2.5, 1, 2, "UFRPE",  "Administração", "Bacharelado", 518
    ],

    [
        document.getElementById("checkboxBachareladoCienciaDaComputacaoUFRPE"),
        3, 4, 1.5, 1.5, 2, "UFRPE", "Ciência Da Computação", "Bacharelado", 651
    ],

    [
        document.getElementById("checkboxBachareladoCienciasBiologicasUFRPE"),
        3, 1.5, 2, 3.5, 2, "UFRPE", "Ciências Biológicas", "Bacharelado", 601
    ],

    [
        document.getElementById("checkboxLicenciaturaCienciasBiologicasUFRPE"),
        3, 1.5, 1.5, 4, 2, "UFRPE", "Ciências Biológicas", "Licenciatura", 587
    ],

    [
        document.getElementById("checkboxLicenciaturaComputacaoUFRPE"),
        2.5, 3, 1.5, 3, 2, "UFRPE", "Computação", "Licenciatura", 599
    ],

    [
        document.getElementById("checkboxBachareladoEngenhariaAmbientalUFRPE"),
        2, 3, 2, 3, 2, "UFRPE", "Engenharia Ambiental", "Bacharelado", 598
    ],

    [
        document.getElementById("checkboxBachareladoEngenhariaEletricaUFRPE"),
        1.5, 4, 1.5, 3, 2, "UFRPE", "Engenharia Elétrica", "Bacharelado", 604
    ],

    [
        document.getElementById("checkboxLicenciaturaFisicaUFRPE"),
        2.5, 3, 1.5, 3, 2, "UFRPE", "Física", "Licenciatura", 597
    ]
];

let UPE = [
    [
        document.getElementById("checkboxBachareladoDireitoUPE"),
        1, 1, 1, 1, 1, "UPE",  "Direito", "Bacharelado", 731
    ],

    [
        document.getElementById("checkboxBachareladoEngenhariaDaComputacaoUPE"),
        1, 1, 1, 1, 1, "UPE",  "Engenharia Da Computação", "Bacharelado", 705
    ],

    [
        document.getElementById("checkboxBachareladoEngenhariaEletronicaUPE"),
        1, 1, 1, 1, 1, "UPE",  "Engenharia Eletrônica", "Bacharelado", 683
    ],

    [
        document.getElementById("checkboxBachareladoEngenhariaEletricaUPE"),
        1, 1, 1, 1, 1, "UPE",  "Engenharia Elétrica", "Bacharelado", 665
    ]
];

const instituicoes = [
    UFPE,
    UFRPE,
    UPE
];

function Calcular() {

    DeletarResultadosAnteriores();

    ChecarSelecionados();

}

function DeletarResultadosAnteriores() {

    while ((linhasDaTabela = document.getElementById("resultado")) != null ) {
        linhasDaTabela.remove();
    }
}

function ChecarSelecionados() {

    for (let index = 0; index < instituicoes.length; index++) {

        let instituicao = instituicoes[index];

        for (let contador = 0; contador < instituicao.length; contador++) {

            const curso = instituicao[contador];
            
            if (curso[0].checked) {
                CalcularMedia(
                    curso[1],
                    curso[2],
                    curso[3],
                    curso[4],
                    curso[5],
                    curso[6],
                    curso[7],
                    curso[8],
                    curso[9],
                )
            };
        }

    }
}

function CalcularMedia(
    pesoLinguagens,
    pesoMatematica,
    pesoHumanas,
    pesoNatureza,
    pesoRedacao,
    instituicao,
    curso,
    tipo,
    notaDeCorte) {

    let notaLinguagens = document.getElementById('inputLinguagens').value;
    let notaMatematica = document.getElementById('inputMatematica').value;
    let notaHumanas = document.getElementById('inputHumanas').value;
    let notaNatureza = document.getElementById('inputNatureza').value;
    let notaRedacao = document.getElementById('inputRedacao').value;

    let linguagens = notaLinguagens * pesoLinguagens;
    let matematica = notaMatematica * pesoMatematica;
    let humanas = notaHumanas * pesoHumanas;
    let natureza = notaNatureza * pesoNatureza;
    let redacao = notaRedacao * pesoRedacao;

    let pesos = pesoLinguagens + pesoMatematica + pesoHumanas + pesoNatureza + pesoRedacao;
    let soma = linguagens + matematica + humanas + natureza + redacao;
    let media = Math.floor(soma / pesos);

    let status = "";
    if(media > notaDeCorte) {
        status = "Aprovado";
    } else {
        status = "Reprovado";
    }

    Mostrar(instituicao, curso, tipo, media, notaDeCorte, status);
};

function Mostrar(instituicao, curso, tipo, media, notaDeCorte, status) {

    let colunaInstituicao = document.createElement("td");
    let colunaCurso = document.createElement("td");
    let colunaTipo = document.createElement("td");
    let colunaNota = document.createElement("td");
    let colunaNotaDeCorte = document.createElement("td");
    let colunaStatus = document.createElement("td");

    colunaInstituicao.appendChild(document.createTextNode(instituicao));
    colunaCurso.appendChild(document.createTextNode(curso));
    colunaTipo.appendChild(document.createTextNode(tipo));
    colunaNota.appendChild(document.createTextNode(media));
    colunaNotaDeCorte.appendChild(document.createTextNode(notaDeCorte));
    colunaStatus.appendChild(document.createTextNode(status));

    let LinhaDaTabela = document.createElement("tr");

    LinhaDaTabela.id = "resultado"

    LinhaDaTabela.appendChild(colunaInstituicao);
    LinhaDaTabela.appendChild(colunaCurso);
    LinhaDaTabela.appendChild(colunaTipo);
    LinhaDaTabela.appendChild(colunaNota);
    LinhaDaTabela.appendChild(colunaNotaDeCorte);
    LinhaDaTabela.appendChild(colunaStatus);

    let tabela = document.getElementById("results");
    
    tabela.appendChild(LinhaDaTabela);
}