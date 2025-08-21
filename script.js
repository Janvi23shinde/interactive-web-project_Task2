// Toggle dark/light mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// Show popup function
function showPopup(message) {
  const popup = document.getElementById("popup");
  popup.innerText = message;
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 2500);
}

// Contact Form Submit
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  showPopup("✅ Form submitted! Source code available on my GitHub.");
});

// Update Task Count
function updateTaskCount() {
  let count = document.getElementById("taskList").children.length;
  showPopup(`📌 You have ${count} task(s) now!`);
}

// Add Task
function addTask() {
  let taskInput = document.getElementById("taskInput").value;
  if (taskInput.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = taskInput;

    // Add remove button
    let btn = document.createElement("button");
    btn.textContent = "🗑️"; // changed delete emoji
    btn.classList.add("task-remove");
    btn.onclick = () => removeTask(li);

    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";

    showPopup("✅ Task added successfully!");
    updateTaskCount();
  }
}

// Remove Task
function removeTask(li) {
  li.remove();
  showPopup("🗑️ Task removed successfully!");
  updateTaskCount();
}

// Upload Image from Device
function uploadImage() {
  let fileInput = document.getElementById("imageUpload");
  if (fileInput.files.length > 0) {
    let reader = new FileReader();
    reader.onload = function(e) {
      let img = document.createElement("img");
      img.src = e.target.result;

      // Click to remove image
      img.onclick = () => removeImage(img);

      document.getElementById("gallery").appendChild(img);
      showPopup("🖼️ Image uploaded successfully!");
    };
    reader.readAsDataURL(fileInput.files[0]);
  }
}

// Remove Image
function removeImage(img) {
  img.remove();
  showPopup("🗑️ Image removed successfully!");
}
