import { clientServices } from "../service/client-service.js";

const createNewLine = (name, email, id) => {
    const newLine = document.createElement('tr');
    const content =
        `<td class="td" data-td>${name}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_cliente.html?id=${id}"
                        class="simple-button simple-button--edit"
                    >Editar</a
                    >
                </li>
                <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button" id="${id}"
                    >
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>`;
    newLine.innerHTML = content;
    const btn = newLine.querySelector('button');
    btn.addEventListener('click', () => {
        const id = btn.id;
        clientServices
        .deleteCustomer(id)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            alert(`Ocurrió un error, ${error}`)
        })
    })
    return newLine;
}

const table = document.querySelector('[data-table]');

clientServices.customerList()
    .then((data) => {
        data.forEach(({ nombre, email, id }) => {
            const newLine = createNewLine(nombre, email, id);
            table.appendChild(newLine);
        });
    })
    .catch((error) => {
        alert(`Ocurrío un error, ${error}`);
    })
