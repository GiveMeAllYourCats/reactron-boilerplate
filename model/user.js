const db = require('../public/db')

class User extends db.Model {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    return {
      // children: {
      //   relation: db.Model.HasManyRelation,
      //   modelClass: User,
      //   join: {
      //     from: 'users.id',
      //     to: 'users.parentId'
      //   }
      // }
    }
  }
}

module.exports = User
