import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const allContacts = await readContacts();
    return allContacts;
  } catch (error) {
    console.log('error:', error);
  }
};

console.log(await getAllContacts());
