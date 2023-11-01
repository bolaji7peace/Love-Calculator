document.getElementById("calculate").addEventListener("click",
 function() {
    const yourName = document.getElementById("yourName").value;
    const partnerName = document.getElementById("partnerName").value;
    
    if (yourName && partnerName) {
      const lovePercentage = Math.floor(Math.random() * 101);
      const resultText = `${yourName} and ${partnerName}'s love is ${lovePercentage}%! 💖`;
      document.getElementById("resultText").textContent = resultText;
    } else {
      document.getElementById("resultText").textContent = " 😎 Please enter both names.";
    }
  });
  