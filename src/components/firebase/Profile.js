import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const Profile = () => {
    const navigate = useNavigate();
    const user = auth.currentUser;

    const logoutUser = async (e) => {
        e.preventDefault();

        try {
            await signOut(auth);
            navigate("/bejelentkezes");
          } catch (error) {
            console.error("Hiba történt a kijelentkezés során:", error);
          }
        };

    return(
        <div className = "container">
            <div className = "row justify-content-center">
                <div className = "col-md-4 text-center">
                    <p>Üdvözöljük! <em className = "text-decoration-underline">{ user.email }</em>. Ön bejelentkezett!</p>
                    <div className = "d-grid gap-2">
                        <button type = "button" className = "btn btn-primary pt-3 pb-3" onClick = {(e) => logoutUser(e)}>Kijelentkezés</button>
                    </div>                
                </div>
            </div>
        </div>       
    )    
}

export default Profile