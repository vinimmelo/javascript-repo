var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;

var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");
campo.on("input", function() {
    var conteudo = campo.val();
    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $('#contador-palavras').text(qtdPalavras);

    var conteudoSemEspaco = conteudo.replace(/\S+/, '');
    var qtdCaracteres = conteudoSemEspaco.length;
    $('#contador-caracteres').text(qtdCaracteres);
});