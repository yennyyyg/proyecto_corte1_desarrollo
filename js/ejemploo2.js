const nameInput = document.getElementById("name-input");
const jobInput = document.getElementById("job-input");
const getButton = document.getElementById("get-button");
const postButton = document.getElementById("post-button");
const putButton = document.getElementById("put-button");
const deleteButton = document.getElementById("delete-button");
const resultDiv = document.getElementById("result");

// Manejar la petición GET
getButton.addEventListener("click", () => {
    axios.get('https://reqres.in/api/users/1')
        .then(response => {
            resultDiv.innerHTML = JSON.stringify(response.data, null, 2);
        })
        .catch(error => {
            resultDiv.innerHTML = "Error: " + error;
        });
});

// Manejar la petición POST
postButton.addEventListener("click", () => {
    const name = nameInput.value;
    const job = jobInput.value;
    axios.post('https://reqres.in/api/users', {
        name,
        job,
    })
    .then(response => {
        resultDiv.innerHTML = JSON.stringify(response.data, null, 2);
    })
    .catch(error => {
        resultDiv.innerHTML = "Error: " + error;
    });
});

// Manejar la petición PUT
putButton.addEventListener("click", () => {
    const name = nameInput.value;
    const job = jobInput.value;
    axios.put('https://reqres.in/api/users/1', {
        name,
        job,
    })
    .then(response => {
        resultDiv.innerHTML = JSON.stringify(response.data, null, 2);
    })
    .catch(error => {
        resultDiv.innerHTML = "Error: " + error;
    });
});

// Manejar la petición DELETE
deleteButton.addEventListener("click", () => {
    axios.delete('https://reqres.in/api/users/1')
    .then(response => {
        resultDiv.innerHTML = "Usuario eliminado exitosamente.";
    })
    .catch(error => {
        resultDiv.innerHTML = "Error: " + error;
    });
});
