import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Collaborator from 'App/Models/Collaborator'
import Companie from 'App/Models/Companie'

export default class CollaboratorsController {
  public async index({}: HttpContextContract) {
    //const collaborator = await Collaborator.all()

    const collaborator = await Collaborator.query().select().groupBy('id').preload('id_companie')
    return collaborator
  }

  public async create({ request }: HttpContextContract) {
    let data = request.only(['nomecol', 'cargo', 'salario', 'companie_id'])
    //const collaborator = await (await Collaborator.create(data)).preload('id_companie')

    const collaborator = await Collaborator.create(data)

    return collaborator
  }

  public async query({}: HttpContextContract) {
    const companie = await Database.from('companies').select('id')

    return companie
  }

  public async show({ params }: HttpContextContract) {
    const collaborator = await Collaborator.findOrFail(params.id)

    return collaborator
  }

  public async update({ request, params }: HttpContextContract) {
    const collaborator = await Collaborator.findOrFail(params.id)
    const data = request.only(['nomecol', 'cargo', 'salario', 'companie_id'])

    collaborator.merge(data)

    await collaborator.save()

    return collaborator
  }

  public async destroy({ params }: HttpContextContract) {
    const collaborator = await Collaborator.findOrFail(params.id)

    await collaborator.delete()
    return 'Sucess'
  }
}
