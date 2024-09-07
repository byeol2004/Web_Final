// Toggle the sidebar
const sidebarToggleBtn = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');
const container = document.querySelector('.container');

sidebarToggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    container.classList.toggle('shifted');
});
