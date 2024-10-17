// Sample employee data
const employees = [
  {
    name: "John Doe",
    position: "Software Engineer",
    image: "https://via.placeholder.com/80",
    department: "Development",
  },
  {
    name: "Jane Smith",
    position: "Project Manager",
    image: "https://via.placeholder.com/80",
    department: "Management",
  },
  {
    name: "Alice Johnson",
    position: "UI/UX Designer",
    image: "https://via.placeholder.com/80",
    department: "Design",
  },
];

// Function to generate employee cards using map()
function createEmployeeCards() {
  const cardContainer = document.getElementById("employeeCards");

  const cards = employees.map((employee) => {
    // Create card element using template literals
    return `
            <div class="card">
                <img src="${employee.image}" alt="${employee.name}">
                <h3>${employee.name}</h3>
                <p>${employee.position}</p>
                <p>Department: ${employee.department}</p>
            </div>
        `;
  });

  // Join the array of cards into a single string and set as innerHTML
  cardContainer.innerHTML = cards.join("");
}

// Call the function to display employee cards
createEmployeeCards();
