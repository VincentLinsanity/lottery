const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1920;
canvas.height = 1300;

const getNumbersFromQuery = () => {
  const query = window.location.search.substring(1);
  if (query === "") return "";
  const numbers = query.split(",");
  return numbers;
};

const createCard = (x, y, image) => {
  const background = new Image();
  background.src = image;

  background.onload = function() {
    ctx.drawImage(background, x, y);
    let numbers = getNumbersFromQuery();
    console.log(numbers)
    if (numbers === "") {
      numbers = createNumbers(49);
    }
    for (let i = 0; i < numbers.length; i++) {
      const ball = createBall(
        25,
        x + 50 + i * 65,
        y + 320,
        "#00F",
        "20px Arial",
        numbers[i]
      );
      ball.draw();
    }
  };
};

const main = () => {
  createCard(0, 0, "https://i.imgur.com/sFx1crQ.png");
  createCard(420, 0, "https://i.imgur.com/sFx1crQ.png");
  createCard(420 * 2, 0, "https://i.imgur.com/sFx1crQ.png");
  createCard(420 * 3, 0, "https://i.imgur.com/sFx1crQ.png");
  createCard(0, 401, "https://i.imgur.com/sFx1crQ.png");
  createCard(420, 401, "https://i.imgur.com/sFx1crQ.png");
  createCard(420 * 2, 401, "https://i.imgur.com/sFx1crQ.png");
  createCard(420 * 3, 401, "https://i.imgur.com/sFx1crQ.png");
  createCard(0, 401 * 2, "https://i.imgur.com/sFx1crQ.png");
  createCard(420, 401 * 2, "https://i.imgur.com/sFx1crQ.png");
  createCard(420 * 2, 401 * 2, "https://i.imgur.com/sFx1crQ.png");
  createCard(420 * 3, 401 * 2, "https://i.imgur.com/sFx1crQ.png");
};

main();

const createNumbers = limit => {
  const range = [];
  for (let i = 0; i < limit; i++) {
    range.push(i);
  }
  const numbers = [];
  rangeLength = range.length;
  ballsSize = 6;
  index = 0;

  while (ballsSize--) {
    rangeLength--;
    index = Math.floor(Math.random() * (rangeLength + 1));
    numbers.push(range[index]);
    range.splice(index, 1);
  }
  return numbers;
};

const createBall = (radius, x, y, color, font, number) => {
  return {
    radius,
    x,
    y,
    color,
    font,
    number,
    draw: function() {
      let arcStartAngle = 0;
      let arcEndAngle = 2 * Math.PI;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, arcStartAngle, arcEndAngle);
      ctx.fill();
      ctx.fillStyle = "#FFF";
      ctx.font = this.font;
      ctx.fillText(this.number, this.x - 10, this.y + 9);
    }
  };
};
