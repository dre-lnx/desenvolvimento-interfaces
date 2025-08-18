Aqui está um resumo do conteúdo do PDF, formatado para um arquivo README.md.

### Atividades Práticas - Componentes e Props

Este documento aborda os conceitos de Componentes e Props no React, orientando sobre a criação de um projeto e o desenvolvimento de componentes.

#### 1. Criando o projeto

[cite_start]O projeto, chamado `my-components`, é criado usando o gerenciador de pacotes do Node.js, o `npm`, e a ferramenta `Vite` com o template para React[cite: 310, 311, 314, 315, 324].

* [cite_start]**Comando de criação**: `npm create vite@latest my-components --template react`[cite: 311].
* [cite_start]**Vite**: um gerador de projetos que configura o ambiente de desenvolvimento, enquanto o `--template react` configura o projeto para o React, incluindo as dependências necessárias como `react` e `react-dom`[cite: 316, 324, 325].
* [cite_start]**Instalação de dependências**: Após a criação, é necessário navegar até o diretório do projeto (`cd my-components`) e instalar as dependências com `npm install`[cite: 331, 333].
* [cite_start]**Execução**: O comando `npm run dev` inicializa um servidor local de desenvolvimento, que executa o projeto e o abre no navegador em `http://localhost:5173/`[cite: 341, 343].

#### 2. Desenvolvendo Componentes em React

[cite_start]É explicado como criar e utilizar componentes em React, como o `PrimeiroComponente.jsx`[cite: 345, 346, 370].

* [cite_start]Um componente funcional é definido por uma função JavaScript que retorna elementos JSX[cite: 375, 376].
* [cite_start]Para que um componente seja renderizado, ele precisa ser importado e utilizado em outro arquivo, como o `main.jsx`[cite: 382, 383, 387].
* [cite_start]**Funções Anônimas e Arrow Functions**: O documento mostra como reescrever componentes usando funções anônimas ou a sintaxe mais curta das *arrow functions* (funções de seta)[cite: 441, 461, 462, 463].

#### 3. Trabalhando com Props

[cite_start]Props são as entradas dos componentes React, permitindo a passagem de dados de um componente pai para um filho[cite: 465].

* [cite_start]**Somente leitura**: Props são somente leitura e não devem ser modificados diretamente[cite: 466].
* [cite_start]**Passando props**: O documento demonstra como passar valores para um componente, como o prop `valor` com o texto "Bom dia"[cite: 491, 495]. [cite_start]Também é mostrado como passar o resultado de uma função JavaScript, como `Math.random()`, usando chaves `{}` no JSX[cite: 516, 525].
* [cite_start]`props.children`: É uma propriedade especial que permite passar elementos ou componentes como filhos de outro componente, criando componentes "contêiner"[cite: 540, 541, 542].

#### 4. Múltiplos Componentes em um arquivo

[cite_start]Embora a prática comum seja um arquivo por componente, é possível definir e exportar múltiplos componentes de um único arquivo[cite: 568, 569, 574].

* [cite_start]**Exportação nomeada**: Ao contrário da exportação padrão (`export default`), a exportação nomeada permite exportar vários componentes, que devem ser importados usando chaves `{}`[cite: 574, 575, 577].

#### 5. Retornando Múltiplos Elementos

Componentes React devem retornar um único elemento pai. [cite_start]Retornar múltiplos elementos adjacentes resulta em erro[cite: 590, 591, 592].

* **Soluções**:
    * [cite_start]Encapsular os elementos adjacentes em um elemento pai, como uma `<div>`[cite: 591, 592].
    * [cite_start]Utilizar um **fragmento JSX** (`<>...</>`), que age como uma "tag fantasma" e não é renderizado no HTML final, evitando a poluição do código[cite: 600, 601, 603].