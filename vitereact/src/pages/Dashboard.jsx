import Mobile from './Mobile';
import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [category, setCategory] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState([]);
  const [single, setSingle] = useState([]);
  const [singleFind, setSingleFind] = useState([]);

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


  const btnClick = (id) => {
    // alert(id);

    const selectFind = data.find((item) => item.id === id);
    setSingleFind(selectFind);

    console.log(selectFind);

    const selectFilter = data.filter((item) => item.id == id);
    // console.log(selectFilter);
    setSingle(selectFilter);
  }

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
              <div key={d.id}>
                <li>{d.title}</li>
                <button onClick={() => btnClick(d.id)} className='btn btn-primary'>
                  Show
                </button>
                <a className='btn btn-success ms-2' href={`/single/${d.id}`}>Details</a>
              </div>
            ))}
          </ul>

        )}
      </div>

      <div>
        <h2>Selected Item Details</h2>
        <ul>
          {single.map((d) => (

            <div key={d.id}>
              <li>{d.title}</li>
            </div>
          ))}
        </ul>

      </div>
      <h1>Find Data</h1>
      <li>{singleFind.title}</li>
    </>
  );
}

export default Dashboard;
