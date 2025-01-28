const quizData = [

    {
      question: "What does HTTP stand for in web development?",
      options: ["HyperText Transfer Protocol", "HyperText Transmission Program", "High Transfer Text Protocol", "HyperLink Text Processing"],
      correct: 0,
    },
  
    {
      question: "Which of the following is not a programming language?",
      options: ["Python", "Java", "HTML", "Ruby"],
      correct: 2,
    },
  
    {
      question: "Which of the following is used to add interactivity to a webpage?",
      options: ["HTML", "CSS", "JavaScript", "SQL"],
      correct: 2,
    },
  
  ];
  
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const scoreEl = document.getElementById("score");
  const restartBtn = document.getElementById("restart");
  
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion()
  {
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    optionsEl.innerHTML = "";
    currentQuiz.options.forEach((option,index) =>
    {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(index);
      optionsEl.appendChild(button);
    });
  }
  
  
  function checkAnswer(selectedOption)
  {
    if(selectedOption === quizData[currentQuestion].correct) 
    {
      score++;
    }
    currentQuestion++;
  
    if(currentQuestion < quizData.length)
    {
      loadQuestion();
    } 
    else
    {
      showScore();
    }
  }
  
  
  function showScore()
  {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    scoreEl.style.display = "block";
    restartBtn.style.display = "block";
    scoreEl.textContent = `You scored ${score} out of ${quizData.length}!`;
  }
  
  
  function restartQuiz()
  {
    currentQuestion = 0;
    score = 0;
    questionEl.style.display = "block";
    optionsEl.style.display = "block";
    scoreEl.style.display = "none";
    restartBtn.style.display = "none";
    loadQuestion();
  }
  
  
  restartBtn.addEventListener("click", restartQuiz);
  
  
  loadQuestion();
  
  
  
  
  
  
  
  const images = document.querySelector('.carousel-image');
  const indicators = document.querySelectorAll('.carousel-indicators span');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  
  
  let currentIndex = 0;
  
  
  function updateCarousel()
  {
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((indicator, index) => 
    {
      if(index === currentIndex) 
      {
        indicator.classList.add('active');
      }
      else
      {
        indicator.classList.remove('active');
      }
    });
  }
  
  
  function showPrevImage()
  {
    if(currentIndex > 0)
    {
      currentIndex--;
    }
    else
    {
      currentIndex = indicators.length - 1;
    }
    updateCarousel();
  }
  
  
  function showNextImage()
  {
    if(currentIndex < indicators.length - 1)
    {
      currentIndex++;
    }
    else
    {
      currentIndex = 0;
    }
    updateCarousel();
  }
  
  
  prevButton.addEventListener('click', showPrevImage);
  nextButton.addEventListener('click', showNextImage);
  
  
  indicators.forEach((indicator) =>
  {
    indicator.addEventListener('click', () =>
    {
      currentIndex = Number(indicator.getAttribute('data-index'));
      updateCarousel();
    });
  });
  
   
  
  
  
  
  
  document.getElementById('getJokeBtn').addEventListener('click', getJoke);
  
  function getJoke()
  {
    const jokeDisplay = document.getElementById('joke-display');
    jokeDisplay.textContent = 'loading...';
  
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data =>{
      const setup = data.setup;
      const punchline = data.punchline;
      jokeDisplay.innerHTML = `<strong>${setup}</strong><br>${punchline}`;
    })
  
    .catch(error =>
    {
      jokeDisplay.textContent = 'Oops, something went wrong!';
    });
  
  }