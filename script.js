const links = document.querySelectorAll('a[href^="#"]');
const leadForm = document.querySelector(".lead-form");
const successMessage = document.querySelector("#success-message");
const errorMessage = document.querySelector("#error-message");

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

leadForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const endpoint = leadForm.dataset.endpoint;
  const submitButton = leadForm.querySelector('button[type="submit"]');
  const formData = new FormData(leadForm);
  const payload = Object.fromEntries(formData.entries());

  if (payload.phone) {
    payload.phone = `'${payload.phone}`;
  }

  successMessage.hidden = true;
  errorMessage.hidden = true;
  submitButton.disabled = true;
  submitButton.textContent = "שולח...";

  try {
    if (!endpoint) {
      throw new Error("Missing Google Apps Script endpoint");
    }

    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    leadForm.reset();
    leadForm.hidden = true;
    successMessage.hidden = false;
  } catch (error) {
    errorMessage.hidden = false;
    submitButton.disabled = false;
    submitButton.textContent = "הצטרפות";
  }
});
