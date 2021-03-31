let UFRPE = [
    [
        "BachareladoAdministracaoUFRPE",
        3, 3.5, 2.5, 1, 2, "UFRPE",  "Administração", "Bacharelado", 518
    ],

    [
        "BachareladoAgronomiaUFRPE",
        2, 3, 2, 3, 2, "UFRPE",  "Agronomia", "Bacharelado", 599
    ],

    [
        "BachareladoCienciaDaComputacaoUFRPE",
        3, 4, 1.5, 1.5, 2, "UFRPE", "Ciência Da Computação", "Bacharelado", 651
    ],

    [
        "BachareladoCienciasBiologicasUFRPE",
        3, 1.5, 2, 3.5, 2, "UFRPE", "Ciências Biológicas", "Bacharelado", 601
    ],

    [
        "LicenciaturaCienciasBiologicasUFRPE",
        3, 1.5, 1.5, 4, 2, "UFRPE", "Ciências Biológicas", "Licenciatura", 587
    ],

    [
        "LicenciaturaComputacaoUFRPE",
        2.5, 3, 1.5, 3, 2, "UFRPE", "Computação", "Licenciatura", 599
    ],

    [
        "BachareladoEngenhariaAmbientalUFRPE",
        2, 3, 2, 3, 2, "UFRPE", "Engenharia Ambiental", "Bacharelado", 598
    ],

    [
        "BachareladoEngenhariaEletricaUFRPE",
        1.5, 4, 1.5, 3, 2, "UFRPE", "Engenharia Elétrica", "Bacharelado", 604
    ],

    [
        "LicenciaturaFisicaUFRPE",
        2.5, 3, 1.5, 3, 2, "UFRPE", "Física", "Licenciatura", 597
    ]
];

let UFPE = [
    [
        "BachareladoAdministracaoUFPE",
        2, 2.5, 2, 1, 2.5, "UFPE",  "Administração", "Bacharelado", 518
    ],

    [
        "BachareladoArquiteturaEUrbanismoUFPE",
        2, 2, 2, 1, 3, "UFPE",  "Arquitetura e Urbanismo", "Bacharelado", 674
    ],

    [
        "BachareladoCienciaDaComputacaoUFPE",
        2, 4, 1, 1, 2, "UFPE", "Ciência Da Computação", "Bacharelado", 682
    ],

    [
        "BachareladoCienciasBiologicasUFPE",
        1, 2, 1, 3.5, 2.5, "UFPE", "Ciências Biológicas", "Bacharelado", 625
    ],

    [
        "LicenciaturaCienciasBiologicasUFPE",
        1, 2, 1, 3, 3, "UFPE", "Ciências Biológicas", "Licenciatura", 613
    ],

    [
        "BachareladoDesignUFPE",
        2.5, 2, 2.5, 1, 2, "UFPE",  "Design", "Bacharelado", 630
    ],

    [
        "BachareladoDireitoUFPE",
        3, 1, 2, 1, 3, "UFPE",  "Direito", "Bacharelado", 709
    ],

    [
        "BachareladoEnfermagemUFPE",
        2, 1.5, 1, 2.5, 3, "UFPE", "Enfermagem", "Bacharelado", 677
    ],

    [
        "BachareladoEngenhariaUFPE",
        1, 4, 1, 3, 1, "UFPE", "Engenharia", "Bacharelado", 620
    ],

    [
        "BachareladoEngenhariaDaComputacaoUFPE",
        1, 4, 1, 2, 2, "UFPE",  "Engenharia Da Computação", "Bacharelado", 680
    ],

    [
        "PsicologiaUFPE",
        1.5, 1, 3, 2, 2.5, "UFPE", "Psicologia", "Bacharelado", 678
    ]
];

