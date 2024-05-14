document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('textarea');
    const encryptButton = document.querySelector('#encrypt');
    const decryptButton = document.querySelector('#decrypt');
    const guideText = document.querySelector('#guide-text')
    const outputMessage = document.querySelector('#output-text');
    const copyButton = document.querySelector('#copy-button');
    const deleteButton = document.querySelector('#delete-button');
    const defaulOutputText = "Ningún mensaje fue encontrado";
    const image = document.querySelector('.output-content-img');
    const outputContainer = document.querySelector('.output-content-text');
    const outputButtonsContainer = document.querySelector('.output-buttons');




    encryptButton.addEventListener('click', function () {
        const text = textarea.value;
        if (text.trim().length == 0) {
            alert("Debes ingresar un texto para encriptar")
        }
        else {
            const encryptedText = encrypt(text);
            outputMessage.textContent = encryptedText;
            guideText.style.display = "none";
            image.style.display = "none";
            outputContainer.style.width = '90%';
            outputButtonsContainer.style.display = 'flex';
        }



    });

    decryptButton.addEventListener('click', function () {
        const text = textarea.value; // Convertir todo el texto a minúsculas
        if (text.trim().length == 0) {
            alert("No podemos desencriptar un texto vacio :)")
        }
        else {
            const decryptedText = decrypt(text);
            outputMessage.textContent = decryptedText;
        }

    });

    deleteButton.addEventListener('click', function () {
        image.style.display = "block";
        outputMessage.textContent = defaulOutputText;
        guideText.style.display = "block"


    });

    copyButton.addEventListener('click', function () {
        texto = outputMessage.textContent;
        if (texto == defaulOutputText) {
            alert("Debes encriptar un texto para copiarlo")
        }
        else {
            navigator.clipboard.writeText(texto);
            alert("Texto copiado")
        }


    })

    textarea.addEventListener('input', (event) => {
        const inputText = event.target.value;
        const formattedText = inputText.replace(/[áàâãäå]/gi, 'a')
            .replace(/[éèêë]/gi, 'e')
            .replace(/[íìîï]/gi, 'i')
            .replace(/[óòôõö]/gi, 'o')
            .replace(/[úùûü]/gi, 'u')
            .replace(/[ñ]/gi, 'n')
            .toLowerCase();
        event.target.value = formattedText;
    })


    function encrypt(text) {

        const encryptedText = text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        return encryptedText;
    }

    function decrypt(text) {
        // Aplicar las reglas de desencriptación
        const decryptedText = text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return decryptedText;
    }
});
