const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    // const { data } = await axios.get('/.netlify/functions/hello');
    // with redirects:
    const { data } = await axios.get('/api/hello');
    result.textContent = data;
  } catch (error) {
    console.log(error.response.data);
  }
};

fetchData();
