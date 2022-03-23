const createNewLine = (name, email) => {
    const newLine = document.createElement('tr');
    const content =
        `<td class="td" data-td>${name}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_cliente.html"
                        class="simple-button simple-button--edit"
                    >Editar</a
                    >
                </li>
                <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button"
                    >
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>`;
    newLine.innerHTML = content;
    return newLine;
}

const table = document.querySelector('[data-table]');




//Abrir http (método, url)

// CRUD     - Métodos HTTP
// Create   - POST
// Read     - GET
// Update   - PUT / PATCH
// Delete   - DELETE


const CustomerList = () => {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open('GET', 'http://localhost:3000/perfil');

        http.send();

        http.onload = () => {
            const response = JSON.parse(http.response);
            if (http.status >= 400) {
                reject(response);
            } else {
                resolve(response);
            }
        }
    });
    return promise;
}

CustomerList()
    .then(data => {
        data.forEach(perfil => {
            const newLine = createNewLine(perfil.nombre, perfil.email);
            table.appendChild(newLine);
        });
    })
    .catch(error => {
        alert(`Ocurrío un error`);
    })
