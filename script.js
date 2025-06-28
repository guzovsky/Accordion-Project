const questionsArray = Array.from(document.querySelectorAll(".question"));
const answersArray = Array.from(document.querySelectorAll(".answer"));

questionsArray.forEach((q, index) => {
    q.addEventListener("click", () => {
        const isCurrentlyVisible = !answersArray[index].classList.contains("hidden");

        answersArray.forEach((a, i) => {

            if (!a.classList.contains("hidden")) {
                a.classList.remove("fade");
                a.classList.add("fade-out");
                questionsArray[i].querySelector(".arrow").classList.remove("rotate");

                setTimeout(() => {
                    a.classList.add("hidden");
                    a.classList.remove("fade-out");
                }, 200);
            }
        });

        if (!isCurrentlyVisible) {
            const answer = answersArray[index];
            answer.classList.remove("hidden");
            answer.classList.add("fade");
            q.querySelector(".arrow").classList.add("rotate");
        }
    });
});
