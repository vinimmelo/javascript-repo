var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function() {
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  inicializaMarcadores();
  $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
  var frase = $(".frase").text();
  var numPalavras = frase.split(" ").length;

  var tamanhoFrase = $("#tamanho-frase");
  tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
  campo.on("input", function() {
    var conteudo = campo.val();
    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);

    var conteudoSemEspaco = conteudo.replace(/\S + /, "");
    var qtdCaracteres = conteudoSemEspaco.length;
    $("#contador-caracteres").text(qtdCaracteres);
  });
}

function inicializaCronometro() {
  var tempoRestante = $("#tempo-digitacao").text();
  campo.one("focus", function() {
    campo.val("");
    $("#botao-reiniciar").attr("disabled", true);
    var cronometroID = setInterval(
        function() {
          tempoRestante--;
          $("#tempo-digitacao").text(tempoRestante);
          if (tempoRestante < 1) {
            clearInterval(cronometroID);
            $("#botao-reiniciar").attr("disabled", false);
            finalizaJogo();
          }
        },
        1000);
  });
}

function reiniciaJogo() {
  campo.attr("disabled", false);
  campo.val("");
  $("#contador-palavras").text("0");
  $("#contador-caracteres").text("0");
  $("#tempo-digitacao").text(tempoInicial);
  campo.toggleClass("campo-desativado");
  inicializaCronometro();
  campo.removeClass("borda-verde");
  campo.removeClass("borda-vermelha");
}

function inicializaMarcadores() {
  var frase = $(".frase").text();
  campo.on("input", function() {
    var digitado = campo.val();
    var digitouCorreto = frase.startsWith(digitado);

    if (digitouCorreto) {
      campo.addClass("borda-verde");
      campo.removeClass("borda-vermelha");
    } else {
      campo.addClass("borda-vermelha");
      campo.removeClass("borda-verde");
    }
  });
}


function finalizaJogo() {
  campo.attr("disabled", true);
  campo.toggleClass("campo-desativado");
  inserePlacar();
}

