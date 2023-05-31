import "bootstrap/dist/css/bootstrap.css";

import React from "react";

function TextCompare(props) {
  let x = (
    <div
      className="difference"
      dangerouslySetInnerHTML={{ __html: props.difference }}
    />
  );

  return (
    <>
      <div className="text-area">
            <div>
             <label>Original Text</label>
             <textarea onChange={(e) => props.setText1(e.target.value)} />
            </div>

            <div>
             <label>Changed Text</label>
             <textarea onChange={(e) => props.setText2(e.target.value)} />  
            </div>
      </div>

      <div>
        <button className="btn btn-success" onClick={props.calculateDifference}>
          Find Difference
        </button>
      </div>

      {props.difference && (
        <div className="difference">
          <p>🔴- indicates deletion 🟢- indicates addition</p>
          <p>These are the differences:</p>
          {x}
        </div>
      )}
    </>
  );
}

export default TextCompare;
