const forecastData = [
    { day: "Today", temp: 97, rain: "95%" },
    { day: "Wednesday", temp: 95, rain: "85%" },
    { day: "Thursday", temp: 90, rain: "95%" },
    { day: "Friday", temp: 91, rain: "75%" },
    { day: "Saturday", temp: 93, rain: "65%" }
];

const forecastContainer = document.getElementById("forecast");

forecastData.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("day");

    div.innerHTML = `
        <h4>${item.day}</h4>
        <div class="deg">${item.temp}°</div>
        <div class="rain">💧 ${item.rain}</div>
    `;

    forecastContainer.appendChild(div);
});