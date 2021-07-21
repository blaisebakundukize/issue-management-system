'use strict';

import { hashPassword } from '../../helpers/auth.helpers';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'admin 1',
      email: 'admin1@gmail.com',
      password: hashPassword('password'),
      isStaff: false,
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'member staff 1',
      email: 'memberstaff1@gmail.com',
      password: hashPassword('password'),
      isStaff: true,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    
    {
      name: 'member staff 2',
      email: 'memberstaff2@gmail.com',
      password: hashPassword('password'),
      isStaff: true,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      name: 'member 1',
      email: 'member1@gmail.com',
      password: hashPassword('password'),
      isStaff: false,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
    
    {
      name: 'member 2',
      email: 'member2@gmail.com',
      password: hashPassword('password'),
      isStaff: true,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'member 3',
      email: 'member3@gmail.com',
      password: hashPassword('password'),
      isStaff: true,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
    
     {
      name: 'member 4',
      email: 'member4@gmail.com',
      password: hashPassword('password'),
      isStaff: true,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
     
      {
      name: 'member 5',
      email: 'member5@gmail.com',
      password: hashPassword('password'),
      isStaff: true,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('Users', null, {});
  }
};
