import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext/authContext";
import { Button } from "../../Button";

export function AuthButton() {
  const { user, toggleAuth } = useContext(AuthContext);
  const { isAuthorized, name: userName } = user;

  return (
    <Button
      text={isAuthorized ? `Выйти (${userName})` : "Войти"}
      onClick={toggleAuth}
    />
  );
}
