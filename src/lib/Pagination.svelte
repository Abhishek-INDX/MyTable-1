<script>
    export let currentPage;
    export let totalPages;
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            dispatch('pageChange', page);
        }
    };

    const isFirstPage = currentPage <= 1;
    const isLastPage = currentPage >= totalPages;
</script>


<!-- <div class="pagination">
    <button on:click={() => goToPage(1)} disabled={isFirstPage}>&laquo;&laquo;</button>
    <button on:click={() => goToPage(currentPage - 1)} disabled={isFirstPage}>&laquo;</button>
    <span>{currentPage} / {totalPages}</span>
    <button on:click={() => goToPage(currentPage + 1)} disabled={isLastPage}>&raquo;</button>
    <button on:click={() => goToPage(totalPages)} disabled={isLastPage}>&raquo;&raquo;</button>
</div> -->
<div class="pagination-controls">
    <button id="firstPage" onclick="firstPage()">&laquo;&laquo;</button>
    <button id="prevPage" onclick="prevPage()">&laquo;</button>
    <span id="pageDisplay">
        Page <input type="number" id="pageInput" min="1"> 
        of <span id="pageCount">1</span>
    </span>
    <button id="nextPage" onclick="nextPage()">&raquo;</button>
    <button id="lastPage" onclick="lastPage()">&raquo;&raquo;</button>
    <div id="errorMessage"></div>
</div>

<style>
    .pagination-controls {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }

    button {
        background: none;
        border: 1px solid #007bff;
        color: #007bff;
        padding: 5px 10px;
        border-radius: 4px;
        margin: 0 2px;
        cursor: pointer;
    }

    button:hover {
        background-color: #007bff;
        color: #fff;
    }

    button:disabled {
        pointer-events: none;
        opacity: 0.5;
    }

    span {
        margin: 0 10px;
    }
</style>