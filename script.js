const form = document.getElementById("numbersinput");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);

  const D = b * b - 4 * a * c;

  if (D > 0) {
    const ekis1 = (-b + Math.sqrt(D)) / (2 * a);
    const ekis2 = (-b - Math.sqrt(D)) / (2 * a);
    document.getElementById("result1").textContent = ekis1.toFixed(2);
    document.getElementById("result2").textContent = ekis2.toFixed(2);
  } else if (D === 0) {
    const ekis = -b / (2 * a);
    document.getElementById("result1").textContent = ekis.toFixed(2);
    document.getElementById("ekes2").textContent = ""; // Blank second root
  } else {
    document.getElementById("result1").textContent = "No real roots";
    document.getElementById("ekes2").textContent = "";
  }
});