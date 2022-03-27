import Route from '@ioc:Adonis/Core/Route'

//Routes Companie
Route.post('/companies', 'CompaniesController.create')
Route.get('/companies', 'CompaniesController.index')
Route.get('/companies/:id', 'CompaniesController.show')
Route.put('/companies/:id', 'CompaniesController.update')
Route.delete('/companies/:id', 'CompaniesController.destroy')

//Routes Collaboratores
Route.post('/collaborators', 'CollaboratorsController.create')
Route.get('/collaborators', 'CollaboratorsController.index')
