document.getElementById("meuformulario").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);

    if (campoB > campoA) {
        document.getElementById("mensagem").innerHTML = "<p class='mensagem'>Formulário válido! Número B é maior que número A.</p>";
    } else {
        document.getElementById("mensagem").innerHTML = "<p class='erro-mensagem'>Formulário inválido! Número B deve ser maior que número A.</p>";
    }
});