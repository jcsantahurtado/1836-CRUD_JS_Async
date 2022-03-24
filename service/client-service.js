//Fetch API
const customerList = () =>
    fetch('http://localhost:3000/perfil').then(respuesta => respuesta.json());


const createCustomer = (nombre, email) => {
    return fetch('http://localhost:3000/perfil', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, email, id: uuid.v4() }),
    });
}

const deleteCustomer = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: 'DELETE'
    });
}

const detailCustomer = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json());
}

const updateCustomer = (nombre, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, email }),
    })
    .then(respuesta => respuesta)
    .catch(err => console.log(err));
}

export const clientServices = {
    customerList,
    createCustomer,
    deleteCustomer,
    detailCustomer,
    updateCustomer
}