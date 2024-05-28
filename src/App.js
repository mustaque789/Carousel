// import { useState } from "react";

// const App = ()=>{

//   const [data,setData] = useState([])
  
//   return(
//     <>
   
//    const url = 'https://streaming-availability.p.rapidapi.com/shows/search/filters?country=%3CREQUIRED%3E&show_type=movie&series_granularity=show&order_by=original_title&output_language=en&order_direction=asc&genres_relation=and';
   
//    const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '722c5a2141mshffd5241fd822608p19987bjsn71d15d5af088',
// 		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
// 	}
// };


//   const fetchData = async ()=>{
//     try{
//       const response = await fetch(url,options);
//  const data = await response.json();
//  console.log(data);
//  setData(data)
//     }
//     catch(e){
//       console.log("Error is", e);
//     }
//   }

// useEffect(() => {
//     fetchData();
//   }, []);
   
//     </>
//   )
// }

// export default App;

import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const url = 'https://streaming-availability.p.rapidapi.com/shows/search/filters?country=%3CREQUIRED%3E&show_type=movie&series_granularity=show&order_by=original_title&output_language=en&order_direction=asc&genres_relation=and';
   
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '722c5a2141mshffd5241fd822608p19987bjsn71d15d5af088',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setData(data); // Ensure data is set correctly
      console.log(data);
    } catch (e) {
      console.log("Error is", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
// data
  return (
    <div>
      {Array.isArray(data) ? (
        data.map((item, index) => (
          <p key={index}>{item.titles}</p> // Adjust the property name based on the actual data structure
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default App;

