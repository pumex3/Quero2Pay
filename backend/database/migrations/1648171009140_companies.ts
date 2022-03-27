import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Companies extends BaseSchema {
  protected tableName = 'companies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nomeemp', 200).notNullable()
      table.string('telefone')
      table.string('cnpj')
      table.string('cep')
      table.string('logradouro')
      table.string('complemento')
      table.string('bairro')
      table.string('localidade')
      table.string('uf')
      table.string('ibge')
      table.string('gia')
      table.string('ddd')
      table.string('siafi')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
