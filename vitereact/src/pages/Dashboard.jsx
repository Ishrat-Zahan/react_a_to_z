import Mobile from './Mobile';
import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [category, setCategory] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleCategory = (data) => {
    setCategory(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result.products);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>Dashboard</div>
      <Mobile onCategoryChange={handleCategory} />

      <div>{category}</div>

      <div>
        <h1>Example Component</h1>
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <ul>
            {data.map((d) => (
              <li key={d.id}>{d.title}</li>
            ))}
          </ul>

        )}
      </div>
    </>
  );
}

export default Dashboard;
