import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeContactModal } from "../../redux/modal/slice";
import {
  selectContactIdForModal,
  selectContactById,
  selectModal,
} from "../../redux/modal/selectors";
import { deleteContact } from "../../redux/operations";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import css from "./Modal.module.css";
import { useState } from "react";
import { EditForm } from "../EditForm/EditForm";

import { IoMdContact } from "react-icons/io";
export const Modal = () => {
  const dispatch = useDispatch();
  const [isEditNow, setIsEditNow] = useState(false);
  const isModalOpen = useSelector(selectModal);
  const selectedContactId = useSelector(selectContactIdForModal);
  const selectedContact = useSelector((state) =>
    selectContactById(state, selectedContactId)
  );

  const closeModal = useCallback(() => {
    dispatch(closeContactModal());
    setIsEditNow(false);
  }, [dispatch]);

  const handleRemove = () => {
    dispatch(deleteContact(selectedContactId));
    dispatch(closeContactModal());
    setIsEditNow(false);
  };

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isModalOpen, closeModal]);

  return (
    <div
      style={{ display: isModalOpen ? "flex" : "none" }}
      className={css.modalOverlay}
      onClick={handleClickOutside}
    >
      {selectedContact && (
        <div className={css.wrapper}>
          <div className={css.container}>
            <div className={css.userInfoContainer}>
              <IoMdContact className={css.avatar} />
              <div className={css.contactInfo}>
                <div>
                  <p className={css.userName}>Name: {selectedContact.name}</p>
                  <p>Number: {selectedContact.number}</p>
                </div>
              </div>
            </div>
            <div
              style={{ height: isEditNow ? "50px" : "86px" }}
              className={css.btnContainer}
            >
              <button className={css.btn} onClick={closeModal}>
                <IoMdClose size={20} />
              </button>
              {!isEditNow && (
                <button className={css.btn} type="button">
                  <FaRegEdit
                    className={css.btnIcon}
                    size={16}
                    onClick={setIsEditNow}
                  />
                </button>
              )}
              <button className={css.btn} type="button" onClick={handleRemove}>
                <RiDeleteBin6Line className={css.btnIcon} size={18} />
              </button>
            </div>
          </div>
          {isEditNow && (
            <EditForm
              id={selectedContact.id}
              name={selectedContact.name}
              number={selectedContact.number}
              setIsEditNow={setIsEditNow}
            />
          )}
        </div>
      )}
    </div>
  );
};
