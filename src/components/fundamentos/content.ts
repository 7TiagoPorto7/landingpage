import { Certificate, ChartLineUp, FileXls, Infinity as InfinityIcon, Robot, ShieldCheck, SquaresFour, TreeStructure } from "@phosphor-icons/react/dist/ssr";

// Conteúdo da página /fundamentos. Tudo que for preço, prazo ou promessa fica aqui.
// Regra: nada de depoimento, número de alunos, nota ou duração que não seja real.

export const PRODUCT = "Fundamentos da Modelagem Financeira";
export const CHECKOUT_URL = "https://pay.hotmart.com/F106435738T";
export const PRICE = 197;
export const PRICE_LABEL = "R$ 197";
export const INSTALLMENT_COUNT = "12x de";
export const INSTALLMENT_VALUE = "R$ 19,67";
export const INSTALLMENT_LABEL = `${INSTALLMENT_COUNT} ${INSTALLMENT_VALUE}`;
export const INSTALLMENTS = `${INSTALLMENT_LABEL} no cartão`;

// Um único texto para a intenção de compra, em toda a página
export const BUY_LABEL = "Comprar agora";

export const MARQUEE = [
    "Módulo das 3 demonstrações conectadas",
    "Novas aulas com frequência",
    "Template do modelo integrado em Excel",
    "DRE, Balanço e Fluxo de Caixa conectados",
    "Checagem automática de fechamento",
    "Certificado de conclusão",
    "Acesso vitalício",
    "12x de R$ 19,67",
    "Garantia de 7 dias",
];

export const DELIVERABLES = [
    { icon: TreeStructure, title: "Módulo principal", text: "DRE, Balanço e Fluxo de Caixa conectados" },
    { icon: FileXls, title: "Template integrado", text: "DRE, Balanço e DFC ligados, com checagem" },
    { icon: ChartLineUp, title: "Template Pro", text: "Modelo completo com valuation por DCF" },
    { icon: SquaresFour, title: "Starter Kit Financeiro", text: "DRE, fluxo de caixa e dashboard de KPIs" },
    { icon: Robot, title: "Prompts de IA", text: "Para análise de DRE e resumos executivos" },
    { icon: Certificate, title: "Certificado", text: "Emitido pela Hotmart ao concluir" },
    { icon: InfinityIcon, title: "Novas aulas incluídas", text: "Módulos complementares sempre atualizados" },
    { icon: ShieldCheck, title: "Garantia de 7 dias", text: "Reembolso integral pela Hotmart" },
];

export const HERO_POINTS = [
    "Módulo principal: as 3 demonstrações conectadas",
    "Módulos complementares com novas aulas",
    "Template do modelo integrado em Excel",
    "Acesso vitalício, certificado e garantia de 7 dias",
];

export const PAINS = [
    {
        title: "O Balanço não fecha",
        text: "Você passa horas caçando a diferença entre ativo e passivo e não sabe onde está o erro.",
    },
    {
        title: "O lucro não vira caixa",
        text: "A empresa lucrou no ano, faltou dinheiro no banco e você não consegue explicar o porquê.",
    },
    {
        title: "Curso longo que não termina",
        text: "Você começou 40 horas de videoaula, parou na metade e continua sem ligar os demonstrativos.",
    },
];

export const OUTCOMES = [
    "Explicar de onde vem cada número do Balanço.",
    "Ligar DRE, Balanço e Fluxo de Caixa numa planilha que fecha sozinha.",
    "Achar o erro rápido quando o modelo não fecha.",
    "Mostrar por que uma empresa lucrativa pode ficar sem caixa.",
    "Seguir para projeções e valuation com a base certa.",
];

export const LESSONS = [
    {
        title: "A lógica central do modelo",
        text: "O que é um modelo financeiro e a regra que organiza tudo: os três demonstrativos são uma engrenagem só.",
        outcome: "o mapa de como as abas se ligam",
    },
    {
        title: "DRE: a estrutura do resultado",
        text: "Da receita bruta ao lucro líquido, linha por linha, e onde o dinheiro é consumido no caminho.",
        outcome: "a DRE montada no modelo",
    },
    {
        title: "Balanço: a fotografia",
        text: "Ativo, passivo e patrimônio líquido sem jargão, e por que a equação precisa fechar sempre.",
        outcome: "o Balanço estruturado",
    },
    {
        title: "DFC: do lucro ao caixa",
        text: "Por que lucro alto não significa dinheiro na conta. A reconciliação entre resultado e caixa.",
        outcome: "o Fluxo de Caixa pelo método indireto",
    },
    {
        title: "Capital de giro",
        text: "Como prazos de estoque, clientes e fornecedores consomem ou liberam caixa na operação.",
        outcome: "o capital de giro ligado ao caixa",
    },
    {
        title: "As conexões que integram tudo",
        text: "O lucro indo para o patrimônio líquido, a depreciação que reduz o lucro sem gastar caixa, e o saldo que fecha o Balanço.",
        outcome: "os três demonstrativos conectados",
    },
    {
        title: "Montagem e validação",
        text: "O modelo integrado montado na planilha, com as checagens que mostram na hora quando algo não fecha.",
        outcome: "um modelo que fecha, com checagem automática",
    },
];

export const PERSONAS = [
    {
        title: "Analistas de FP&A e controladoria",
        text: "Que montam orçamento e projeção todo mês e querem entender de verdade por que o modelo fecha, ou não fecha.",
    },
    {
        title: "Quem mira M&A, crédito ou valuation",
        text: "Que precisa dominar a base dos três demonstrativos antes de partir para DCF, LBO e análise de crédito.",
    },
    {
        title: "Estudantes e recém-formados",
        text: "De finanças, contabilidade, economia ou engenharia, que querem chegar em entrevista e case técnico sem travar.",
    },
];

