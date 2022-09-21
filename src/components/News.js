import React from 'react'
import Newsitem from './Newsitem'
import { useState,useEffect } from 'react'
import Spinner from './Spinner';


export default function News(props) {

     let articls = [
          {
              "source": {
                  "id": "espn-cric-info",
                  "name": "ESPN Cric Info"
              },
              "author": null,
              "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
              "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
              "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
              "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
              "publishedAt": "2020-04-27T11:41:47Z",
              "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
          },
          {
              "source": {
                  "id": "espn-cric-info",
                  "name": "ESPN Cric Info"
              },
              "author": null,
              "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
              "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
              "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
              "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
              "publishedAt": "2020-03-30T15:26:05Z",
              "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
          }
      ];
     const [articles, setarticles] = useState(articls);
     const [loading,setloading] = useState(false);
     const [page,setPage] = useState(1);
     const[totalresults,setTotalResults] = useState(0);
     
     const updatenews = async ()=>
     {
          let url = `https://newsapi.org/v2/top-headlines?country=US&apiKey=0eac8158287f4625aae58d2ad60e12fe&page=${page-1}&pageSize=${props.pageSize}`;
          let data = await fetch(url);
          let parsedData = await data.json();
          //console.log(parsedData);
          setarticles(parsedData.articles);
          setTotalResults(parsedData.totalResults);
          //console.log(totalresults)

     } 

     const handleprevious = async ()=>
     {
          setloading(true);
          let url = `https://newsapi.org/v2/top-headlines?country=US&apiKey=0eac8158287f4625aae58d2ad60e12fe&page=${page-1}&pageSize=${props.pageSize}`;
          let data = await fetch(url);
          let parsedData = await data.json();
          //console.log(parsedData);
          setarticles(parsedData.articles);
          setPage(page-1);
          setloading(false);

     } 

     const handlenext = async ()=>
     {
          if( page + 1 > Math.ceil(totalresults/props.pageSize))
          {    

          }
          else{

               setloading(true);
               let url = `https://newsapi.org/v2/top-headlines?country=US&apiKey=0eac8158287f4625aae58d2ad60e12fe&page=${page+1}&pageSize=${props.pageSize}`;
               let data = await fetch(url);
               let parsedData = await data.json();
               console.log(parsedData);
               setarticles(parsedData.articles);
               setPage(page+1);
              //  console.log(page)
              //  console.log(totalresults)
               setloading(false);

          }
     } 

     useEffect (()=>
     {
          updatenews();
     }, [])

  return (
    <div className='container my-3'>
        <h1 className='text-center'>{props.headlines}</h1>
        <Spinner loading = {loading}></Spinner>
        <div className="row d-flex justify-content-center ">
        {articles.map((element)=>
        {
          return !loading &&<div className="col md-4" key = {element.url}>
              <Newsitem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,88):""} imageurl = {element.urlToImage?element.urlToImage:""} newsurl = {element.url}></Newsitem>
          </div>
          })}
        </div>

          <div className='container d-flex  justify-content-between'>
            <button disabled = {page<=1} onClick={handleprevious} type="button" className="btn btn-dark">&laquo; Previous</button>
           <button disabled = {page + 1 > Math.ceil(totalresults/props.pageSize)} onClick={handlenext} type="button" className="btn btn-dark">Next &raquo;</button>
        </div>
    </div>
  )  
}
