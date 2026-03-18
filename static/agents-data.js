/*
Data Store local dos agentes especialistas.
Preparado para escalar para outros agentes (ex.: ESG e Carbon Free).
*/

window.BOOTCAMP_AGENTS = window.BOOTCAMP_AGENTS || {};

window.BOOTCAMP_AGENTS.ofertas_publicas = {
  id: "ofertas_publicas",

  nome: "Agente Especialista 1 - Ofertas Publicas NEOOH",

  fallback:
    "Este agente responde apenas com base no Data Store público da NEOOH e não possui informações suficientes para responder essa pergunta com segurança.",

  contexto_empresa: [
    "A NEOOH é líder em mídia aeroportuária e terminais rodoviários no Brasil.",
    "A empresa possui mais de 46 mil telas digitais.",
    "A operação está presente em mais de 180 terminais.",
    "A NEOOH gera mais de 800 milhões de impactos anuais.",
    "A empresa atua em aeroportos relevantes do Brasil.",
    "Meta pública de receita em 2024: R$ 300 milhões."
  ],

  instrumentos_captacao: {

    cri: [
      "Lastreado em recebíveis imobiliários.",
      "Pode securitizar receitas de contratos de locação de espaços físicos.",
      "Emissão via securitizadora registrada na CVM.",
      "Remuneração geralmente atrelada a CDI ou IPCA + spread.",
      "Isenção de IR para pessoa física.",
      "Prazo típico entre 5 e 15 anos."
    ],

    debentures: [
      "Títulos de dívida corporativa emitidos diretamente pela empresa.",
      "Podem ser simples, conversíveis ou incentivadas.",
      "Distribuição via ICVM 400 ou ICVM 476.",
      "Remuneração por CDI + spread, IPCA + spread ou prefixada.",
      "Podem ter garantias reais ou fidejussórias.",
      "Debêntures incentivadas podem ter isenção de IR para pessoa física."
    ]

  },

  estrutura_executiva: [
    "Leonardo Chebly — CEO / Copresidente. Responsável por comercial, negócios, tecnologia, inovação e operações.",
    "Cristiano Muniz — CFO / Copresidente. Responsável por financeiro, administrativo, M&A, governança e compliance."
  ],

  governanca: [
    "Código de Cultura NEOOH.",
    "Código de Ética e Conduta.",
    "Canal de Denúncias.",
    "Política de Privacidade."
  ],

  estrategia_crescimento: [
    "Aquisição da Aioros Studios em 2022.",
    "Reforço em AR, conteúdo 3D e experiências imersivas para OOH.",
    "NEOOH Connect ligado a open innovation.",
    "Expansão de parques e circuitos.",
    "Meta de receita de R$ 300 milhões.",
    "Uso de IA e ML operacional em segmentação e eficiência."
  ],

  limites: [
    "Responde sobre estrutura executiva.",
    "Responde sobre CRI, debêntures, governança e estratégia de M&A.",
    "Responde sobre meta pública de receita.",
    "Responde sobre conceitos de mercado de capitais no contexto NEOOH.",
    "Não responde sobre dados não públicos.",
    "Não responde sobre rating de crédito não confirmado.",
    "Não responde sobre covenants específicos.",
    "Não responde sobre spreads exatos não divulgados.",
    "Não responde sobre comparações sem fonte pública."
  ],

  glossario: [
    { termo: "CRI", definicao: "Certificado de Recebíveis Imobiliários." },
    { termo: "CRA", definicao: "Certificado de Recebíveis do Agronegócio." },
    { termo: "Debênture", definicao: "Título de dívida emitido por empresa." },
    { termo: "CDI", definicao: "Taxa de referência usada no mercado financeiro brasileiro." },
    { termo: "IPCA", definicao: "Índice oficial de inflação no Brasil." },
    { termo: "ICVM 476", definicao: "Regra de oferta com esforços restritos." },
    { termo: "M&A", definicao: "Fusões e aquisições (mergers and acquisitions)." },
    { termo: "CFO", definicao: "Chief Financial Officer." },
    { termo: "Covenant", definicao: "Cláusula contratual de monitoramento financeiro." },
    { termo: "OOH", definicao: "Out of Home, mídia exibida fora de casa." }
  ],

  referencias: [
    { nome: "NEOOH — Site Oficial", url: "https://neooh.com.br/" },
    { nome: "Meio & Mensagem" },
    { nome: "Intelligent CIO LATAM" },
    { nome: "SoulCode Bootcamp LLM" }
  ],

  perguntas_sugeridas: [
    "A NEOOH já emitiu CRI ou debêntures?",
    "Como funciona a estrutura de um CRI para uma empresa de mídia OOH?",
    "O que são debêntures incentivadas e a NEOOH se enquadra?",
    "Quem é o CFO da NEOOH?",
    "Quais aquisições a NEOOH realizou?",
    "A NEOOH tem metas públicas de receita?",
    "Qual é a governança corporativa da NEOOH?",
    "O que é o NEOOH Connect?"
  ],

  qa: [

    {
      pergunta: "A NEOOH já emitiu CRI ou debêntures?",
      aliases: ["neooh emitiu cri", "neooh emitiu debentures"],
      resposta:
        "Com base no Data Store atual, não há confirmação pública de emissão de CRI ou debêntures pela NEOOH."
    },

    {
      pergunta: "Quem é o CFO da NEOOH?",
      aliases: ["cfo da neooh", "cristiano muniz"],
      resposta:
        "Segundo o Data Store, o CFO e copresidente da NEOOH é Cristiano Muniz."
    },

    {
      pergunta: "A NEOOH tem metas públicas de receita?",
      aliases: ["meta de receita"],
      resposta:
        "Sim. O Data Store informa meta pública de receita de R$ 300 milhões em 2024."
    }

  ]

};