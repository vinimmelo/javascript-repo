var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {

  var paciente = pacientes[i]
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");
  var alturaEhValida = validaAltura(altura);
  var pesoEhValido = validaPeso(peso);

  if (!pesoEhValido) {
    tdPeso.textContent = "Peso inválido!";
    pesoEhValido = false;
    paciente.classList.add('paciente-invalido');
  }

  if (!alturaEhValida) {
    tdAltura.textContent = "Altura inválida!";
    alturaEhValida = false;
    paciente.classList.add('paciente-invalido');
  }

  if (alturaEhValida && pesoEhValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  } else {
    tdImc.textContent = "Altura ou peso inválidos!";
  }
}

function calculaImc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso) {
  if (peso > 0 && peso <= 1000) {
    return true
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura > 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}

function validaPaciente(paciente) {
  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("O nome não pode estar em branco.");
  }

  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode estar em branco.");
  }

  if (paciente.peso.length == 0) {
    erros.push("O peso não pode estar em branco.");
  }

  if (paciente.altura.length == 0) {
    erros.push("A altura não pode estar em branco.");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválido!");
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("Altura é inválida!");
  }

  return erros;
}
