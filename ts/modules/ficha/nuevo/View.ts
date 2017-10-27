import FilterConcessionaire from './FilterConcessionaire'
import ListVersions from './ListVersions'

new FilterConcessionaire({
   parent: '.parent-1',
})

new FilterConcessionaire({
   parent: '.parent-2',
})

new ListVersions()
// console.log("process.env.NODE_ENV", process.env.NODE_ENV())
// JSON.parse(process.env.NODE_PATHS)
