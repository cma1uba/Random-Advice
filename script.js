const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById('advice-text');
const adviceBtn = document.getElementById('advice-btn');

async function getAdvice() {
    adviceText.textContent = "Loading...";
    try {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        
        adviceId.textContent = `ADVICE  #${data.slip.id}`;
        adviceText.textContent = `"${data.slip.advice}"`;
    } catch (error) {
        adviceText.textContent = "Failed to fetch advice. Try again!";
    }
}

adviceBtn.addEventListener('click', getAdvice);

getAdvice();