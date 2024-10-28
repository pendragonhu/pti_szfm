import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notice, setNotice] = useState("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleLoginClick = () => {
        navigate("/bejelentkezes");
    };

    const signupWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        if (emailRegex.test(email) && password === confirmPassword) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                navigate("/");
            } catch {
                setNotice("Sajnálom, valami elromlott. Kérjük, próbálja újra.");
            }
        } else if (!emailRegex.test(email)) {
            setNotice("Érvénytelen e-mail cím. Kérjük, próbálja újra.");
        } else {
            setNotice("A jelszavak nem egyeznek. Kérjük, próbálja újra.");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <form className="col-md-4 mt-3 pt-3 pb-3" onSubmit={(e) => signupWithUsernameAndPassword(e)}>
                    {"" !== notice && (
                        <div className="alert alert-warning" role="alert">
                            {notice}
                        </div>
                    )}
                    <div className="form-floating mb-3">
                        <input
                            id="signupEmail"
                            type="email"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="signupEmail" className="form-label">
                            Adjon meg egy e-mail címet a felhasználónévhez
                        </label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            id="signupPassword"
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="signupPassword" className="form-label">
                            Jelszó
                        </label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            id="confirmPassword"
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label htmlFor="confirmPassword" className="form-label">
                            Jelszó megerősítése
                        </label>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary pt-3 pb-3">
                            Regisztráció
                        </button>
                    </div>
                    <div className="mt-3 text-center">
                        <span>
                            Vissza a bejelentkezéshez?{" "}
                            <button className="btn-link" onClick={handleLoginClick}>
                                Kattintson ide.
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
