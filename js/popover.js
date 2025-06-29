  window.onload = () => {
    // Add `data-bs-toggle="popover" data-bs-custom-class="popover-css-inspector"` to all buttons on the page
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.setAttribute("data-bs-toggle", "popover");
      button.setAttribute("data-bs-custom-class", "popover-css-inspector");
    });
  };