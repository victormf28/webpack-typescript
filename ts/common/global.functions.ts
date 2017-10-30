import Sb from './Sb'
export default {
   log() {
      /* tslint:disable:no-string-literal */
      window['log'] = (...args) => {
         if (process.env.NODE_ENV !== 'production') {
            console.log.apply(console, args)
         }
      }
   },
   Sb() {
      window['Sb'] = Sb
   },
}
