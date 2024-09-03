<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    const addItem = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newItem = Object.fromEntries(formData.entries());
        const newBook = {
        gender: document.getElementById('gender').value,
        name: {
            title: document.getElementById('title').value,
            first: document.getElementById('firstName').value,
            last: document.getElementById('lastName').value
        },
        email: document.getElementById('email').value,
        dob: {
            date: document.getElementById('dobDate').value,
            age: document.getElementById('dobAge').value
        },
        registered: {
            date: document.getElementById('registeredDate').value,
            age: document.getElementById('registeredAge').value
        },
        phone: document.getElementById('phone').value,
        cell: document.getElementById('cell').value,
        id: {
            name: document.getElementById('idName').value,
            value: document.getElementById('idValue').value
        },
        picture: {
            thumbnail: document.getElementById('picture').value
        },
        nat: document.getElementById('nat').value
    };
        // Simulate adding data (no server-side)
        console.log('New item:', newItem);
        dispatch('formSubmit');
    };
</script>

<div class="form-container">
    <h2>Add New Entry</h2>
    <form id="addBookForm">
        <label for="gender">Gender:</label>
        <input type="text" id="gender" required>
        <br>
        <label for="title">Title:</label>
        <input type="text" id="title" required>
        <br>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" required>
        <br>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" required>
        <br>
        <label for="dobDate">Date of Birth:</label>
        <input type="date" id="dobDate" required>
        <br>
        <label for="dobAge">Age:</label>
        <input type="number" id="dobAge" required>
        <br>
        <label for="registeredDate">Registration Date:</label>
        <input type="date" id="registeredDate" required>
        <br>
        <label for="registeredAge">Registration Age:</label>
        <input type="number" id="registeredAge" required>
        <br>
        <label for="phone">Phone:</label>
        <input type="text" id="phone" required>
        <br>
        <label for="cell">Cell:</label>
        <input type="text" id="cell" required>
        <br>
        <label for="idName">ID Name:</label>
        <input type="text" id="idName" required>
        <br>
        <label for="idValue">ID Value:</label>
        <input type="text" id="idValue" required>
        <br>
        <label for="picture">Picture URL:</label>
        <input type="text" id="picture" required>
        <br>
        <label for="nat">Nationality:</label>
        <input type="text" id="nat" required>
        <br><br>
        <button type="submit">Add Entry</button>
    </form>
</div>

<style>
    .form-container {
        margin-top: 20px;
    }

    label {
        display: block;
        margin-bottom: 5px;
    }

    input {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
    }

    button {
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>