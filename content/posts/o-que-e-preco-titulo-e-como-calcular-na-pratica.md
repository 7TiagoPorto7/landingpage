---
title: "O que é PREÇO (Título) e como calcular na prática"
date: "05 Jul 2026"
readTime: "10 min"
author: "Tiago Porto"
image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200"
excerpt: "O PREÇO (Título) é um conceito fundamental na renda fixa que permite calcular o valor atual de um título com cupom periódico, considerando fatores como a taxa de juros, prazo de vencimento e frequência de pagamento. Este artigo explora em detalhes a fórmula, exemplos práticos e armadilhas comuns associadas ao cálculo do PREÇO (Título)."
---

## O que é o PREÇO (Título)?
O PREÇO (Título), também conhecido como PRICE (Bond), é uma fórmula utilizada para calcular o preço de um título com cupom periódico, como uma obrigação ou um título de dívida. O objetivo é determinar o valor atual do título, considerando fatores como a taxa de juros, prazo de vencimento, frequência de pagamento e o valor de resgate. Este conceito é fundamental para investidores, gestores de carteira e analistas de crédito que precisam avaliar o desempenho e o risco de títulos de renda fixa.

O PREÇO (Título) é calculado por R$100 de face, o que significa que o resultado é expresso em termos de porcentagem do valor nominal do título. Isso facilita a comparação entre diferentes títulos e permite que os investidores tomem decisões informadas sobre suas carteiras de investimentos.

## A Fórmula e Componentes do PREÇO (Título)
A fórmula do PREÇO (Título) é expressa como:
`PRICE(settlement, maturity, rate, yld, redemption, freq)`

Onde:

* `settlement`: data de liquidação, que é a data em que o título é comprado ou vendido.
* `maturity`: data de vencimento, que é a data em que o título é resgatado.
* `rate`: taxa de juros nominal do título.
* `yld`: taxa de juros atual do título.
* `redemption`: valor de resgate do título.
* `freq`: frequência de pagamento do cupom.

A fórmula do PREÇO (Título) considera a taxa de juros atual e a taxa de juros nominal do título, bem como a frequência de pagamento do cupom e o valor de resgate. O resultado é o preço do título, expresso em termos de porcentagem do valor nominal.

## Exemplo Prático de Aplicação
Vamos considerar um exemplo de uma empresa fictícia que emite um título de dívida com as seguintes características:

| Característica | Valor |
| --- | --- |
| Data de liquidação | 01/01/2025 |
| Data de vencimento | 01/01/2030 |
| Taxa de juros nominal | 5% |
| Taxa de juros atual | 4% |
| Valor de resgate | R$100,00 |
| Frequência de pagamento | Semestral |

Utilizando a fórmula do PREÇO (Título), podemos calcular o preço do título da seguinte forma:
`PRICE('01/01/25','01/01/30', 5%, 4%, 100, 2) = 104,49`

Isso significa que o preço do título é de R$104,49 por R$100,00 de face. O investidor pode utilizar esse resultado para decidir se o título é uma boa opção de investimento, considerando o risco e o retorno esperado.

| Ano | Cupom | Amortização | Saldo |
| --- | --- | --- | --- |
| 2025 | R$2,50 | R$0,00 | R$100,00 |
| 2026 | R$2,50 | R$0,00 | R$100,00 |
| 2027 | R$2,50 | R$0,00 | R$100,00 |
| 2028 | R$2,50 | R$0,00 | R$100,00 |
| 2029 | R$2,50 | R$0,00 | R$100,00 |
| 2030 | R$2,50 | R$100,00 | R$0,00 |

A tabela acima ilustra o fluxo de caixa do título, considerando o cupom semestral e o valor de resgate.

## Armadilhas e Sinais de Alerta (Red Flags)
Existem algumas armadilhas comuns que os investidores devem evitar ao calcular o PREÇO (Título):

* `PRICE retorna por R$100 de face`: o resultado da fórmula é expresso em termos de porcentagem do valor nominal do título. É importante ajustar o resultado para o valor de face real do título.
* `Ajustar para face real`: se o título tiver um valor de face diferente de R$100,00, é necessário ajustar o resultado da fórmula para refletir o valor de face real.
* `Basis (day count) afeta resultado`: a fórmula do PREÇO (Título) considera a frequência de pagamento do cupom e a taxa de juros atual. No entanto, a base de cálculo (day count) também pode afetar o resultado. É importante utilizar a base de cálculo correta para evitar erros.

Para evitar essas armadilhas, é importante:

* Verificar o valor de face real do título antes de calcular o PREÇO (Título).
* Ajustar o resultado da fórmula para refletir o valor de face real.
* Utilizar a base de cálculo correta para evitar erros.

## Termos Relacionados e Conclusão
O PREÇO (Título) é um conceito fundamental na renda fixa que está relacionado a outros termos importantes, como:

* `YIELD (#18)`: a taxa de juros atual do título.
* `DURATION (#19)`: a sensibilidade do título à mudanças na taxa de juros.
* `MDURATION (#20)`: a sensibilidade do título à mudanças na taxa de juros, considerando a frequência de pagamento do cupom.
* `Bond Price (RF.#1)`: o preço do título, expresso em termos de porcentagem do valor nominal.

Em resumo, o PREÇO (Título) é uma fórmula importante para calcular o valor atual de um título com cupom periódico. É fundamental entender a fórmula e os componentes que a compõem, bem como as armadilhas comuns que podem afetar o resultado. Além disso, é importante considerar os termos relacionados, como a taxa de juros atual, a sensibilidade do título à mudanças na taxa de juros e o preço do título. Ao entender esses conceitos, os investidores podem tomar decisões informadas sobre suas carteiras de investimentos e gerenciar o risco de forma eficaz.
