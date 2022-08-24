# **`Diferença entre as variáveis ​​let, var e const em JavaScript`**

O **var** é a forma clássica e antiga de declarar variáveis ​​em JavaScript e pode declarar variáveis ​​locais e globais, enquanto **let** e **const** são novas formas de declarar variáveis e possuem escopo de bloco, veremos mais detalhes a seguir. 

O **let** poderá ser usados ​​para declarar variáveis ​​locais enquanto o **const** geralmente é usado para declarar uma constante, ou seja, variável cujo valor é fixo. Isso não significa que o valor é imutável, apenas que a variável const não pode ser alterada ou retribuída. <hr>

## **`Escopo de variáveis em JavaScript`**  

O **escopo** é a principal diferença entre essas três variáveis. Antes de discutir a diferença, vamos entender o que realmente é o **escopo**.

Sempre que uma variável é declarada, ela recebe um escopo. `O escopo será a "área" onde a variável pode ser acessada ou utilizada`. Em termos simples, o escopo define a disponibilidade da variável no código. Existem dois tipos de escopo em JavaScript - Global e Local. <hr>

### **`1. Escopo de var`**
Uma variável declarada com  var  pode ter escopo global ou local, dependendo de onde ela é declarada. Se uma variável for declarada fora da função, ela terá um escopo global. Isso significa que a variável pode ser acessada em qualquer lugar no documento. O escopo muda quando a variável é declarada usando var dentro de uma função. Agora, a variável só pode ser acessada dentro da função, não fora dela. 

Observe o exemplo a seguir:

```javascript
var digaOi = "Oi..." ;

 function demonstracao () {	
   console .log(digaOi + "dentro da função" );
}

console .log(digaOi + "fora da função" )
 
demonstracao();
```


No código acima, **`"digaOi"`** é declarado fora da função. Portanto, tem um alcance global. Ele é acessado dentro e fora da função. Quando o código é executado, a saída é: <>

```javascript
"Oi...fora da função" 
"Oi...dentro da função"
```


Devido ao seu escopo global, **`"digaOi"`** é acessível dentro e fora da função. Agora observe o código a seguir.

```javascript
function demonstracao () {

  var digaOi = "Oi..." ;
	
  console .log(digaOi + "dentro da função" );
}
 
demonstração();

console .log(digaOi + "fora da função" )
```


Desta vez, **`"digaOi"`** é dentro da função **`"demonstracao"`**. Quando o código é executado, uma instrução do console dentro da função funciona corretamente, mas gera um erro quando uma instrução do console fora da função é encontrada. Irá imprimir o seguinte erro: 

```
Uncaught ReferenceError: "digaOi" is not defined 
```

Isso acontece porque **`"digaOi"`** tem um escopo local.<hr>

### **`2. Escopo de let e const`**
Tanto  let  quanto  const  têm  escopo de bloco. O escopo do bloco é o escopo entre colchetes(objetos). Mas quando declaradas fora dos blocos, se comportam como uma variável var. 

Observe o seguinte código:

```javascript
if ( true )
{	
  let dizerOi = "Oi..." ;
	
  console. log (dizerOi + "dentro do bloco" );
}
```
Quando o código acima é executado, a saída é: 

```javascript
"Oi... dentro do bloco"
```

Agora, observe o código a seguir.

```javascript
if ( true )
{	
  let dizerOi = "Oi..." ;	
}

console. log (dizerOi + "fora do bloco" );
```
O código acima imprimirá um erro quando executado porque **`"digaOi"`** é acessado fora do bloco. Da mesma forma, as variáveis ​​declaradas com a palavra-chave const possuem escopo de bloco. <hr>

### **`2. Atualizando e declarando novamente variáveis`**

Não é necessário que uma variável declarada com um valor não seja atualizada novamente. Na verdade, na prática, é bastante comum reatribuir um novo valor a uma variável já declarada. Da mesma forma, também é possível declarar novamente uma variável. Vamos ver como  **var** ,  **let** e  **const**  se comportam no momento em que são **atualizadas** e **reatribuidas**. 

#### **`2.1` Atualizando e declarando novamente uma variável var**
Tanto a atualização quanto a re-declaração são possíveis com variáveis ​​declaradas com palavras-chave var. Observe o código a seguir. 

```javascript
var digaOi = "Oi..." ;

digaOi = "Oi... Como você está?" ;
```

No código acima, a variável **`"digaOi"`** é declarada com um valor. Na próxima linha, ele é **`reatribuido`** com um novo dado. O código será executado sem nenhum erro. Da mesma forma, o cenário a seguir também é possível. 

```javascript
var digaOi = "Oi..." ;

var digaOi = "Oi... Como você está?" ;
```

No código acima, **`"digaOi"`** é declarado duas vezes usando a palavra-chave var. <hr>

#### **`2.2` Atualizando e declarando novamente uma variável let**
Assim como var, a variável declarada com let também pode ser **`atualizadas`** . Observe o código a seguir.

```javascript
let  dizerOi = "Oi..." ;

dizerOi = "Oi... Como você está?" ;
```
O código acima funcionará, mas com let, `não é possível declarar novamente.`

```javascript
let  dizerOi = "Oi..." ;

let  dizerOi = "Oi... Como você está?" ;
```
O código acima gerará um erro. 

#### **`2.3` Atualizando e declarando novamente uma variável const**
A variável declarada com const não pode ser atualizada. Portanto, o código a seguir não funcionará. 

```javascript
const digaOi = "Oi..." ;

digaOi = "Oi... Como você está?" ;
```
O valor de uma variável declarada com **const** `não pode ser alterado`. Além disso, as variáveis ​​declaradas com const `não podem ser declaradas novamente`. 

```javascript
const digaOi = "Oi..." ;

const digaOi = "Oi... Como você está?" ;
```
O código acima gerará um erro.

Portanto, `a principal  diferença entre var, let e const é o escopo` . Enquanto o var pode ter um escopo global e funcional (dependendo da situação), o let e o const têm escopos de bloco. Outra diferença é atualizar os valores e declarar novamente as variáveis. 

As variáveis ​​declaradas com  `var  podem ser atualizadas e declaradas novamente`, enquanto as variáveis ​​declaradas com `let podem ser atualizadas, mas não podem ser declaradas novamente`. No caso de `const, a variável não pode ser atualizada ou declarada novamente`. 
<hr>