let UPE = [
    [
        "BachareladoAdministracaoDeEmpresasUPE",
        1, 1, 1, 1, 1, "UFRPE",  "Administração de Empresas", "Bacharelado", 625
    ],
    
    [
        "BachareladoDireitoUPE",
        1, 1, 1, 1, 1, "UPE",  "Direito", "Bacharelado", 731
    ],

    [
        "BachareladoEngenhariaCivilUPE",
        1, 1, 1, 1, 1, "UPE", "Engenharia Civil", "Bacharelado", 615
    ],

    [
        "BachareladoEngenhariaDaComputacaoUPE",
        1, 1, 1, 1, 1, "UPE",  "Engenharia Da Computação", "Bacharelado", 705
    ],

    [
        "BachareladoEngenhariaEletronicaUPE",
        1, 1, 1, 1, 1, "UPE",  "Engenharia Eletrônica", "Bacharelado", 683
    ],

    [
        "BachareladoEngenhariaEletricaUPE",
        1, 1, 1, 1, 1, "UPE",  "Engenharia Elétrica", "Bacharelado", 665
    ]
];

const instituicoes = [
    UFRPE,
    UFPE,
    UPE
]

GerarCursos();

function GerarCursos() {

    let tabelaOpcoes = document.getElementById("opcoes");

    for (let index = 0; index < instituicoes.length; index++) {

        let instituicao = instituicoes[index];

        for (let contador = 0; contador < instituicao.length; contador++) {

            let curso = instituicao[contador];

            let LinhaDaTabela = document.createElement("tr");

            let colunaInstituicao = document.createElement("td");
            let colunaCurso = document.createElement("td");
            let colunaTipo = document.createElement("td");
            let colunaInput = document.createElement("td");

            let input = document.createElement("input");
            input.type = "checkbox";
            input.id = `checkbox${curso[0]}`;

            colunaInstituicao.appendChild(document.createTextNode(curso[6]));
            colunaCurso.appendChild(document.createTextNode(curso[7]));
            colunaTipo.appendChild(document.createTextNode(curso[8]));
            colunaInput.appendChild(input);

            LinhaDaTabela.appendChild(colunaInstituicao);
            LinhaDaTabela.appendChild(colunaCurso);
            LinhaDaTabela.appendChild(colunaTipo);
            LinhaDaTabela.appendChild(colunaInput);

            tabelaOpcoes.appendChild(LinhaDaTabela);
        };
    };
};

function SelecionarTodosOsCursos() {
    
    let Checkbox = document.getElementById("checkboxSelecionarTodosOsCursos");

    if (Checkbox.checked == true) {
        MarcarOuDesmarcarCheckbox(true);
    } else {
        MarcarOuDesmarcarCheckbox(false);
    };
};

function MarcarOuDesmarcarCheckbox(boolean) {

    for (let index = 0; index < instituicoes.length; index++) {
        
        let instituicao = instituicoes[index];

        for (let contador = 0; contador < instituicao.length; contador++) {

            let curso = instituicao[contador];

            let id = curso[0];
            console.log(id);

            document.getElementById(`checkbox${curso[0]}`).checked = boolean;
        };
    };
};

function Calcular() {

    DeletarResultadosAnteriores();

    ChecarSelecionados();

};

function DeletarResultadosAnteriores() {

    while ((linhasDaTabela = document.getElementById("resultado")) != null ) {
        linhasDaTabela.remove();
    }
};

function ChecarSelecionados() {

    for (let index = 0; index < instituicoes.length; index++) {

        let instituicao = instituicoes[index];

        for (let contador = 0; contador < instituicao.length; contador++) {

            let curso = instituicao[contador];
            
            if (document.body.getClientRects(curso[0]).checked) {
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
                );
            };
        };

    };
};

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

    c

    LinhaDaTabela.id = "resultado"

    LinhaDaTabela.appendChild(colunaInstituicao);
    LinhaDaTabela.appendChild(colunaCurso);
    LinhaDaTabela.appendChild(colunaTipo);
    LinhaDaTabela.appendChild(colunaNota);
    LinhaDaTabela.appendChild(colunaNotaDeCorte);
    LinhaDaTabela.appendChild(colunaStatus);

    let tabelaResults = document.getElementById("results");
    
    tabelaResults.appendChild(LinhaDaTabela);
};