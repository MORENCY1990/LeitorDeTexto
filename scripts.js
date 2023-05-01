let texto = document.querySelector("#texto");
let vozes = document.querySelector("#vozes");
let falar = document.querySelector("#falar");
let vozSelecionada = 0;

window.speechSynthesis.addEventListener('voiceschanged', () => {
    let listaVozes = window.speechSynthesis.getVoices();
    console.log(listaVozes);
    for (let i in listaVozes){
        let opcaoEl = document.createElement
        ('option');
        opcaoEl.setAttribute('value', i);
        opcaoEl.innerText = listaVozes[i].name;
        vozes.appendChild(opcaoEl);
    }
});
falar.addEventListener('click', ()=>{
    if(texto.value !== ''){
        let listaVozes = window.speechSynthesis.getVoices();
        let ut = new SpeechSynthesisUtterance(texto.value);
        ut.voice = listaVozes[vozSelecionada];
        window.speechSynthesis.speak(ut);
    }
});

vozes.addEventListener('change', () => {
    vozSelecionada = parseInt(vozes.value);
});

function updateStatus(){
    if (window.speechSynthesis.speaking){
        vozes.setAttribute('disabled', 'disabled');
        falar.setAttribute('disabled', 'disabled');
    }else{
        vozes.removeAttribute('disabled');
        falar.removeAttribute('disabled');
    }
}

setInterval(updateStatus, 100);

