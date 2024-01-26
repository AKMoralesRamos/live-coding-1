// Escribe tu código aquí.
//Ana Karen Morales Ramos
//Mi compañera me dio calificación de 4 en base a la rúbrica de evaluación.

function findStrings(string, array) {
return array.filter(word => word.length > string.length)
}

function showScreen(resultArray) {
    const ulElement = document.getElementById("lista");
    resultArray.forEach(word => {
        const liElement = document.createElement("li");
        liElement.textContent = word;
        ulElement.appendChild(liElement);
    });

    document.body.appendChild(ulElement);
}

const array = ["perro", "gato", "hormiga", "hipopotamo", "araña", "rinoceronte"];
const resultArray = findStrings("iguana", array);
showScreen(resultArray);
