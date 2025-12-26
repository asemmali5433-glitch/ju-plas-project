// إظهار رسالة على الصفحة
document.body.innerHTML += "<h2>✅ تم تنفيذ كود JavaScript بنجاح!</h2>";

// أو إظهار رسالة في عنصر معين
const output = document.getElementById("output");
if (output) {
  output.textContent = "✨ JavaScript يعمل الآن!";
}