# Advanced Application of JavaScript — Dynamic To-Do List

A clean, responsive To-Do List app built with **vanilla JavaScript**, focusing on **advanced DOM manipulation**, **event handling**, and **localStorage** persistence. Users can add tasks, see them instantly, and remove them—saved across sessions.

---

## 🎯 Learning Objectives

- **DOM Mastery:** Select, create, insert, and remove elements dynamically.
- **Event Handling:** Wire click/keypress events and manage user input safely.
- **State & Persistence:** Store and retrieve tasks using `localStorage` (JSON).
- **Clean Architecture:** Write small, single-purpose functions and predictable flows.

---

## ✨ Features

- Add tasks via **button** or **Enter** key
- Instant rendering with **dynamic `<li>` creation**
- **Remove** individual tasks with a delete button
- **Persist** tasks with `localStorage` (survive refresh/close)
- Minimal, accessible UI with keyboard support

---

## Tech & Files

- **Tech:** HTML5, CSS3, JavaScript (ES6+)
- **No frameworks, no libraries**
- **Repo:** `dynamic-to-do-list-js`

 ```text
 dynamic-to-do-list-js/
├─ index.html # App markup (input, button, list)
├─ styles.css # Basic responsive styles
└─ script.js # DOM logic, events, localStorage
```


---

## Getting Started

1. **Clone / Download** this repo
2. Open `index.html` in your browser
3. Type a task → **Add Task** (or press **Enter**)
4. Remove tasks with the **Remove** button
5. Refresh the page — your tasks persist 

---

## How It Works (High Level)

1. **Boot**  
   On `DOMContentLoaded`, the script:
   - **Selects** key elements (`#task-input`, `#add-task-btn`, `#task-list`)
   - **Loads** tasks from `localStorage` and renders them
   - **Wires** events: button click + Enter key

2. **Add Task**  
   - Trim input; if empty → `alert(...)`
   - Create `<li>` + “Remove” `<button>`
   - Append to list; **optionally save** to `localStorage`

3. **Remove Task**  
   - Click “Remove” → delete that `<li>`
   - Update `localStorage` to reflect the change

4. **Persist**  
   - Store tasks as JSON array under the key **`tasks`**
   - On load, parse and render each task

---

## Key Functions (Conceptual)

```js
// loadTasks(): read tasks from localStorage and render
// addTask(taskText, save = true): create <li>, append, optionally save
// saveTasks(tasks): persist array to localStorage
// getStoredTasks(): helper to parse tasks safely
// attachEvents(): wire click and keypress handlers
```

### License

Educational use for ALX exercises. © 2025 Mayo Takémsi Norris KADANGA


