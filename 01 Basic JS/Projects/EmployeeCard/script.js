// Sample employee data
/*const employees = [
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

//Api Data Calling from Server

async function getUserData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return { ok: true, data: res.json() };
  } catch (error) {
    return { ok: false, error: "something went wrong" };
  }
}

const getUserData = async () => {
  const data = await getUserData();
  if (data.ok) {
  } else {
  }
};

getUserData();

const getUser = async () => {
  await new promise((resolve, reject) => {});
};*/
// Function to generate employee cards using map()
async function createEmployeeCards() {
  const cardContainer = document.getElementById("employeeCards");
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const cards = data.map((employee) => {
    // Create card element using template literals
    return `
            <div class="card">
                <h2>${employee.id}</h2>
                <h3>${employee.name}</h3>
                <p>${employee.email}</p>
                <p>Company: ${employee.company.name}</p>
                <p>Address: ${employee.address.city}</p>
            </div>
        `;
  });

  // Join the array of cards into a single string and set as innerHTML
  cardContainer.innerHTML = cards.join("");
}

// Call the function to display employee cards
createEmployeeCards();
