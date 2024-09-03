<script>
    export let data = [];
</script>

<table>
    <thead>
        <tr>
            <th>Gender</th>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Registration Details</th>
            <th>Phone No.</th>
            <th>Cell No.</th>
            <th>ID</th>
            <th>Picture</th>
            <th>NAT</th>
        </tr>
    </thead>
    <tbody>
        {#each data as element}
            <tr>
                <td>{element.gender}</td>
                <td>{element.name.title} {element.name.first} {element.name.last}</td>
                <td>{element.email}</td>
                <td>Date: {element.dob.date}<br>Age: {element.dob.age}</td>
                <td>Date: {element.registered.date}<br>Age: {element.registered.age}</td>
                <td>{element.phone}</td>
                <td>{element.cell}</td>
                <td>{element.id.name} {element.id.value}</td>
                <td><img src={element.picture.thumbnail} alt="" style="width: 100%" class="img"/></td>
                <td>{element.nat}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    /* Your CSS styles */
    table {
            width: 100%;
            border-collapse: collapse;
        }

        th,
        td {
            padding: 8px 12px;
            border: 1px solid #ddd; /* Fixed border issue */
        }

        th {
            background-color: #f2f2f2;
        }

        table {
        width: 100%;
        border-collapse: collapse;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        overflow: hidden;
    }
    
    /* Table Header */
    table thead {
        background-color: #f5f6f9;
    }
    
    table thead th {
        padding: 15px;
        text-align: left;
        font-size: 14px;
        font-weight: 600;
        color: #8685a6;
        border-bottom: 2px solid #eaeaea;
    }
    
    /* Table Body */
    table tbody {
        background-color: #ffffff;
    }
    
    table tbody tr {
        border-bottom: 1px dotted #8d8daa;  
    }

    table tbody tr:last-child {
        border-bottom: none;  
    }

    table tbody td:nth-child(1) {
        color: #348fbe;
    }

    table tbody tr:hover {
        background-color: #f1f1f1;
    }
    
    table tbody td {
        padding: 15px;
        font-size: 14px;
        color: #656565;
    }

    img {
        border-radius: 50%;
        height: 50px; 
    }
</style>