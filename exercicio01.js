/* Assunto 01 - Nomeação de variáveis
 *
 * Variáveis em JavaScript podem ser de três tipos:
 * 1. Variáveis que podem ter seu valor modificado. São criadas com o comando "let"
 * 2. Variáveis que o valor não muda depois de criadas, também chamadas de 
 *    "constantes". São criadas com o comando "const"
 * 3. Variáveis que podem ter seu valor modificado mas tem escopo global. São 
 *    criadas com o comando "var"
 *
 * Por questões de boas práticas, utilizamos apenas "let" e "const" para criar variáveis.
 * Variáveis criadas com "var" são muitas vezes fonte de bugs, por isso evitaremos.
 *
 * Nomes de variáveis podem conter apenas:
 * 1. letras maiúsculas e minúsculas sem acentuação (também não pode cedilha)
 * 2. números
 * 3. Os símbolos $ e _ (cifrão e sublinhado)
 *
 * Nomes de variáveis também tem as seguintes regras:
 * 1. Não pode começar com um número
 * 2. Nomes compostos não podem ser separados por hífen (sinal de menos)
 * 3. Nomes totalmente em maiúscula são usados apenas em contextos especiais, como para
 *    representar um número como Pi: "const PI = 3.141592" ou "const E = 2.71"
 * 4. Nomes compostos são escritos em "camelCase", exemplo: victorMatheusCavalcanti
 * 5. Nomes de classes devem começar com letra maiúscula
 * 6. Palavras que já são parte da sintaxe do JavaScript não podem ser utilizados como nomes de 
 *    variáveis, eemplo: "let else" <- Errado, else já é uma palavra da sintaxe "if { } else { }"
 * 
 * Agora responda as atividades abaixo
 */

/* Questões de 01 a 12
 * 
 * Corrija os nomes das variáveis abaixo para se tornarem válidos e/ou respeitarem
 * as boas práticas de nomeação para variáveis (e não liguem para o "export" na frente. Mantenham ele):
 */
// Resposta
/* 01 */ export let meuNome = "Felizberto Adalberto"
/* 02 */ export const gatoRajado = "Kiki"
/* 03 */ export let quantidadeDeBolos = 75
/* 04 */ export let meusColegas = ["Fulado", "Ciclano", "Beltrano"]
/* 05 */ export const conducao = "Ônibus"
/* 06 */ export class AlunoDoNave { constructor() {} }
/* 07 */ export let golpeDoGoku = "Kamehameha"
/* 08 */ export const tomEJerry = "Tom e Jerry"
/* 09 */ export const ehSobreIsso = "E tá tudo bem"
/* 10 */ export let meuEndereco = { rua: "Avenida sei lá", numero: 123, bairro: "Rouxinol Goiaba"}
/* 11 */ export class OperacaoExplosiva { constructor () {} }
/* 12 */ export class PersonagemFicticio { constructor() {} }

