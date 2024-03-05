import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks";
import css from "./AppBar.module.css";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <div
        className={
          isLoggedIn ? css.navWrapperLoggedIn : css.navWrapperLoggedOut
        }
      >
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
