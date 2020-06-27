/* Global Variables */
const apiKey = '4fc34f4fd7c6a420a3ffc004db1baa95'
const baseURL = 'api.openweathermap.org/data/2.5/weather?'
const zip = document.getElementById('zip');
const input = document.getElementById('feelings');
const dateHolder = document.getElementById('date');
const tempHolder = document.getElementById('temp');
const contentHolder = document.getElementById('content')
const postURL = 'http://localhost:3000'
const getURL = 'http://localhost:3000/all'

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
