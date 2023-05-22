const form = document.querySelector(".form");

const entryYear = document.querySelector(".entry-year");
const entryMonth = document.querySelector(".entry-month");
const entryDay = document.querySelector(".entry-day");

const outYear = document.querySelector(".out-year");
const outMonth = document.querySelector(".out-month");
const outDay = document.querySelector(".out-day");

const contentTitle = document.querySelector(".sub-title");
const content = document.querySelector('textarea[name="content"]');

const todoList = document.querySelector(".todo-list");
const taskBackgroundColor = document.getElementById("task-background-color");

let state = {
  tasks: [],
};

// Dynamic HTML template for new tasks
const template = (task) =>
  `<th background-color="${task.backgroundColor}">
    <div class="all-task">
      <div class="all-days">
        <div class="entry">
          <p>記入</p>
          <p>${task.entryYear}年</p>
          <p>${task.entryMonth}</p>
          <p>${task.entryDay}</p>
        </div>
        <div class="end">
          <p>期日</p>
          <p>${task.outYear}年</p>
          <p>${task.outMonth}</p>
          <p>${task.outDay}</p>
        </div>
      </div>
      <p>${task.title}</p>
      <p>${task.content}</p>
    </div>
  </th>`;

// Render the template to the DOM
const render = (htmlString, el) => {
  el.innerHTML += htmlString;
};

// Submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = {
    entryYear: entryYear.value,
    entryMonth: entryMonth.value,
    entryDay: entryDay.value,
    outYear: outYear.value,
    outMonth: outMonth.value,
    outDay: outDay.value,
    title: contentTitle.value,
    content: content.value,
    taskBackgroundColor: taskBackgroundColor.value,
  };

  state.tasks = [...state.tasks, task];
  render(template(state.tasks[state.tasks.length - 1]), todoList);
  contentTitle.value = "";
});
