import React, { useState } from 'react';
import fetchData from './components/services/api';
import Card from './components/Card';
import initialData from './halpers/initialData';

function App() {
  const [city, setcity] = useState('');
  const [data, setData] = useState(initialData);

  const handLeSubmit = (event) => {
    event.preventDefault();
    fetchData(city).then((response) => {
      setData(response);
    });
  };

  return (
    <div className="flex flex-col w-full h-screen items-center sm:justify-center p-4">
      <form onSubmit={handLeSubmit} className="fixed bottom-0 w-full flex p-4 sm:relative justify-center">
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none w-full sm:max-w-[300px] flex-1"
          value={city}
          onChange={({ target: { value } }) => setcity(value)}
        />
        <button
          type="submit"
          className="bg-[#7a5edd] rounded-lg p-3 ml-3 text-white font-semibold"
        >
          Pesquisar
        </button>
      </form>
      <Card data={data} />
    </div>
  );
}

export default App;
