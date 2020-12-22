import React, {useState} from 'react';
import axios from 'axios'

const Newsletter = () => {

    const [email, setEmail] = useState("");
    const [state, setState] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const subscribe = async () => {
        setState("Loading");
        try {
            const response = await axios.post("/api/newsletter", { email })
            setState("SUCCESS")
            setEmail('');
        } catch (e) {
            setErrorMessage(e.response.data.error);
            setState("ERROR");
            setEmail('');
        }
    }
    return (
        <div>
            <h1>이메일 보내기</h1>
            <div>
                <input type="text" value={email} placeholder={"Enter Email"} onChange={(e) => setEmail(e.target.value)}/>
                <button disabled={state === "Loading"} onClick={subscribe}>구독하기</button>
                <h4>{state}</h4>
                <h4>{errorMessage}</h4>
            </div>
        </div>
    );
};

export default Newsletter;