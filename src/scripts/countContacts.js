import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    const allContacts = await getAllContacts();
    return allContacts.length;
  } catch (error) {
    console.log('error:', error);
  }
};

console.log(await countContacts());
