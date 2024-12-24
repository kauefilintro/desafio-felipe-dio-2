/* # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" */

//função que faz a expressão Vitórias-Derrotas
function history(wins, loses){
    let result = wins - loses;
    return result;
};

let playerStats = history(83, 14);

//função que pega a PlayerStats e 
function level(playerStats){
    if(playerStats <= 10){
        return "Ferro";
    } else if (playerStats >= 11 && playerStats <= 20){
        return "Bronze";
    } else if (playerStats >= 21 && playerStats <= 50){
        return "Prata";
    }else if (playerStats >= 51 && playerStats <= 80){
        return "Ouro";
    }else if (playerStats >= 81 && playerStats <= 90){
        return "Diamante";
    }else if (playerStats >= 91 && playerStats <= 100){
        return "Lendário";
    }else if (playerStats >= 101){
        return "Imortal";
    };
};

let playerLevel = level(playerStats)

console.log("O Herói tem o saldo de", playerStats, "e está no nível", playerLevel);

//eu tentei passar o Nick do player como um parâmetro também, na mesma função do history, mas não consegui.