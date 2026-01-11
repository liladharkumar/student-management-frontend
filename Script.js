const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // page reload stop

  const studentName = document.getElementById("name").value;
  const Email =document.getElementById("Email").value;
  const course = document.getElementById("course").value;

  const student = {
    name: studentName,
    Email: Email,
    course: course
  };

  // Fetch API (POST)
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
  });

  addStudent(student);
  form.reset();
});

function addStudent(student) {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${student.name}</td>
    <td>${student.Email}</td>
    <td>${student.course}</td>
    <td>
      <button onclick="this.parentElement.parentElement.remove()">
        Delete
      </button>
    </td>
  `;

  studentList.appendChild(tr);
}
