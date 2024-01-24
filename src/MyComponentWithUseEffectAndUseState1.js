import React, { useEffect, useState } from "react";

function MyComponentWithUseEffectAndUseState1() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{data?.title}</h1>
    </div>
  );
}

export default MyComponentWithUseEffectAndUseState1;
