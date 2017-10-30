import bootstrap from './../../../bootstrap'

import AllModules from './../../AllModules'
import AllController from './../AllController'

import FilterConcessionaire from './FilterConcessionaire'
import ListVersions from './ListVersions'

bootstrap.load()
AllModules.load()
AllController.load()

new FilterConcessionaire({
   parent: '.parent-1',
})

new FilterConcessionaire({
   parent: '.parent-2',
})

new ListVersions()
