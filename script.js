document.getElementById('timeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const movieDuration = parseInt(document.getElementById('movieDuration').value);

    if (startTime && endTime && movieDuration) {
        const start = new Date(`1970-01-01T${startTime}Z`);
        const end = new Date(`1970-01-01T${endTime}Z`);
        const duration = movieDuration * 60000; // Convert minutes to milliseconds

        const previewDuration = end - start - duration;
        const movieStart = new Date(start.getTime() + previewDuration);

        const hours = movieStart.getUTCHours();
        const minutes = movieStart.getUTCMinutes();
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

        document.getElementById('result').textContent = `本編開始時間: ${formattedTime}`;
    } else {
        document.getElementById('result').textContent = 'すべてのフィールドを正しく入力してください。';
    }
});
