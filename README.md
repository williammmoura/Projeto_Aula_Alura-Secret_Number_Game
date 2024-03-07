<div align="center">
  <h1>Secret Number Game</h1>
</div>

Obs.:Este projeto foi feito durante a aula do curso de lógica de programação da Alura.

Este projeto consiste em um jogo simples em JavaScript no qual o jogador precisa adivinhar um número secreto entre 1 e 100. O jogo fornece feedback ao jogador após cada tentativa até que ele adivinhe corretamente o número secreto.

## Instruções

1. **Para Começar**: Abra o arquivo `index.html` em seu navegador da web para iniciar o jogo.

2. **Jogabilidade**:
   - Ao iniciar, você verá instruções para escolher um número entre 1 e 100.
   - Insira sua suposição no campo de entrada e envie.
   - O jogo fornecerá feedback sobre se o número secreto é maior ou menor do que sua suposição.
   - Continue adivinhando até adivinhar corretamente o número secreto.
  
<div align="center">
    <img width="500" height="260" src="https://github.com/williammmoura/Projeto_Aula_Alura-Secret_Number_Game/assets/86812365/0ee20726-61cd-4c7c-8f1a-56e7d48ecc6b">
</div>

3. **Ganhar o Jogo**:
   - Uma vez que você adivinhe corretamente o número secreto, o jogo irá parabenizá-lo e exibir o número de tentativas feitas.
   - O botão "Novo jogo" será habilitado para começar um novo jogo.

4. **Novo Jogo**:
   - Clique no botão "Novo jogo" para iniciar um novo jogo.
   - O número secreto mudará e as tentativas serão redefinidas para 1.

## Detalhes de Implementação

- **Funções JavaScript**:
  - `displayTextOnScreen(tag, text)`: Exibe texto na tela e utiliza funcionalidade de texto para voz para feedback auditivo.
  - `displayInitialMessage()`: Exibe a mensagem inicial quando o jogo começa.
  - `checkChoose()`: Verifica a suposição do usuário em relação ao número secreto e fornece feedback.
  - `randomNumber()`: Gera um número secreto aleatório entre 1 e 100, garantindo que ele não esteja na lista de números sorteados.
  - `clearUserInput()`: Limpa o campo de entrada após cada suposição.
  - `newGame()`: Inicia um novo jogo gerando um novo número secreto, redefinindo as tentativas e habilitando o botão "Novo jogo".

- **Variáveis**:
  - `listOfDrawnNumbers`: Um array para armazenar os números sorteados para evitar repetição.
  - `limitNumber`: O limite superior para o número secreto (atualmente definido como 100).
  - `secretNumber`: O número secreto gerado aleatoriamente.
  - `attempts`: Controla o número de tentativas feitas pelo jogador.

## Notas Adicionais

- Este jogo utiliza HTML, CSS e JavaScript básicos.
- A funcionalidade de texto para voz é incorporada para acessibilidade.
- A lógica do jogo garante que o número secreto não seja repetido.
- Sinta-se à vontade para modificar o código e personalizar o jogo conforme necessário.

Divirta-se jogando o Jogo do Número Secreto! Se tiver alguma dúvida ou comentário, entre em contato.
