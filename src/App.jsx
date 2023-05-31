import "bootstrap/dist/css/bootstrap.css";

import React, { useState } from "react";
import diff_match_patch from "diff-match-patch";

import TextCompare from "./components/TextCompare";

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [difference, setDifference] = useState("");

  const calculateDifference = () => {
    const dmp = new diff_match_patch();

    const diffs = dmp.diff_main(text1, text2);

    dmp.diff_cleanupSemantic(diffs);
    const diffString = dmp.diff_prettyHtml(diffs);

    setDifference(diffString);
  };

  return (
    <div className="form-container">
      <h2>Text Compare</h2>

      <TextCompare
        setText1={setText1}
        setText2={setText2}
        calculateDifference={calculateDifference}
        difference={difference}
      />
    </div>
  );
}

export default App;