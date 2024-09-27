document.getElementById("timeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ページリロードを防ぐ

    // 上映終了時間と本編の上映時間を取得
    const endTimeInput = document.getElementById("endTime").value;
    const movieDurationInput = document.getElementById("movieDuration").value;

    // 入力チェック
    if (!endTimeInput || !movieDurationInput) {
        document.getElementById("result").textContent = "すべてのフィールドを入力してください。";
        return;
    }

    // 終了時間の計算 (hoursとminutesに分割)
    let [endHours, endMinutes] = endTimeInput.split(":").map(Number);

    // 本編の上映時間を引いて開始時間を計算
    let movieDuration = Number(movieDurationInput);
    let totalEndMinutes = endHours * 60 + endMinutes; // 終了時間を分に変換
    let startMinutes = totalEndMinutes - movieDuration; // 開始時間を分で計算

    // 開始時間を時刻に戻す
    let startHours = Math.floor(startMinutes / 60);
    let startMinutesRemaining = startMinutes % 60;

    // 0埋めでフォーマット
    let formattedStartHours = String(startHours).padStart(2, "0");
    let formattedStartMinutes = String(startMinutesRemaining).padStart(2, "0");

    // 結果を表示
    document.getElementById("result").textContent = `本編の開始時間は ${formattedStartHours}:${formattedStartMinutes} です。`;
});

document.getElementById("endTime").addEventListener("change", function() {
    let timeInput = this.value;
    if (timeInput) {
        let [hours, minutes] = timeInput.split(":").map(Number);

        // 5分単位に丸める
        minutes = Math.round(minutes / 5) * 5;
        if (minutes === 60) {
            hours += 1;
            minutes = 0;
        }

        // 0埋めでフォーマットを整える
        let formattedHours = String(hours).padStart(2, "0");
        let formattedMinutes = String(minutes).padStart(2, "0");

        this.value = `${formattedHours}:${formattedMinutes}`;
    }
});
