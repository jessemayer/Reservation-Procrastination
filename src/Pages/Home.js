import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../Styles/home.css"

function Home() {
const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://ridb.recreation.gov/api/v1/campgrounds', {
          params: {
            apikey: 'db4ab36a-6dab-4938-a304-a7a79d466b11',
            // Additional parameters if needed
          },
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='home-container'>
      {/* Render the data in the component */}
      {data && (
        // Access the necessary data properties and render them accordingly
        <div>
          {/* Example: Rendering facility names */}
          {data.map((campgrounds) => (
            <div key={campgrounds.id}>{campgrounds.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home


