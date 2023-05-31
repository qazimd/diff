import "bootstrap/dist/css/bootstrap.css";

import React, { useState } from "react";
import diff_match_patch from "diff-match-patch";

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [difference, setDifference] = useState("");

  const calculateDifference = () => {
    // create a new instance of the diff_match_patch object from the diff-match-patch library
    const dmp = new diff_match_patch();
    console.log(dmp);

    //  diff main method of the diff_match_patch object to calculate
    //  the differences between text1 and text2

    const diffs = dmp.diff_main(text1, text2);
    console.log(diffs);

    // convert to html-formated string

    dmp.diff_cleanupSemantic(diffs);
    const diffString = dmp.diff_prettyHtml(diffs);
    console.log(diffString);

    setDifference(diffString);
  };

  let x = (
    <div
      className="difference"
      dangerouslySetInnerHTML={{ __html: difference }}
    />
  );

  return (
    <div className="form-container">
      <h2>Text Compare</h2>
      {difference && (
        <div className="difference">
          <p>🔴- indicates deletion 🟢- indicates addition</p>
          <p>These are the differences:</p>
          {x}
        </div>
      )}

      <div className="text-area">
        <div>
          <label>Original Text</label>
          <textarea onChange={(e) => setText1(e.target.value)} />
        </div>
        <div>
          <label>Changed Text</label>
          <textarea onChange={(e) => setText2(e.target.value)} />
        </div>
      </div>

      <div>
        <button className="btn btn-success" onClick={calculateDifference}>
          Find Difference
        </button>
      </div>
    </div>
  );
}

export default App;
// test