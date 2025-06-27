import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const oldContacts = await readContacts();
    await writeContacts([...oldContacts, createFakeContact()]);
  } catch (err) {
    console.error(err);
  }
};

addOneContact();
