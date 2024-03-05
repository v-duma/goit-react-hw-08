import { ContactForm } from "../../components/ContactForm/ContactForm";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { ContactList } from "../../components/ContactList/ContactList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";
import { Modal } from "../../components/Modal/Modal";
import css from "./ContactsPage.module.css";
import { DocumentTitle } from "../../components/DocumentTitle/DocumentTitle";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <DocumentTitle>Contacts</DocumentTitle>
      <div className={css.container}>
        <ContactForm />
        <div className={css.contentContainer}>
          <SearchBox />
          <ContactList />
        </div>
        <Modal />
      </div>
    </>
  );
}
