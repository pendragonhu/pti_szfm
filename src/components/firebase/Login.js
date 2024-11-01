import React from "react";
import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");
    const handleSignupClick = () => {
        navigate("/signup");
    };

    const loginWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/profile"); // Abszolút útvonal a gyökértől
        } catch {
            setNotice("Rossz felhasználónév vagy jelszó.");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <form className="col-md-4 mt-3 pt-3 pb-3">
                    {"" !== notice &&
                        <div className="alert alert-warning" role="alert">
                            {notice}
                        </div>
                    }
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <label htmlFor="exampleInputEmail1" className="form-label">E-mail cím</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="exampleInputPassword1"
                            placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <label htmlFor="exampleInputPassword1" className="form-label">Jelszó</label>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary pt-3 pb-3"
                            onClick={(e) => loginWithUsernameAndPassword(e)}>Bejelentkezés</button>
                    </div>
                    <div className="mt-3 text-center">
                        <span>Szüksége van egy fiók regisztrációjára?{" "}
                            <button className="btn-link" onClick={handleSignupClick}>
                                Kattintson ide.
                            </button></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login