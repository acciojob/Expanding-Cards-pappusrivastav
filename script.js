//your JS code here. If required.
function expandCard(panelId) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        if (panel.id === panelId) {
            panel.classList.toggle('active');
            panel.classList.toggle('expanding');
        } else {
            panel.classList.remove('active');
            panel.classList.remove('expanding');
        }
    });
}
