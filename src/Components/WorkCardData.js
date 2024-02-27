import pro1 from "../assets/project1.png"
import pro2 from "../assets/project2.png"
import pro3 from "../assets/project3.png"

const ProjectCardData = [
    {
        imgsrc: pro1,
        title:"TIC-TAC-TOE",
        text:"This project is a simple implementation of the classic Tic Tac Toe game using React. It allows two players to take turns marking spaces in a 3x3 grid, aiming to get three of their symbols (either X or O) in a row, column, or diagonal. The game indicates the winner when one player achieves the winning condition or ends in a draw if the grid is full without a winner.",
        view: "https://github.com/SOUMYAJIT06121999/tic-tac-toe.git",
    },
    {
        imgsrc: pro2,
        title:"WEATHER-APP",
        text:"This project is a simple weather application built using React. It allows users to search for weather information by entering the name of a city. The application fetches real-time weather data from the OpenWeatherMap API and displays it to the user. The weather data includes temperature, humidity, and wind speed, along with an icon representing the current weather conditions.",
        view: "https://github.com/SOUMYAJIT06121999/weather-app.git",
    },
    {
        imgsrc: pro3,
        title:"AGE-CALCULATOR",
        text:"This project is a simple age calculator implemented using JavaScript. It allows users to input their birthday and calculates their age based on the current date. The calculator considers the year, month, and day to accurately determine the age in years, months, and days. The project demonstrates how to perform date calculations in JavaScript to achieve the desired functionality.",
        view: "https://github.com/SOUMYAJIT06121999/Age-Calculator.git",
    },
];

export default ProjectCardData;