import React from 'react'

const Home = () => {
    let userArr = JSON.parse(localStorage.getItem("userDatas"));
    console.log(userArr)
  return (
    <div>Home</div>
  )
}

export default Home