import React, { useState } from 'react';
import DisplayList from './DisplayList';

const Search = () => {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState('');

  //   const [repo, setRepo] = useState('');

  const handelSearch = (e) => {
    setUsername(e.target.value);
  };

 
  

  const handelSearchUser = async (e) => {
    e.preventDefault();
    try {
      const profile = await fetch(
        `https://api.github.com/users/${username}/events`
      );
      const res = await profile.json();
      console.log(res);

      if (Array.isArray(res)) {
        setData(res);
      } else {
        setData([]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Enter Username'
          value={username}
          onChange={handelSearch}
        />
        <button onClick={handelSearchUser}>Search</button>
        
       
      </div>
      <DisplayList data={data} />
      
    </>
  );
};

export default Search;
