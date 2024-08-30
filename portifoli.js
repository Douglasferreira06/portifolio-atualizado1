

document.getElementById('toggle-mode').addEventListener('click', function() {
    // Corrigido: Selecionando o ícone corretamente
    const icon = document.getElementById('icon');
    
    // Corrigido: Alterando a cor do ícone usando JavaScript puro ou jQuery
    if (icon) {
        icon.style.color = "red"; // Usando JavaScript puro
        // Ou, se preferir usar jQuery:
        // $('#icon').css("color", "red");
    }

    const body = document.body;
    const modeIcon = document.getElementById('mode-icon');
    const isDarkMode = body.classList.contains('dark-mode');

    if (isDarkMode) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeIcon.src = './sol.png'; // Alterar para o ícone do sol
        modeIcon.alt = 'Modo claro'; // Alterar descrição
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeIcon.src = './lua-crescente.png'; // Alterar para o ícone da lua
        modeIcon.alt = 'Modo escuro'; // Alterar descrição
    }
});




window.addEventListener("scroll", function() {
    const moverBtn = document.getElementById("mover");
    
    if (window.scrollY > 300) {
        moverBtn.style.display = "block";
    } else {
        moverBtn.style.display = "none";
    }
});

document.getElementById("mover").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});




window.addEventListener("scroll",function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY >0)
})







const myObserver = new IntersectionObserver((entries)=>{
    console.log(entries)
    entries.forEach((entry)=>{
        if(entry.isIntersecting ){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const elementes = document.querySelectorAll('.hidden')
elementes.forEach((element)=>myObserver.observe(element))


// Função para definir um cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Função para obter um cookie
function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let c = cookieArray[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

// Exibe o banner de cookies se o cookie ainda não estiver definido
function checkCookie() {
    const user = getCookie("acceptCookies");
    if (user !== "true") {
        document.getElementById("cookie-banner").style.display = "block";
    }
}

// Define o cookie quando o botão "Aceitar" é clicado
document.getElementById("accept-cookie").onclick = function() {
    setCookie("acceptCookies", "true", 30);
    document.getElementById("cookie-banner").style.display = "none";
}

// Verifica o cookie ao carregar a página
window.onload = function() {
    checkCookie();
};
