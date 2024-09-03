<script>
    import Table from '$lib/Table.svelte';
    import Pagination from '$lib/Pagination.svelte';
    import Form from '$lib/Form.svelte';
    import { onMount } from 'svelte';

    let data = [];
    let currentPage = 1;
    let totalPages = 1;
    let limit = 10;
    let errorMessage = '';

    const fetchData = async (page, limit) => {
        try {
            const response = await fetch("/api/data.json");
            if (!response.ok) throw new Error('Network response was not ok');
            const result = await response.json();
            data = result.results.slice((page - 1) * limit, page * limit);
            totalPages = Math.ceil(result.results.length / limit);
        } catch (error) {
            errorMessage = error.message;
        }
    };

    onMount(() => {
        fetchData(currentPage, limit);
    });

    const handleLimitChange = (newLimit) => {
        limit = newLimit;
        fetchData(1, limit);
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            fetchData(page, limit);
        }
    };
</script>

<div class="container">
    <h1>Data Table</h1>
    <input type="number" bind:value={limit} min="1" on:change={() => handleLimitChange(limit)}>
    <Table {data} />
    <Pagination {currentPage} {totalPages} on:pageChange={handlePageChange} />
    <Form on:formSubmit={() => fetchData(currentPage, limit)} />
    {#if errorMessage}
        <div class="error-message" style="color: red;">{errorMessage}</div>
    {/if}
</div>

<style>
    /* Your CSS styles */
    .container {
        padding: 20px;
    }
    .error-message {
        margin-top: 20px;
    }
</style>