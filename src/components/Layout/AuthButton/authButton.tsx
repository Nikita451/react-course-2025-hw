import { useContext } from "react";
import {
  AuthContext,
  TEST_USER,
} from "../../../context/AuthContext/authContext";
import { Button } from "../../Button";

export function AuthButton() {
  const { user, setUser } = useContext(AuthContext);

  function handleChangeUser() {
    setUser(!user ? TEST_USER : "");
  }

  return (
    <Button
      text={user ? `Выйти (${user})` : "Войти"}
      onClick={handleChangeUser}
    />
  );
}
