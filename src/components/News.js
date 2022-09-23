import React from "react";
import Newsitem from "./Newsitem";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  let articls = [];
  const [articles, setarticles] = useState(articls);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalresults, setTotalResults] = useState(0);

  const updatenews = async () => {
    props.setProgress(10);
    setloading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    //console.log(parsedData);
    setarticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setloading(false);
    //console.log(totalresults)
    props.setProgress(100);
    document.title = `${capitalizedFirsLetter(props.category)} - NewsMania`;
  };

  const capitalizedFirsLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fetchMoreData = async () => {
    
    setloading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pagesize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setloading(false);
  };
  useEffect(() => {
    updatenews();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1 style={{ margin: "90px" }} className="text-center">
        NewsMania - Top {capitalizedFirsLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalresults}
        loader={<Spinner ></Spinner>}
      >
        <div className="container">
          <div className="row justify-content-center ">
            {articles.map((element) => {
              return (
                <div className="col md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageurl={element.urlToImage ? element.urlToImage : ""}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  ></Newsitem>
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}
