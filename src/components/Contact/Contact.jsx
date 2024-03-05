import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import { LuPhone } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdContact } from "react-icons/io";
import { MdDriveFileRenameOutline } from "react-icons/md";
import css from "../Contact/Contact.module.css";

export const Contact = ({ id, name, number, handleContactClick }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(deleteContact(id));
  return (
    <div className={css.container}>
      <div className={css.wrapper} onClick={() => handleContactClick(id)}>
        <IoMdContact className={css.avatar} />
        <div className={css.userInfoContainer}>
          <p className={css.name}>
            <MdDriveFileRenameOutline className={css.iconInfo} /> {name}
          </p>
          <p className={css.number}>
            <LuPhone className={css.iconInfo} /> {number}
          </p>
        </div>
      </div>
      <div className={css.btnContainer}>
        <button
          className={css.btn}
          type="button"
          onClick={() => handleContactClick(id)}
        >
          <RxHamburgerMenu className={css.icon} />
        </button>
        <button className={css.btn} type="button" onClick={handleRemove}>
          <RiDeleteBin6Line className={css.icon} />
        </button>
      </div>
    </div>
  );
};
