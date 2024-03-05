import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectSearchQuery } from "../../redux/selectors.js";
import { Contact } from "../Contact/Contact.jsx";
import { openContactModal } from "../../redux/modal/slice.js";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchQuery = useSelector(selectSearchQuery);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.number.includes(searchQuery)
  );

  const handleContactClick = (contactId) => {
    dispatch(openContactModal({ contactId }));
  };

  return (
    <div className={css.container}>
      <div className={css.listContainer}>
        <h3 className={css.title}>Contacts</h3>
        <ul className={css.list}>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <li
                className={css.item}
                key={id}
                // onClick={() => handleContactClick(id)}
              >
                <Contact
                  handleContactClick={handleContactClick}
                  id={id}
                  name={name}
                  number={number}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
