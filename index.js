
const menos = document.getElementById('menos');
const zerar = document.getElementById('zerar');
const mais = document.getElementById('mais');
const exibir = document.getElementById('exibir');
let contador = 0;

menos.onclick = function(){
    contador--;
    exibir.textContent = contador;
}
zerar.onclick = function(){
    contador = 0;
    exibir.textContent = contador;
}
mais.onclick = function(){
    contador++;
    exibir.textContent = contador;
}

