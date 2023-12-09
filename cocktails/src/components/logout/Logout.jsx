import { useEffect, useContext } from "react";

import * as authService from '../../services/authService';
import { useNavigate } from "react-router-dom";
import Path from "../../paths";
import AuthContext from "../../contexts/authConext";

export default function Logout() {
    const {logoutHandler} = useContext(AuthContext)
    const navigate = useNavigate
    useEffect(() => {
        authService.logout()
        .then(() => logoutHandler())
        .catch(() => navigate(Path.Home))
    }, []);
    return null;
}