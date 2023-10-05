// JavaScript 코드
document.addEventListener("DOMContentLoaded", function () {
    const ratingContainer = document.getElementById("rating");
    const ratingInput = document.getElementById("ratingInput");

    ratingInput.addEventListener("input", function () {
        const ratingValue = parseInt(ratingInput.value, 10); // 입력 값 파싱

        // 입력 값이 유효한 범위 내에 있는지 확인
        if (!isNaN(ratingValue) && ratingValue >= 1 && ratingValue <= 5) {
            updateRating(ratingValue);
        }
    });

    function updateRating(value) {
        ratingContainer.innerHTML = ""; // 이미지 컨테이너 초기화

        // 현재 입력된 평점에 해당하는 이미지 생성
        for (let i = 1; i <= value; i++) {
            const starImage = document.createElement("img");
            starImage.src = "img/menu_popcorn.png"; // 이미지 경로
            starImage.alt = `별 ${i}`;
            ratingContainer.appendChild(starImage);
        }
    }
});
