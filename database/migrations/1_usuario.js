'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokensSchema extends Schema {
  up () {
    this.create('users', (table) => {
        table.increments('id').notNullable().unique()
        table.string('nome', 80).notNullable().unique()
        table.string('email', 254).notNullable().unique()
        table.string('password', 60).notNullable()
        table.string('categoria', 100).notNullable()
        table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = TokensSchema
