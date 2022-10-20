/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
const KEY = 'e756834634734834b98234557221910';
const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();

  return data;
};

export default fetchData;
