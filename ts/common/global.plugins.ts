import * as $ from 'jquery'

export default {
   loadJquery() {
      /* tslint:disable:no-string-literal */
      window['$'] = $
   },
}
