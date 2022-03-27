import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Collaborators extends BaseSchema {
  protected tableName = 'collaborators'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nomecol', 200).notNullable()
      table.string('cargo').notNullable()
      table.float('salario').notNullable()
      table.integer('companie_id').unsigned().references('companies.id').onUpdate('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
