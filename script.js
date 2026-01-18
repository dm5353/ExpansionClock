const login = document.getElementById("login");
const password = document.getElementById("password");
const themeBtn = document.getElementById("themeToggle");
const statuses = document.querySelectorAll(".status");

/* ---------- загрузка сохранённых данных ---------- */
login.value = localStorage.getItem("login") || "";
password.value = localStorage.getItem("password") || "";

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

/* ---------- сохранение при изменении ---------- */
login.addEventListener("input", () =>
  localStorage.setItem("login", login.value)
);

password.addEventListener("input", () =>
  localStorage.setItem("password", password.value)
);

/* ---------- копирование + автосброс ---------- */
document.querySelectorAll("button[data-copy]").forEach(btn => {
  btn.addEventListener("click", () => {
    statuses.forEach(s => s.classList.remove("show"));

    const id = btn.dataset.copy;
    const value = document.getElementById(id).value;
    const status = document.getElementById("status-" + id);

    navigator.clipboard.writeText(value).then(() => {
      status.classList.add("show");
    });
  });
});

/* ---------- тема ---------- */
function updateThemeIcon() {
  themeBtn.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
}

/* загрузка темы */
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}
updateThemeIcon();

/* переключение */
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
  updateThemeIcon();
});

