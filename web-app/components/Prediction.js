
import {getCoinIcon, getImpactColor, getImpactIcon} from "../helpers";
import React from "react";
import {useApiData} from "../api-hook"


export const Prediction = ({ selectedRange, coin }) => {

    const {result: average, isLoading: isLoading} = useApiData([0.0, 0.0, 0.0, 0.0], "aggregate/post_impacts", {
        start: selectedRange[0],
        end: selectedRange[1],
        type: coin
    }, [], (params) => params[0] !== params[1] && params[2] !== null)

    return (selectedRange && selectedRange[0] !== selectedRange[1] && coin &&
      <div className="flex flex-col rounded-md">
          <div className="flex flex-row items-center font-semibold text-md mb-2">
              <span>{getCoinIcon(coin)}</span>
              <span className="ml-2">{coin.toUpperCase()}</span>
          </div>
          { isLoading && average && "Calculating..." }
          { !isLoading && average && average.map(p => (
            <div className = {`flex flex-row text-black items-center py-1 px-3 mb-1 rounded border 
                                border-${getImpactColor(p)}  bg-${getImpactColor(p)}`}>
                <div className="font-mono text-sm"> {p.toPrecision(4)} </div>
                <span className="flex-grow"></span>
                <div className={`text-xl`}>{getImpactIcon(p)}</div>
            </div>
          )) }
      </div>
    );
}