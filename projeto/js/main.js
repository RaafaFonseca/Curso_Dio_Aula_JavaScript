function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

/*function redirecionar(){
    window.open("https://github.com/RaafaFonseca/");
    //windows.location.href = "https://github.com/RaafaFonseca/";
}*/

function trocar(elemento){
    elemento.innerHTML = "<b>Obrigado por passar o mouse<b>";
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse<b>";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "<b>Passe o mouse aqui<b>";
    //document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui<b>";
    //alert("trocar texto");
}

function load() {
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*function soma(n1, n2) {
    return n1 + n2;
}

alert(soma(5, 10));*/

/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));*/

/*function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));*/

/*var nome = "Rafael Fonseca";
var idade = 37;
var idade2 = 30;
var qlq = "37";
var qlq2 = "30";
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
alert(qlq + qlq2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.toUpperCase(frase.replace("Japão", "Brasil")));
alert(frase.replace("Japão", "Brasil")); */

/*var lista = ["maça", "pêra", "laranja"];
lista.push ("uva", "mamão");
lista.pop();
console.log (lista);
console.log (lista.length);
console.log (lista[0]);
console.log (lista.toString()[0]);
console.log (lista.toString());
console.log (lista.reverse());
console.log (lista.join (" - "));*/

/*var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "pêra", cor: "amarela"}]
console.log (frutas);
alert(frutas[0].nome);*/

/*var idade = prompt("Qual á a sua idade");
var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}*/

/*var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}*/

/*var count;
for (count = 0; count <= 5; count++){
    console.log(count);
}*/

/*var data = new Date();
alert (data);
alert ("mês " + (data.getMonth() + 1));
alert ("dia " + data.getDay());
alert (data.getHours() + " horas");
alert (data.getMinutes() + " minutos");*/
