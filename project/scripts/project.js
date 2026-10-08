const today = new Date();

document.getElementById("currentyear").textContent = today.getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;


const securityTips = [
    {
        title: "Use Strong Passwords",
        tip: "Use a strong, unique password for each account.",
        level: "important"
    },
    {
        title: "Enable MFA",
        tip: "Enable multi-factor authentication whenever it is available.",
        level: "important"
    },
    {
        title: "Watch for Phishing",
        tip: "Be careful with unexpected messages, links, and attachments.",
        level: "important"
    }
];


const button = document.getElementById("security-button");
button.addEventListener("click", showMessage);


function showMessage() {
    const message = document.getElementById("security-message");

    const importantTips = securityTips.filter(tip => tip.level === "important");

    const randomTip =
        importantTips[Math.floor(Math.random() * importantTips.length)];

    const count = saveTipCount();

    message.innerHTML = `
        <strong>${randomTip.title}</strong>
        <br>
        ${randomTip.tip}
    `;

    if (count >= 5) {
        message.innerHTML += `<br><br>You have viewed ${count} security tips. Keep learning!`;
    }
    else {
        message.innerHTML += `<br><br>Keep exploring these security tips to stay safe online.`;
    }
}


function saveTipCount() {
    let tipCount = Number(localStorage.getItem("tipCount")) || 0;

    tipCount++;

    localStorage.setItem("tipCount", tipCount);

    return tipCount;
}