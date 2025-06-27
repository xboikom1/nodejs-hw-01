import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    const updatedContacts = contacts.slice(0, -1);
    if (updatedContacts.length > 0) await writeContacts(updatedContacts);
  } catch (err) {
    console.error(err);
  }
};

removeLastContact();
