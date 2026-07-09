---
title: "O que é Covariância e como calcular na prática"
date: "29 Jun 2026"
readTime: "12 min"
author: "Tiago Porto"
image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200"
excerpt: "A covariância é uma medida essencial para avaliar o co-movimento entre dois ativos financeiros, permitindo que investidores e gestores de portfólio tomem decisões informadas sobre a diversificação e o gerenciamento de risco. Neste artigo, exploraremos o conceito de covariância, sua fórmula, exemplos práticos e armadilhas comuns."
---

## O que é o Covariância?
A covariância é uma medida estatística que descreve a relação entre dois conjuntos de dados, especificamente a tendência de dois ativos financeiros se moverem juntos ou em direções opostas. Ela é fundamental no gerenciamento de portfólio, pois ajuda a identificar a relação entre os retornos de diferentes ativos, permitindo que os investidores diversifiquem seus portfólios de forma eficaz e minimizem o risco.

A covariância é usada por investidores, gestores de portfólio e analistas financeiros para avaliar a relação entre os retornos de diferentes ativos, como ações, títulos, commodities e outros instrumentos financeiros. Ela é uma medida importante para entender como os diferentes ativos se relacionam entre si e como podem afetar o desempenho de um portfólio como um todo.

## A Fórmula e Componentes do Covariância
A fórmula para calcular a covariância entre dois ativos A e B é:

Cov(A,B) = Σ[(Ra − R̄a)(Rb − R̄b)] ÷ (n − 1)

Onde:

* Cov(A,B) é a covariância entre os ativos A e B
* Ra é o retorno do ativo A no período t
* R̄a é a média dos retornos do ativo A
* Rb é o retorno do ativo B no período t
* R̄b é a média dos retornos do ativo B
* n é o número de períodos de tempo
* Σ denota a soma sobre todos os períodos de tempo

A fórmula da covariância é baseada na ideia de que a relação entre dois ativos pode ser medida pela soma dos produtos das diferenças entre os retornos de cada ativo e suas médias. O resultado é uma medida que indica a tendência dos dois ativos se moverem juntos ou em direções opostas.

## Exemplo Prático de Aplicação
Vamos considerar um exemplo prático de como calcular a covariância entre dois ativos. Suponha que temos dois ativos, A e B, com os seguintes retornos mensais:

| Mês | Retorno do Ativo A | Retorno do Ativo B |
| --- | --- | --- |
| 1 | 0,05 | 0,03 |
| 2 | 0,02 | 0,01 |
| 3 | 0,04 | 0,02 |
| 4 | 0,01 | 0,04 |
| 5 | 0,03 | 0,05 |
| 6 | 0,02 | 0,01 |

Para calcular a covariância, primeiro precisamos calcular as médias dos retornos de cada ativo:

R̄a = (0,05 + 0,02 + 0,04 + 0,01 + 0,03 + 0,02) / 6 = 0,028
R̄b = (0,03 + 0,01 + 0,02 + 0,04 + 0,05 + 0,01) / 6 = 0,026

Em seguida, calculamos as diferenças entre os retornos de cada ativo e suas médias:

| Mês | Diferença do Ativo A | Diferença do Ativo B |
| --- | --- | --- |
| 1 | 0,05 - 0,028 = 0,022 | 0,03 - 0,026 = 0,004 |
| 2 | 0,02 - 0,028 = -0,008 | 0,01 - 0,026 = -0,016 |
| 3 | 0,04 - 0,028 = 0,012 | 0,02 - 0,026 = -0,006 |
| 4 | 0,01 - 0,028 = -0,018 | 0,04 - 0,026 = 0,014 |
| 5 | 0,03 - 0,028 = 0,002 | 0,05 - 0,026 = 0,024 |
| 6 | 0,02 - 0,028 = -0,008 | 0,01 - 0,026 = -0,016 |

Em seguida, calculamos os produtos das diferenças:

| Mês | Produto das Diferenças |
| --- | --- |
| 1 | 0,022 x 0,004 = 0,000088 |
| 2 | -0,008 x -0,016 = 0,000128 |
| 3 | 0,012 x -0,006 = -0,000072 |
| 4 | -0,018 x 0,014 = -0,000252 |
| 5 | 0,002 x 0,024 = 0,000048 |
| 6 | -0,008 x -0,016 = 0,000128 |

Finalmente, calculamos a soma dos produtos das diferenças e dividimos pelo número de períodos de tempo menos um:

Cov(A,B) = (0,000088 + 0,000128 - 0,000072 - 0,000252 + 0,000048 + 0,000128) / (6 - 1) = 0,00016

A covariância entre os ativos A e B é de 0,00016. Isso significa que os dois ativos tendem a se mover juntos, pois a covariância é positiva.

## Armadilhas e Sinais de Alerta (Red Flags)
Uma das principais armadilhas ao trabalhar com covariância é que ela depende da escala. Isso significa que a covariância pode ser afetada pelo tamanho dos retornos dos ativos. Para evitar isso, é comum usar a correlação, que é uma medida normalizada da covariância.

A correlação é calculada dividindo a covariância pela multiplicação dos desvios padrão dos dois ativos:

Correlação(A,B) = Cov(A,B) / (Desvio Padrão(A) x Desvio Padrão(B))

A correlação é uma medida que varia entre -1 e 1, onde:

* 1 indica uma relação perfeita positiva entre os dois ativos
* -1 indica uma relação perfeita negativa entre os dois ativos
* 0 indica que os dois ativos não têm relação entre si

Outra armadilha é que a covariância pode ser afetada por outliers, ou seja, valores extremos que podem distorcer a medida. Para evitar isso, é importante verificar a distribuição dos dados e remover qualquer valor que seja considerado um outlier.

## Termos Relacionados e Conclusão
A covariância é relacionada a outros conceitos importantes em finanças, como:

* Correlação (#14): como mencionado anteriormente, a correlação é uma medida normalizada da covariância.
* Variance (#12): a variância é uma medida da dispersão dos retornos de um ativo.
* Portfolio Variance (#16): a variância do portfólio é uma medida da dispersão dos retornos do portfólio como um todo.
* Beta (#2): o beta é uma medida da sensibilidade do retorno de um ativo em relação ao retorno do mercado.

Em conclusão, a covariância é uma medida importante para avaliar a relação entre os retornos de diferentes ativos. No entanto, é importante ter cuidado com as armadilhas, como a dependência da escala e a sensibilidade a outliers. Ao usar a correlação e outros conceitos relacionados, os investidores e gestores de portfólio podem tomar decisões informadas sobre a diversificação e o gerenciamento de risco. Além disso, é fundamental entender como a covariância se relaciona com outros conceitos importantes em finanças, como a variância, a variância do portfólio e o beta.
