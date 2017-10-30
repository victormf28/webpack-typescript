import GlobalFunctions from './common/global.functions'
import GlobalPlugins from './common/global.plugins'
export default {
   load() {
      GlobalFunctions.log()
      GlobalFunctions.Sb()

      GlobalPlugins.loadJquery()
   },
}
