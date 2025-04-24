const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/users.json');

const getUsers = async () => {
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
};

module.exports = {
  getUsers,
};
