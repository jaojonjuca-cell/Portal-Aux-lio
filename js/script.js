function abrirAba(evt, nomeAba) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(nomeAba).style.display = "block";
    evt.currentTarget.className += " active";
}

function abrirSubAba(evt, nomeSubAba) {
    var i, subtabcontent, subtablinks;
    subtabcontent = document.getElementsByClassName("sub-tab-content");
    for (i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].style.display = "none";
    }
    subtablinks = document.getElementsByClassName("sub-tab-button");
    for (i = 0; i < subtablinks.length; i++) {
        subtablinks[i].className = subtablinks[i].className.replace(" active", "");
    }
    document.getElementById(nomeSubAba).style.display = "block";
    evt.currentTarget.className += " active";
}

function abrirSubAbaSaude(evt, nomeSubAba, classeAtivaCor) {
    var i, subtabcontent, subtablinks;
    subtabcontent = document.getElementsByClassName("sub-tab-content-saude");
    for (i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].style.display = "none";
    }
    subtablinks = document.getElementsByClassName("sub-tab-button-saude");
    for (i = 0; i < subtablinks.length; i++) {
        subtablinks[i].className = subtablinks[i].className.replace(" active-mulher", "");
        subtablinks[i].className = subtablinks[i].className.replace(" active-homem", "");
        subtablinks[i].className = subtablinks[i].className.replace(" active-campanha", "");
    }
    document.getElementById(nomeSubAba).style.display = "block";
    evt.currentTarget.className += " " + classeAtivaCor;
}

function abrirSubAbaMental(evt, nomeSubAba, classeAtivaCor) {
    var i, subtabcontent, subtablinks;
    subtabcontent = document.getElementsByClassName("sub-tab-content-mental");
    for (i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].style.display = "none";
    }
    subtablinks = document.getElementsByClassName("sub-tab-button-mental");
    for (i = 0; i < subtablinks.length; i++) {
        subtablinks[i].className = subtablinks[i].className.replace(" active-acolhimento", "");
        subtablinks[i].className = subtablinks[i].className.replace(" active-caps", "");
        subtablinks[i].className = subtablinks[i].className.replace(" active-bemestar", "");
    }
    document.getElementById(nomeSubAba).style.display = "block";
    evt.currentTarget.className += " " + classeAtivaCor;
}

function abrirSubAbaIdade(evt, nomeSubAba, classeAtivaCor) {
    var i, subtabcontent, subtablinks;
    subtabcontent = document.getElementsByClassName("sub-tab-content-idade");
    for (i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].style.display = "none";
    }
    subtablinks = document.getElementsByClassName("sub-tab-button-idade");
    for (i = 0; i < subtablinks.length; i++) {
        subtablinks[i].className = subtablinks[i].className.replace(" active-crianca", "");
        subtablinks[i].className = subtablinks[i].className.replace(" active-idoso", "");
        subtablinks[i].className = subtablinks[i].className.replace(" active-vacina", "");
    }
    document.getElementById(nomeSubAba).style.display = "block";
    evt.currentTarget.className += " " + classeAtivaCor;
}