
    function updateClock() {
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        const secs = String(now.getSeconds()).padStart(2, '0');

        document.getElementById('hrs').textContent = hrs;
        document.getElementById('min').textContent = mins;
        document.getElementById('sec').textContent = secs;
    }

    setInterval(updateClock, 1000); // Update the clock every second
    updateClock(); // Initialize the clock immediately

