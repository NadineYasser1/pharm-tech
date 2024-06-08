import React, { useContext } from "react";
import IconButton from "./IconButton";
import { AuthContext } from "../../store/AuthContext";
import { Colors } from "../../constants/GlobalColors";

const LogoutButton = () => {
    const authCtx = useContext(AuthContext);
    const handleLogout = () => {
        authCtx.logout();
    };
    return <IconButton icon="logout" color={Colors.primary800} size={26} onPress={handleLogout} />;
};

export default LogoutButton;
