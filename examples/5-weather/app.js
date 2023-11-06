// it takes few minutes

const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const alert = document.querySelector('.alert');
const result = document.querySelector('.result');
alert.style.display = 'none';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = input.value;
  if (city) {
    getWeatherData(city);
  }
});

async function getWeatherData(city) {
  alert.style.display = 'none';
  try {
    const { data } = await axios.post('/api/weather', { city });
    const { name } = data;
    const { country } = data.sys;
    const { temp_max: max, temp_min: min, feels_like } = data.main;
    const { description } = data.weather[0];
    result.innerHTML = `
    <article class="card">
      <h3>${name}, ${country}</h3>
      <p>${description}</p>
      <p>min temp : ${min}&#8451</p>
      <p>max temp : ${max}&#8451</p>
      <p>feels like : ${feels_like}&#8451</p>
    </article>
    `;
  } catch (error) {
    // console.log(error.response.data);
    alert.textContent = `Can not find weather data for city : "${city}"`;
    alert.style.display = 'block';
  }
}
