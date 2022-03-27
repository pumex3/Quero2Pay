import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Companie from '../Models/Companie'

export default class Collaborator extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nomecol: string

  @column()
  public cargo: string

  @column()
  public salario: any

  @column()
  public companie_id: any

  @belongsTo(() => Companie, { foreignKey: 'companie_id' })
  public id_companie: BelongsTo<typeof Companie>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
