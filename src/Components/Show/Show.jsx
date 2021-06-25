import React from "react";
import './Show.css'
import Skeleton from 'react-loading-skeleton';
const Show = (props) => {
  const { result, info } = props;
  return (
    <div className="show">
      <div className="show__info">
        {info ? `Total results: ${info.totalResults}` : ""}
      </div>
      {! result ? <Skeleton duration={1} height={30} width={300}/>  :
         result.map((result) => (
            <div className="show__details">
              <div className="show__link">
                <a href={result.displayLink}>{result.displayLink}</a>
              </div>
              <div className="show__title">
                <a href={result.link}>{result.title}</a>
              </div>
              <div className="show__description">
                <p>{result.snippet}</p>
              </div>
            </div>
          ))
        }
    </div>
  );
};

export default Show;