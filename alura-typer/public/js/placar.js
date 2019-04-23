
function inserePlacar() {
  var corpoTabela = $(".placar").find("tbody");
  var usuario = "Vinícius Melo";
  var numPalavras = $("#contador-palavras").text();

  var linha = novaLinha(usuario, numPalavras);
  linha.find(".botao-remover").click(removeLinha);

  corpoTabela.append(linha);
}


function novaLinha(usuario, numPalavras) {
  var linha = $("<tr>");
  var colunaUsuario = $("<td>").text(usuario);
  var colunaPalavras = $("<td>").text(numPalavras);
  var colunaRemover = $("<td>");

  var link = $('<a>').attr("href", "#").addClass("botao-remover");
  var icone =
      $("<i>").addClass("small").addClass("material-icons").text("delete");

  link.append(icone);

  colunaRemover.append(link);

  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaRemover);

  return linha;
}


function removeLinha(event) {
  event.preventDefault();
  $(this).parent().parent().remove();
}
