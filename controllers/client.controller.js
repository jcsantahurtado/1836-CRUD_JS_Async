import { clientServices } from "../service/client-service.js";

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

clientServices.CustomerList()
    .then(data => {
        data.forEach(perfil => {
            const newLine = createNewLine(perfil.nombre, perfil.email);
            table.appendChild(newLine);
        });
    })
    .catch(error => {
        alert(`Ocurrío un error`);
    })
