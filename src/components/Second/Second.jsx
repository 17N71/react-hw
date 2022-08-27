import React, {useState} from 'react';

function Second() {
    const [style,setStyle] = useState(true)
    const handleStyle = () => setStyle(!style)
    return (
        <>
            <h4 className={`${style?"text-primary":"text-danger"}`}>{style?"Training":"Development"} Website </h4>
           <p className="text-primary">{style?"https://web-ex.tech/":"https://new.webex.am/"}</p>
            <button type="button" className={`btn ${style?"btn-primary":"btn-danger"} me-md-2`} onClick={handleStyle}>Change</button>
        </>
    );
}

export default Second;