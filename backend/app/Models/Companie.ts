/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Collaborator from './Collaborator'

export default class Company extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nomeemp: string

  @column()
  public telefone: string

  @column()
  public cnpj: string

  @column()
  public cep: string

  @column()
  public logradouro: string

  @column()
  public complemento: string

  @column()
  public bairro: string

  @column()
  public localidade: string

  @column()
  public uf: string

  @column()
  public ibge: string

  @column()
  public gia: string

  @column()
  public ddd: string

  @column()
  public siafi: string

  //@hasMany(() => Collaborator)
  //public collaborators: HasMany<typeof Collaborator>

  @hasMany(() => Collaborator, {
    foreignKey: 'companie_id', // defaults to userId
  })
  public collaborator: HasMany<typeof Collaborator>
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  static related: any
}