// Números reais do produto (nada de contagem de alunos ou nota)
export const STATS = [
    { value: "3", label: "demonstrações conectadas" },
    { value: "+", label: "módulos com novas aulas" },
    { value: "3", label: "bônus inclusos" },
    { value: "7 dias", label: "de garantia" },
];

export const FOR_WHO = [
    "Conhece os demonstrativos separados e quer entender como eles se ligam.",
    "Trabalha ou quer trabalhar com FP&A, M&A, crédito ou controladoria.",
    "Quer ir direto ao que importa, sem 40 horas de teoria antes da prática.",
];

export const NOT_FOR_WHO = [
    "Já integra os três demonstrativos e procura valuation ou LBO avançado.",
    "Quer um curso de Excel. O foco aqui é a lógica do modelo.",
];

// Resumo da oferta dentro do cartão de preço
export const CHECKLIST = [
    "Módulo das 3 demonstrações conectadas",
    "Módulos complementares com novas aulas",
    "Template do modelo integrado em Excel",
    "Bônus: Template Pro (vendido por R$ 97)",
    "Bônus: Starter Kit Financeiro (vendido por R$ 67,90)",
    "Bônus: Planilha de prompts de IA",
    "Certificado de conclusão",
    "Acesso vitalício",
];

export const ACCESS_STEPS = [
    {
        title: "Compra pela Hotmart",
        text: "Cartão em até 12x, Pix ou boleto, num checkout seguro.",
    },
    {
        title: "Acesso no seu e-mail",
        text: "Cartão e Pix liberam na hora. Você entra na área do aluno e baixa as planilhas.",
    },
    {
        title: "Aulas e certificado",
        text: "Assista no computador ou no celular, no seu ritmo. Ao concluir, emita o certificado.",
    },
];

export const PREREQS = "Noção do que são DRE, Balanço e Fluxo de Caixa, e Excel básico.";

export const INCLUDED = [
    { item: "Curso Fundamentos da Modelagem Financeira", detail: "Módulo principal e módulos complementares com novas aulas, com certificado", value: "" },
    { item: "Template do modelo integrado", detail: "Excel editável, com checagem de fechamento", value: "" },
    { item: "Bônus: Template Pro", detail: "Modelo de 3 demonstrativos com DCF", value: "R$ 97,00" },
    { item: "Bônus: Starter Kit Financeiro", detail: "DRE, fluxo de caixa e dashboard de KPIs", value: "R$ 67,90" },
    { item: "Bônus: Planilha de prompts de IA", detail: "Para análise de DRE e resumos executivos", value: "" },
];

// Soma dos bônus que também são vendidos separadamente no site
export const BONUS_TOTAL = "R$ 164,90";

export const FAQ = [
    {
        q: "O curso cobre nível avançado?",
        a: "Não, e essa é a proposta. Ele cobre os fundamentos, a estrutura do modelo e as conexões entre os demonstrativos, com profundidade. É a base para depois aprender premissas, projeções e valuation sem travar.",
    },
    {
        q: "Preciso saber contabilidade?",
        a: "Não precisa ser contador. Basta ter uma noção do que são DRE, Balanço e Fluxo de Caixa. A estrutura de cada um é revisada antes de conectá-los.",
    },
    {
        q: "Preciso saber Excel?",
        a: "O básico é suficiente. A planilha é só o meio; o foco é a lógica do modelo.",
    },
    {
        q: "Vou aprender a montar premissas e projeções?",
        a: "O curso te dá a estrutura e a dinâmica das conexões. Com isso entendido, montar premissas, que mudam de negócio para negócio, vira o passo seguinte natural.",
    },
    {
        q: "As aulas são ao vivo?",
        a: "São gravadas. Você assiste quando quiser, no computador ou no celular, e o acesso não expira.",
    },
    {
        q: "O curso recebe novas aulas?",
        a: "Sim. Além do módulo principal, que conecta DRE, Balanço e Fluxo de Caixa, o curso tem módulos complementares que recebem novas aulas com frequência. Tudo o que for adicionado entra no seu acesso.",
    },
    {
        q: "O curso tem certificado?",
        a: "Sim. Ao concluir as aulas, você emite o certificado de conclusão pela Hotmart.",
    },
    {
        q: "Como recebo o acesso?",
        a: "Pela Hotmart, no e-mail usado na compra. Cartão e Pix liberam o acesso logo após a confirmação; boleto, depois da compensação bancária.",
    },
    {
        q: "Quais as formas de pagamento?",
        a: `Cartão de crédito em até ${INSTALLMENT_LABEL}, Pix ou boleto, todos pela Hotmart.`,
    },
    {
        q: "E se eu não gostar?",
        a: "Você tem 7 dias de garantia. Se achar que o curso não é para você, pede o reembolso na própria Hotmart e recebe o valor integral, sem precisar justificar.",
    },
];

// Depoimentos reais de alunos. Só entram aqui com autorização de quem escreveu.
// "image" aceita print de WhatsApp, e-mail ou avaliação da Hotmart salvo em /public/depoimentos/.
// Enquanto a lista estiver vazia, o bloco não aparece no site publicado.
export interface Testimonial {
    name: string;
    role?: string;
    text?: string;
    image?: { src: string; width: number; height: number; alt: string };
}

export const TESTIMONIALS: Testimonial[] = [];
