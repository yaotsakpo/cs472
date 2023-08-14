document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  let circleInterval;

  function createCircle(x, y) {
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    container.appendChild(circle);

    circle.addEventListener("click", () => {
      container.removeChild(circle);
    });

    circleInterval = setInterval(() => {
      const currentSize = parseInt(circle.style.width, 10);
      circle.style.width = currentSize + 10 + "px";
      circle.style.height = currentSize + 10 + "px";
    }, 250);
  }

  function startCircles(numCircles, width, growthAmount, growRate) {
    for (let i = 0; i < numCircles; i++) {
      const x = Math.random() * (window.innerWidth - width);
      const y = Math.random() * (window.innerHeight - width);
      createCircle(x, y);
    }
  }

  const startButton = document.createElement("button");
  startButton.textContent = "Start";
  startButton.addEventListener("click", () => {
    const numCircles = parseInt(document.getElementById("numCircles").value);
    const width = parseInt(document.getElementById("width").value);
    const growthAmount = parseInt(
      document.getElementById("growthAmount").value
    );
    const growRate = parseInt(document.getElementById("growRate").value);
    startCircles(numCircles, width, growthAmount, growRate);
  });

  const numCirclesInput = document.createElement("input");
  numCirclesInput.type = "number";
  numCirclesInput.id = "numCircles";
  numCirclesInput.placeholder = "Number of Circles";

  const widthInput = document.createElement("input");
  widthInput.type = "number";
  widthInput.id = "width";
  widthInput.placeholder = "Initial Width";

  const growthAmountInput = document.createElement("input");
  growthAmountInput.type = "number";
  growthAmountInput.id = "growthAmount";
  growthAmountInput.placeholder = "Growth Amount";

  const growRateInput = document.createElement("input");
  growRateInput.type = "number";
  growRateInput.id = "growRate";
  growRateInput.placeholder = "Grow Rate";

  document.body.appendChild(numCirclesInput);
  document.body.appendChild(widthInput);
  document.body.appendChild(growthAmountInput);
  document.body.appendChild(growRateInput);
  document.body.appendChild(startButton);
});
