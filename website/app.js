/* Global Variables */
const apiid = '4fc34f4fd7c6a420a3ffc004db1baa95'
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

//fetch the Weather
const fetchWeather = async (baseURL, zip, apiid) => {
  const url = `http://${baseURL}zip=${zip},us&appid=${apiid}`
  const res = await fetch(url)
  let jsonRes = await res.json()
  return jsonRes
}

//end user post function

const postData = async (path, data ={}) => {
  const res = await fetch(path, {
    method: 'POST',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application.json',
    },
    redirect: 'follow',
    body: JSON.stringify(data)
  })
}
