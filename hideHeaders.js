document.addEventListener("DOMContentLoaded", function() {
    const rowHeaders = document.querySelectorAll("th.row-headers-background");
    const columnHeaders = document.querySelectorAll("th.column-headers-background");

    rowHeaders.forEach(function(header) {
        header.style.display = "none";
    });

    columnHeaders.forEach(function(header) {
        header.style.display = "none";
    });
});
