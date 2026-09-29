# Inventário das páginas de vendas

Estado em 27/09/2026, depois da remoção do fórum e das correções de base. Domínio: https://www.mfnapratica.com.br

## Resumo

| Página | Produto | Tipo | Preço | Checkout Hotmart | Quem linka para ela |
|---|---|---|---|---|---|
| `/` | Vitrine (só mostra Fundamentos) | Home | R$ 197 no card | leva a `/fundamentos` | `/links`, `/downloads`, `/legal` |
| `/fundamentos` | Fundamentos da Modelagem Financeira | Vendas + lead | R$ 197 ou 12x R$ 19,70 | `F106435738T` + UTM/sck | home, ~50 posts do blog |
| `/starter-kit` | Starter Kit Financeiro | Vendas | de R$ 197 por R$ 67,90 | `B104777770W?off=fwpjg9hw` + UTM/sck | **ninguém** |
| `/template-pro` | Template Pro | Vendas | R$ 97 | `N105779312S` + UTM/sck | `/fluxograma`, `/links`, `/downloads`, `/starter-kit` |
| `/prompts4finance` | 100 Prompts Excel + IA | Vendas | R$ 29,90 | `P104814631L?off=8b3uxx2o` + UTM/sck | **ninguém** |
| `/claude-financas` | Guia Claude para Finanças | Lead (grátis) | — | — | **ninguém** |
| `/downloads` | Dicionário de Finanças (xlsx) | Lead (grátis) | — | — | `/links` |
| `/links` | Link na bio | Hub | — | — | só o "voltar" de `/downloads` |
| `/fluxograma` | Fluxograma DRE/BP/DFC | Conteúdo + CTA Template Pro | — | leva a `/template-pro` | **ninguém** |
| `/plataforma` (+ 94 aulas) | Área do aluno | **Pública, sem login** | — | — | ninguém |
| `/legal` | Termos, privacidade, contato | Institucional | — | — | rodapés |

## Pendências que dependem de decisão ou material

1. **Senha do banco exposta no GitHub**: trocar no Railway e depois limpar o histórico do git.
2. **Entrega das iscas**: `/fundamentos` ("mapa de 1 página") e `/claude-financas` (guia) prometem envio por e-mail, mas nada é enviado e os arquivos não existem. Os leads agora são gravados na tabela `leads`.
3. **Meta Pixel**: não é carregado em nenhuma página. Falta o ID do pixel (`NEXT_PUBLIC_META_PIXEL_ID`).
4. **Depoimentos**: os de `/fundamentos` (Itaú BBA, Goldman Sachs, McKinsey…) eram fictícios e foram retirados. Os de `/claude-financas` reaproveitam os mesmos nomes e também precisam sair ou ser trocados por reais.
5. **Preço "de"**: `/fundamentos` mostrava "de R$ 297" e `/starter-kit` mostra "de R$ 197". Se esses preços nunca foram praticados, a âncora é propaganda enganosa (CDC). Na nova `/fundamentos` ela foi removida.
6. **`/plataforma` pública**: as 94 aulas completas estão abertas e indexáveis. Confirmar se é intencional.
7. **Marca**: o logo diz "MFP Academy", o domínio é "mfnapratica" e os rodapés antigos diziam "MFP Education" ou "Pro Finance" (`contato@profinance.com.br`). O código agora usa "Modelagem Financeira na Prática".
8. **Contato**: Gmail pessoal, telefone DDD 31 e endereço "São Paulo, SP" em `/legal`.
9. **Números**: Template Pro diz "18 abas" mas lista 19; Starter Kit diz "44 categorias" e "44 subcategorias".
10. **Páginas órfãs**: Starter Kit, Prompts, Claude Finanças e Fluxograma não recebem link de nenhuma página do site.
11. **Posts parecidos ainda não fundidos**: EBITDA (3 posts), ROIC, SG&A, NOPAT/NOPLAT, Ke, Margem de contribuição, Receita líquida, FCFE, P/L.
