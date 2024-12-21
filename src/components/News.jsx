import React, { useEffect, useState } from 'react'

function News() {
    let [search , setSearch] = useState();
    let [newsData , setNewsData] = useState([])
    let API_KEY = "d17463cb2784414e832968f3ae053548";
    // https://newsapi.org/v2/everything?q=tesla
  
    const getData = async() =>{
        let response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        let jsonData = await response.json()
        console.log(jsonData);
        setNewsData(jsonData.articles)
        
    }

    const inputEvent = (e) =>{
        setSearch(e.target.value)
        
    }
    useEffect(()=>{
        getData()
    },[])
    
    return (

    <>
        <nav>
            <div className="logo">
                <h2>BBC NEWS</h2>
            </div>
            <ul>
                <li>Trending</li>
                <li>All News</li>
                <li>Headlines</li>
            </ul>

            <div className="Search">
                <input type="text" value={search} name="" onChange={(e)=>setSearch(e.target.value)} placeholder='Search here....' id="" />
                <button onClick={getData}>Search</button>
            </div>
        </nav>

        <div className="Category">
            <button onClick={inputEvent} value="Sports">Sports</button>
            <button onClick={inputEvent} value="Entertainment">Entertainment</button>
            <button onClick={inputEvent} value="Politics">Politics</button>
            <button onClick={inputEvent} value="Food">Food</button>
            <button onClick={inputEvent} value="Movies">Movies</button>
            <button onClick={inputEvent} value="Weather">Weather</button>
        </div>

        <div className="product">
            {newsData.map((currValue , index)=>{
                if(currValue.urlToImage){
                    return(
                        <div className="card" key={index}>
                            <h2>{currValue.title}</h2>
                            <img src={currValue.urlToImage} alt="" />
                            <p>{currValue.description}</p>
                            <h3>{currValue.author}</h3>
                            <button onClick={()=>window.open(currValue.url)}>Read More</button>
                        </div>
                    )
                }
            })}
        </div>
    </>
  )
}

export default News