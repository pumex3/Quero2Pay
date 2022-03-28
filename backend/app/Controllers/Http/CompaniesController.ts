import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Companies from 'App/Models/Companie'
import axios from 'axios'

export default class CompaniesController {
  public async index({}: HttpContextContract) {
    //const companies = await Companies.all()
    //const dataEmp = await Companies.query().select('id').preload('collaborators')
    const data = await Companies.query().select().groupBy('id').preload('collaborator')
    return data
  }

  public async create({ request }: HttpContextContract) {
    const data = request.only([
      'nomeemp',
      'telefone',
      'cnpj',
      'cep',
      'logradouro',
      'complemento',
      'bairro',
      'localidade',
      'uf',
      'ibge',
      'gia',
      'ddd',
      'siafi',
    ])

    const companie = await Companies.create(data)

    return companie
  }

  public async show({ params }: HttpContextContract) {
    //const companie = await Companies.findOrFail(params.id)
    const data = await Companies.query().select().where({ id: params.id }).preload('collaborator')

    return data
  }

  public async update({ request, params }: HttpContextContract) {
    //const companie = await Companies.findOrFail(params.id)
    //const companie = await Companies.query().select('id').groupBy('id').preload('collaborator')
    const companie = await Companies.findOrFail(params.id)
    const data = request.only([
      'nomeemp',
      'telefone',
      'cnpj',
      'cep',
      'logradouro',
      'complemento',
      'bairro',
      'localidade',
      'uf',
      'ibge',
      'gia',
      'ddd',
      'siafi',
    ])
    companie.merge(data)

    await companie.save()

    return companie
  }

  public async destroy({ params }: HttpContextContract) {
    const companie = await Companies.findOrFail(params.id)

    await companie.delete()
    return 'Sucess'
  }
}
