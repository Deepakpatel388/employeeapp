import React, { useEffect, useState } from "react";
import Layout from "../components/LayOut";

const Search = () => {
  const [data, setData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterVal, setfilterVal] = useState("");

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data);
        setSearchApiData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSerach = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      setData(searchApiData);
    } else {
      const filterResult = searchApiData.filter(
        (item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.username.toLowerCase().includes(e.target.value.toLowerCase())
      );

      setData(filterResult);
    }

    setfilterVal(e.target.value);
  };
  return (
    <Layout>
       <div>
      <h1>Search</h1>
      <input
        type="text"
        value={filterVal}
        placeholder="search"
        onInput={(e) => handleSerach(e)}
      />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          {data.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
    </Layout>
  );
};

export default Search;
