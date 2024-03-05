import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../redux/filtersSlice";
import { selectSearchQuery } from "../../redux/selectors";
import { useId } from "react";
import css from "../SearchBox/SearchBox.module.css";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);

  const inputId = useId();

  const handleChange = (event) => {
    const query = event.target.value;
    dispatch(setSearchQuery(query));
  };

  return (
    <>
      <div className={css.searhBoxContainer}>
        <h3 className={css.titleMobile}>Search</h3>
        <h3 className={css.titleTablet}>Contacts</h3>
        <div className={css.inputContainer}>
          <input
            className={css.input}
            type="text"
            placeholder="Search contacts by name or number"
            id={inputId}
            value={searchQuery}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};
