export const selectModal = state => state.modal.isContactModalOpen;

export const selectContactIdForModal = state => state.modal.selectedContactId;

export const selectContactById = (state, contactId) => {
    const contacts = state.contacts.items;
    const contact = contacts.find(contact => contact.id === contactId);
  
    return contact;
  };
  