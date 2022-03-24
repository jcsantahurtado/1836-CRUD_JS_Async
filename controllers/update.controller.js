import { clientServices } from "../service/client-service.js";

const form = document.querySelector('[data-form]');

const getInformation = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    if (id == null) {
        window.location.href = '/screens/error.html';
    }

    const nombre = document.querySelector('[data-nombre]');
    const email = document.querySelector('[data-email]');

    clientServices.detailCustomer(id).then((perfil) => {
        nombre.value = perfil.nombre;
        email.value = perfil.email;
    });
}

getInformation();

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;

    clientServices.updateCustomer(nombre, email, id).then(() => {
        window.location.href = '/screens/edicion_concluida.html';
    })
})
