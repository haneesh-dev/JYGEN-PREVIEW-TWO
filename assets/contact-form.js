(() => {
  const form = document.getElementById("project-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const fields = new FormData(form);
    const firstName = String(fields.get("first_name") || "").trim();
    const lastName = String(fields.get("last_name") || "").trim();
    const email = String(fields.get("email") || "").trim();
    const company = String(fields.get("company") || "").trim();
    const service = String(fields.get("service") || "").trim();
    const details = String(fields.get("details") || "").trim();
    const subject = `Project inquiry · ${service}`;
    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      `Service: ${service}`,
      "",
      "Project details:",
      details,
    ].filter((line) => line !== null).join("\n");

    status.dataset.state = "info";
    status.textContent = "Your email draft is ready. Press Send in your email app to complete the inquiry. If it did not open, email info@jygen.tech directly.";
    window.location.href = `mailto:info@jygen.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
