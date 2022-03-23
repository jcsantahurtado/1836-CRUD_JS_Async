//Fetch API
const customerList = () =>
    fetch('http://localhost:3000/perfil').then(respuesta => respuesta.json());


const createCustomer = (nombre, email) => {
    return fetch('http://localhost:3000/perfil', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nombre, email, id: uuid.v4()}),
    });
}

const deleteCustomer = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: 'DELETE'
    });
}

export const clientServices = {
    customerList,
    createCustomer,
    deleteCustomer
}