/** Assunto 02 - Escopo
 * Quaisquer valores nomeados que forem criados em um programa JavaScript existem em um 
 * determinado "escopo". Escopo é o termo que utulizamos para determinar a região 
 * do código onde um valor existe.
 *
 * Exemplos de valores nomeados são: variáveis, funções, objetos, classes, etc. Qualquer 
 * coisa no código para o qual você dê um nome a sua escolha.
 *
 * Coisas como "if", "else", "switch", "return" não são valores, são palavras da sintaxe
 * do JavaScript, e não coisas nomeadas por você.
 *
 * Escopos são criados utilizando "chaves": { }
 * A chave de abertura "{" inicia o escopo
 * A chave de fechamento "}" encerra o escopo
 * 
 * Se um valor for criada dentro de um escopo, ele existe apenas até a chave 
 * de fechamento do escopo ao qual ele pertence. Exemplo:
 * {
 *   let bode = "Adalberto" <- "bode" é  criado aqui
 * } <- "bode" deixou de existir aqui 
 *
 * Tentar utilizar um valor fora de escopo resulta em erro:
 * {
 *   let bode = "Adalberto" <- "bode" é  criado aqui
 *   console.log(bode) <- Isso funciona normal
 * } <- "bode" deixou de existir aqui 
 * console.log(bode) <- Isso vai dar erro
 *
 * Escopos podem ter escopos internos. Não há um limite para isso.
 * Escopos internos podem acessar qualquer valor dos escopos externos a si.
 * Escopos externos NÃO podem acessar valores de escopos internos.
 * "Sempre podemos olhar de dentro pra fora, mas nunca de fora pra dentro".
 * Exemplo:
 * {
 *   const frutaFavorita = "Abacaxi"
 *   {
 *     const comidaFavorita = "Torta de limão"
 *     {
 *       const bebidaFavorita = "Suco de abacaxi"
 *       console.log(frutaFavorita) <- Funciona
 *       console.log(comidaFavorita) <- Funciona
 *       console.log(bebidaFavorita) <- Funciona
 *     }
 *     console.log(frutaFavorita) <- Funciona
 *     console.log(comidaFavorita) <- Funciona
 *     console.log(bebidaFavorita) <- Erro
 *   }
 *   console.log(frutaFavorita) <- Funciona
 *   console.log(comidaFavorita) <- Erro
 *   console.log(bebidaFavorita) <- Erro
 * }
 * console.log(frutaFavorita) <- Erro (frutaFavorita foi criada dentro de um escopo)
 * console.log(comidaFavorita) <- Erro
 * console.log(bebidaFavorita) <- Erro
 *
 * Outra particularidade é que como um valor existe apenas dentro de seu 
 * próprio escopo, isso significa que em um escopo fora de onde o valor é acessível,
 * você pode utilizar o mesmo nome para um valor totalmente diferente:
 *
 * {
 *   let helicoptero = "AAAAAHHHH"
 * }
 * {
 *   let helicoptero = "toc toc toc toc toc toc toc"
 * }
 */

/* REFERÊNCIA PARA AS QUESTÕES ABAIXO  */

{
    let joao = "João"
    {
        let maria = "Maria"
        {
            let margarida = "Margarida"
        }
        {
            let rosa = "Rosa"
            {
                let violeta = "Violeta"
            }
        }
    }
    {
        let jose = "José"
    }
    {
        let joaquim = "Joaquim"
        {
            let jaime = "Jaime"
            {
                let jaiminho = "Jaiminho"
            }
        }
    }
}
{
    let valentina = "Valentina"
    {
        let magnolia = "Magnolia"
    }
    {
        let magda = "Magda"
    }
    {
        let belarmino = "Belarmino"
        {
            let baltazar = "Baltazar"
        }
        {
            let onofre = "Onofre"
        }
    }
}
{
    let enzo = "Enzo"
}

/** Questões 01 a 06
 * No escopo da referência acima, responda as linhas onde as variáveis abaixo
 * deixam de ser acessíveis
 */
// Respostas
/* 01: margarida */ let escopo01 = 76
/* 02: jaiminho */  let escopo02 = 93
/* 03: valentina */ let escopo03 = 114
/* 04: maria */     let escopo04 = 83
/* 05: jose */      let escopo05 = 86
/* 06: belarmino */ let escopo06 = 113

/** Questões 07 a 12
 * No mesmo escopo da referência acima, indique com true (verdadeiro) ou false (falso)
 * para as situações abaixo:
 */
// Respostas
/* O escopo de margarida consegue acessar o de joao */
let escopo07 = null
/* O escopo de enzo consegue acessar o de valentina */
let escopo08 = null
/* O escopo de valentina consegue acessar o de magda */
let escopo09 = null
/* O escopo de rosa consegue acessar o de violeta */
let escopo10 = null
/* O escopo de jaiminho consegue acessar o de joaquim */
let escopo11 = null
/* O escopo de baltazar consegue acessar o de onofre */
let escopo12 = null

/* NÃO MUDAR NADA DESTA LINHA EM DIANTE */
export {
  escopo01,
  escopo02,
  escopo03,
  escopo04,
  escopo05,
  escopo06,
  escopo07,
  escopo08,
  escopo09,
  escopo10,
  escopo11,
  escopo12,
}
