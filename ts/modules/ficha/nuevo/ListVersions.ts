import * as $ from 'jquery'
import Sb from './Sb.ts'

export default class FilterConcessionaire {
   private dom: any = {}
   private st: any = {}

   private defaults: any = {
      ele: '.ele',
      parent: '.parent',
   }

   private catchDom() {
      this.dom.parent = $(this.st.parent)
      this.dom.ele = $(this.st.ele, this.dom.parent)
   }

   private fn: any = {
      setup: () => {
         // console.log('Loading List Version ...', this.st.parent)
      },
   }

   constructor(params?) {
      this.st = Object.assign({}, this.defaults, params)
      this.catchDom()
      this.fn.setup()

      setTimeout(() => {
         Sb.run('FilterConcessionaire:demo', 'probando pubsub', 'lala')
      }, 2000)
   }
}
