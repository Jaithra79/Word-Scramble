let words = [
   
    {
      word: "fatalist",
      hint: "The person who believes all events are predetermined"
    },
    {
      word: "meeting",
      hint: "Event in which people come together"
    },
    {
      word: "aesthetic",
      hint: "Having to do with artistic beauty"
    },
    {
      word: "exchange",
      hint: "The act of trading"
    },
    {
      word: "piezoelectric effect",
      hint: "The working of quartz crystal in the watch is based on "
    },
    {
      word: "garden",
      hint: "Space for planting flower and plant"
    },
    {
      word: "kerala",
      hint: "sabari mala temple is located in"
    },
    {
      word: "feather",
      hint: "Hair like outer covering of bird"
    },
    {
      word: "comfort",
      hint: "A pleasant feeling of relaxation"
    },
    {
      word: "tongue",
      hint: "The muscular organ of mouth"
    },
    {
      word: "expansion",
      hint: "The process of increase or grow"
    },
    {
      word: "pathalogy",
      hint: "The science of causes and effects of diseases"
    },
    {
      word: "group",
      hint: "A number of objects or persons"
    },
    {
      word: "sulphonates",
      hint: "Detergents used for cleaning clothes and utensils contain"
    },
    {
      word: "phonetics",
      hint: "science of speech sounds"
    },
    {
      word: "field",
      hint: "Area of land for farming activities"
    },
    {
      word: "mendel",
      hint: "Law of heredity were put forward by"
    },
    {
      word: "seismology",
      hint: "The study of earthquakes"
    },
    {
      word: "needle",
      hint: "A thin and sharp metal pin"
    },
    {
      word: "expert",
      hint: "Person with extensive knowledge"
    },
    {
      word: "thermal energy",
      hint: "Energy that is produced commercially from coal is called"
    },
    {
      word: "second",
      hint: "One-sixtieth of a minute"
    },
    {
      word: "iodine",
      hint: "Goitre is caused by the deficiency of"
    }
  ];
  
  const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    timeText = document.querySelector(".time b"),
    inputField = document.querySelector("input"),
    refreshBtn = document.querySelector(".refresh-wrd"),
    checkBtn = document.querySelector(".check-wrd");
  
  let correctWord, timer;
  
  
  const initTimer = (maxTime) => {
    clearInterval(timer);
    timer = setInterval(() => {
      if (maxTime > 0) {
        maxTime--;
        return (timeText.innerText = maxTime);
      }
      alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
      initGame();
    }, 1000);
  };
  
 
  const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
  };
  initGame();
  
 
  const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if (!userWord) return alert("Please enter the word to check!");
    if (userWord !== correctWord)
      return alert(`Oops! ${userWord} is not a correct word`);
    alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
    initGame();
  };
  
 
  refreshBtn.addEventListener("click", initGame);
  checkBtn.addEventListener("click", checkWord);