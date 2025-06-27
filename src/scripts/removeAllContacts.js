import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  fs.writeFile(PATH_DB, '[]', { encoding: 'utf-8' });
};

removeAllContacts();
