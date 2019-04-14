var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    var erroAjax = document.querySelector("#erro-ajax");

    xhr.addEventListener("load", function() {
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = this.responseText;
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});