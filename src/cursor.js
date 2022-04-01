const cursor = () => {
  const circle = document.querySelector(".circle");
  const marker = document.querySelector(".marker");
  const keyDropdown = document.querySelector(".key-dropdown");
  const gameContent = document.querySelector(".game-content");
  gameContent.addEventListener("mousemove", mouseMoveHandler);
  gameContent.addEventListener("mousedown", mouseDownHandler);
  gameContent.addEventListener("mouseup", mouseUpHandler);
  keyDropdown.addEventListener("mouseover", keyDropdownMouseOver);
  keyDropdown.addEventListener("mouseout", keyDropdownMouseOut);

  function mouseMoveHandler(e) {
    circle.style.left = e.clientX - circle.offsetWidth / 2 + "px";
    circle.style.top = e.clientY - circle.offsetHeight / 2 + "px";
  }

  function mouseUpHandler(e) {
    circle.style.transform = "scale(1)";
  }

  function mouseDownHandler(e) {
    circle.style.transform = "scale(1.5)";

    toggleCursor(e);

    ensureValidDropdownPosition();
  }

  // switch to/from cursor and dropdown
  function toggleCursor(e) {
    if (marker.hidden) {
      marker.hidden = false;
      marker.style.left =
        e.clientX - marker.offsetWidth / 2 + window.pageXOffset + "px";
      marker.style.top =
        e.clientY - marker.offsetHeight / 2 + window.pageYOffset + "px";
    } else {
      marker.hidden = true;
    }

    if (keyDropdown.hidden) {
      keyDropdown.hidden = false;
      keyDropdown.style.left =
        e.clientX + marker.offsetWidth / 2 + window.pageXOffset + "px";
      keyDropdown.style.top = e.clientY + window.pageYOffset + "px";
    } else {
      keyDropdown.hidden = true;
    }
  }

  // prevent dropdown from going off screen
  function ensureValidDropdownPosition() {
    if (
      keyDropdown.offsetTop + keyDropdown.offsetHeight >
      document.body.scrollHeight
    ) {
      keyDropdown.style.top =
        document.body.scrollHeight - keyDropdown.offsetHeight + "px";
    }

    if (
      keyDropdown.offsetLeft + keyDropdown.offsetWidth >
      document.body.scrollWidth
    ) {
      keyDropdown.style.left =
        document.body.scrollWidth - keyDropdown.offsetWidth + "px";
    }
  }

  function keyDropdownMouseOver() {
    circle.hidden = true;
  }

  function keyDropdownMouseOut(e) {
    circle.hidden = false;
    circle.style.left = e.clientX - circle.offsetWidth / 2 + "px";
    circle.style.top = e.clientY - circle.offsetHeight / 2 + "px";
  }
};

export default cursor;
