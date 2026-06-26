const links = document.querySelectorAll('a[href^="#"]');
const params = new URLSearchParams(window.location.search);
const successMessage = document.querySelector("#success-message");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

if (params.get("joined") === "1" && successMessage) {
  successMessage.hidden = false;
}
