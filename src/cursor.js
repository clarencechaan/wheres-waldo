const cursor = () => {
  const circle = document.querySelector(".circle");
  window.addEventListener("mousemove", mouseMoveHandler);
  window.addEventListener("mousedown", mouseDownHandler);
  window.addEventListener("mouseup", mouseUpHandler);

  function mouseMoveHandler(e) {
    circle.style.left = e.clientX - circle.offsetWidth / 2 + "px";
    circle.style.top = e.clientY - circle.offsetHeight / 2 + "px";
    circle.style.opacity = 1;
  }

  function mouseUpHandler(e) {
    circle.style.transform = "scale(1)";

    if (e.target.classList.contains("link")) {
      circle.style.transform = "scale(5)";
      circle.style.opacity = 0;
    }
  }

  function mouseDownHandler() {
    circle.style.transform = "scale(1.5)";
  }
};

export default cursor;
