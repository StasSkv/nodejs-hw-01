import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    const oldContacts = await readContacts();
    const allContacts = [...newContacts, ...oldContacts];
    await writeContacts(allContacts);
  } catch (error) {
    console.log('error:', error);
  }
};

generateContacts(5);
