const appearenceRate = 1000;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getBoundingBox(target, padding = 200) {
  console.log(target);
  return {
    top: padding,
    right: target.clientWidth - padding,
    bottom: target.clientHeight - padding,
    left: padding,
  };
}

function getRandomPosition(boundingBox) {
  return {
    x: getRandomInt(boundingBox.left, boundingBox.right),
    y: getRandomInt(boundingBox.top, boundingBox.bottom),
  };
}

function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function circleFactory(options) {
  const { label, diameter, position, growthRate, growthAmount } = options;
  const circle = $("#circleTmpl").tmpl({ label });
  circle.css("width", diameter);
  circle.css("height", diameter);
  circle.css("left", position.x - diameter / 2);
  circle.css("top", position.y - diameter / 2);
  circle.css("background-color", `#${getRandomColor()}`);
  const rate = growthAmount / diameter;

  const growthInterval = setInterval(() => {
    const currentDiameter = Number(circle.css("width").replace("px", ""));
    if (currentDiameter < growthAmount) {
      const newDiameter = currentDiameter + rate;
      circle.css("width", newDiameter);
      circle.css("height", newDiameter);
      circle.css("left", position.x - newDiameter / 2);
      circle.css("top", position.y - newDiameter / 2);
    } else {
      clearInterval(growthInterval);
    }
  }, growthRate / 50);

  return circle;
}

$(document).ready(function () {
  const circlesPool = $("#circlesPool")[0];

  $("form").submit(function (evt) {
    evt.preventDefault();

    $(".circle").click(function (evt) {
      evt.preventDefault();
      $(evt.target).addClass("not");
    });

    $(evt.target).find("button").attr("disabled", true);

    const amount = $("#inputAmountOfCircles").val();
    const diameter = $("#inputDiameter").val();
    const growthAmount = $("#inputGrowthAmount").val();
    const growthRate = $("#inputGrowthRate").val();

    const boundingBox = getBoundingBox(circlesPool, growthAmount / 2);

    let index = 0;
    const creationInterval = setInterval(() => {
      if (index < amount) {
        const position = getRandomPosition(boundingBox);
        const circle = circleFactory({
          label: 1 + index++,
          position,
          diameter,
          growthRate,
          growthAmount,
        });
        circle.click(function (evt) {
          evt.preventDefault();
          $(evt.target).addClass("not");
        });
        $("#circlesPool").append(circle);
      } else clearInterval(creationInterval);
    }, appearenceRate);
  });
});
