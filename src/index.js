const { prisma } = require("../db/config");

async function findUsersSortedByAgeAndName() {
  // Fetch all users sorted by age ascending, then name ascending (alphabetically)
  const users = await prisma.user.findMany({
    orderBy: [
      { age: 'asc' },
      { name: 'asc' } // Prisma sorts strings case-insensitively by default
    ]
  });

  return users; // returns an array of user objects
}

module.exports = { findUsersSortedByAgeAndName };
