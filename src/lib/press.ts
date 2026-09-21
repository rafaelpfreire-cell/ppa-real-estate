export type PressItem = {
  outlet: string;
  date: string;
  title: string;
  url: string;
  featured?: boolean;
  images?: string[];
  summary?: string;
};

export function formatPressDate(iso: string): string {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
}

export const pressItems: PressItem[] = [
  {
    outlet: "PANROTAS",
    date: "2026-06-25",
    title:
      "Accor, Atrio e PPA anunciam três novos hotéis ibis com entrega prevista para 2030",
    url: "https://www.panrotas.com.br/hotelaria/mercado/2026/06/accor-atrio-e-ppa-anunciam-tres-novos-hoteis-ibis-com-entrega-prevista-para-2030_229767.html",
    featured: true,
    images: [
      "/assets/web/institucional-parceria-accor-ibis-ppa.jpg",
    ],
    summary:
      "Em junho de 2026, PPA Real Estate, Accor e Atrio anunciaram os projetos ibis Indaiatuba, ibis Suzano e ibis Styles Fortaleza Praia do Futuro. A cobertura da PANROTAS registrou esse movimento de expansão do portfólio hoteleiro da PPA em São Paulo e no Ceará.",
  },
  {
    outlet: "Prefeitura de Suzano",
    date: "2026-07-31",
    title: "Prefeitura autoriza início da obra do hotel Ibis em Suzano",
    url: "https://suzano.sp.gov.br/prefeitura-autoriza-inicio-da-obra-do-hotel-ibis-em-suzano/",
  },
  {
    outlet: "Mercado & Eventos",
    date: "2026-06-30",
    title:
      "Accor anuncia três novos hotéis no Brasil com investimento de R$ 109 milhões e abertura prevista para 2030",
    url: "https://www.mercadoeeventos.com.br/noticias/hotelaria/accor-anuncia-tres-novos-hoteis-no-brasil-com-investimento-de-r-109-milhoes-e-abertura-prevista-para-2030/",
  },
  {
    outlet: "Portal de Indaiatuba",
    date: "2026-06-29",
    title: "Concorrência em alta. Indaiatuba vai receber novo hotel",
    url: "https://www.portaldeindaiatuba.com/coluna/concorrencia-em-alta-indaiatuba-vai-receber-novo-hotel",
  },
  {
    outlet: "Hotelier News",
    date: "2026-06-25",
    title: "Accor e Atrio fazem hat-trick da família ibis",
    url: "https://hoteliernews.com.br/accor-e-atrio-fazem-hat-trick-da-familia-ibis/",
  },
  {
    outlet: "Correio",
    date: "2025-04-10",
    title:
      "Já imaginou ser sócio de um hotel? Conheça a nova tendência imobiliária",
    url: "https://www.correio24horas.com.br/minha-bahia/ja-imaginou-ser-socio-de-um-hotel-conheca-a-nova-tendencia-imobiliaria-0425",
  },
];
