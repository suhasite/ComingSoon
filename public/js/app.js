const countdown = document.querySelector(".countdown");

// Set Launch Date.
const launchDate = new Date("9 20, 2020 17:00:00").getTime();

//Update every second.
const intvl = setInterval(() => {
  // Get todays date and time in (ms)
  const now = new Date().getTime();

  // Distance from now to day launch
  const distance = launchDate - now;

  // Time Calculation.
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   Display result
  countdown.innerHTML = `
                        
      <div class="circle">
        <div class="countIn"> 
          <span>${days}</span>
          <div class="line"></div> 
          <p>Days</p>
        </div>
      </div>

      <div class="circle">
        <div class="countIn"> 
          <span>${hours}</span>
          <div class="line"></div> 
          <p>Hrs</p>
        </div>
      </div>

      <div class="circle">
        <div class="countIn"> 
          <span>${mins}</span>
          <div class="line"></div> 
          <p>Mins</p>
        </div>
      </div>
    
      <div class="circle">
        <div class="countIn"> 
          <span>${seconds}</span>
          <div class="line"></div> 
          <p>Secs</p>
        </div>
      </div>
`;

  // If Date Launched Passed
  if (distance < 0) {
    // Style output & Text
    countdown.style.color = "#2a6ebb";
    countdown.innerHTML = "Launched!";
  }
}, 1000);
