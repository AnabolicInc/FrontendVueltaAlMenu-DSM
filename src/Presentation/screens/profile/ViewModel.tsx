import React, { useContext } from "react";
import { AuthContext } from "../../context/auth/AuthContext";

const ProfileViewModel = () => {

    
    const {status,user} = useContext(AuthContext);

    
    const onChange = () => {
        // Do something
    }

    const isValidFrom = () => {
        // Do something
    }
    
    return{
        onChange,
        isValidFrom,
        user,
        status
    }
}

export default ProfileViewModel;