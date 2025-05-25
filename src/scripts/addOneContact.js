import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const newContact = createFakeContact();
    const oldContacts = await readContacts();
    const allContacts = [newContact, ...oldContacts];
    await writeContacts(allContacts);
  } catch (error) {
    console.log('error:', error);
  }
};

addOneContact();
