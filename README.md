✅ TODO App
A clean and minimal Todo List App built with Vanilla JavaScript, featuring dark/light theme, drag & drop reordering, and persistent storage.

📸 Preview:

🌐 Live Site:
[# https://mansityagi548.github.io/to-do-list/]

📋 Features

✅ Add and delete tasks
✔️ Mark tasks as completed
🌗 Toggle between dark and light theme
💾 Persistent storage using localStorage
🔍 Filter tasks — All, Active, Completed
🧹 Clear all completed tasks at once
🖱️ Drag and drop to reorder tasks
📱 Fully responsive — works on mobile and desktop
🔢 Live count of remaining tasks


🛠️ Built With

HTML5
CSS3 — CSS variables, media queries, flexbox
Vanilla JavaScript — ES6 modules, localStorage, Drag & Drop API

📁 Project Structure

📦 todo-app
 ┣ 📂 assests
 ┃ ┣ 🖼️ bg-desktop-dark.jpg
 ┃ ┣ 🖼️ bg-desktop-light.jpg
 ┃ ┣ 🖼️ bg-mobile-dark.jpg
 ┃ ┣ 🖼️ bg-mobile-light.jpg
 ┃ ┣ 🖼️ icon-sun.svg
 ┃ ┣ 🖼️ icon-moon.svg
 ┃ ┣ 🖼️ icon-check.svg
 ┃ ┗ 🖼️ icon-cross.svg
 ┣ 📂 script
 ┃ ┣ 📄 script.js
 ┃ ┗ 📄 generate.js
 ┣ 📄 index.html
 ┣ 📄 style.css
 ┗ 📄 README.md

 🚀 Getting Started

Clone the repository

bash   git clone https://github.com/your-username/todo-app.git

Open the project

bash   cd todo-app

Run it — just open index.html in your browser!
⚠️ Since the project uses ES6 modules, open it with a local server (e.g. VS Code Live Server) to avoid CORS issues.




💡 How It Works
Action                           What Happens

Type + EnterTask             added to list and saved
Click circle                Task marked complete/incomplete
Click ✕                       Task deleted
Drag task                     Reorder the list
All / Active / Completed       Filter tasks
Clear Completed            Removes all done tasks
🌙 / ☀️ button            Toggles dark/light theme

📱 Responsive Design

Desktop — filter buttons inside the todo card footer
Mobile — filter buttons move to a separate card below for cleaner layout
