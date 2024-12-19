const phrases = [
    "beautiful digital experiences",
    "stunning designs",
    "efficient code",
    "creative solutions",
  ];
  
  let currentPhraseIndex = 0;
  const dynamicTextElement = document.getElementById("dynamic-text");
  
  setInterval(() => {
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    dynamicTextElement.textContent = phrases[currentPhraseIndex];
  }, 3000);
  