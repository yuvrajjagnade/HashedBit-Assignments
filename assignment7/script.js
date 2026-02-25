const apiUrl = "https://my-json-server.typicode.com/FreSauce/json-ipl/data";
const tbody = document.querySelector("#pointsTable tbody");
const sortBy = document.getElementById("sortBy");
const highlightTop4 = document.getElementById("highlightTop4");
const statusText = document.getElementById("status");
let teamsData = [];

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    teamsData = data;
    renderTable();
    statusText.textContent = "Loaded " + teamsData.length + " teams";
  })
  .catch(error => {
    console.error("Error:", error);
    statusText.textContent = "Failed to load data";
  });

sortBy.addEventListener("change", renderTable);
highlightTop4.addEventListener("change", renderTable);

function getSortedData() {
  const copiedData = [...teamsData];

  if (sortBy.value === "points") {
    copiedData.sort((a, b) => b.Points - a.Points || b.NRR - a.NRR);
  } else if (sortBy.value === "nrr") {
    copiedData.sort((a, b) => b.NRR - a.NRR);
  } else if (sortBy.value === "team") {
    copiedData.sort((a, b) => a.Team.localeCompare(b.Team));
  }

  return copiedData;
}

function renderTable() {
  const data = getSortedData();
  tbody.innerHTML = "";

  data.forEach((team, index) => {
    const row = document.createElement("tr");

    if (highlightTop4.checked && sortBy.value === "points" && index < 4) {
      row.classList.add("top-four");
    }

    row.innerHTML = `
      <td>${team.No}</td>
      <td>${team.Team}</td>
      <td>${team.Matches}</td>
      <td>${team.Won}</td>
      <td>${team.Lost}</td>
      <td>${team.Tied}</td>
      <td>${team.NRR}</td>
      <td>${team.Points}</td>
    `;

    tbody.appendChild(row);
  });
}
