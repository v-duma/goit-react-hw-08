import { DocumentTitle } from "../../components/DocumentTitle/DocumentTitle";
import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div className={css.mainContainer}>
      <DocumentTitle>Home</DocumentTitle>
      <h1 className={css.mainH1}>Phonebook</h1>
      <p className={css.mainP}>
        Welcome to our online phone directory, where convenience and
        organization meet boundless possibilities!
      </p>
      <p className={css.mainP}>
        Here, you'll find swift access to the contacts you need, whether they're
        friends, family, or business associates. Our directory enables you to
        effortlessly manage your contacts, finding numbers and addresses with
        just a few clicks or taps. Say goodbye to cumbersome old phonebooks and
        embrace a modern, user-friendly approach to organizing your contact
        list.
      </p>
      <p className={css.mainP}>
        Join our online community today and effortlessly manage your contacts
        with our phone directory!
      </p>
    </div>
  );
}
