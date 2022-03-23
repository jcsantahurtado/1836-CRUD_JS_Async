import { clientServices } from "../service/client-service.js";


const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    clientServices
        .createCustomer(nombre, email)
        .then(() => {
            window.location.href = '/screens/registro_completado.html';
        })
        .catch((error) => {
            console.log(error);
        })
});