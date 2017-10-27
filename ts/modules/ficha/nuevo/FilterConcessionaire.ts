import * as $ from 'jquery'
import Sb from './Sb'
// /var/www/html/web-pack/ts/modules/ficha/nuevo/Sb.ts

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
      demo: (param, param1) => {
         // console.log('param', param)
         // console.log('param1', param1)
      },
      setup: () => {
         // console.log('Loading Filter Concessionaire ...', this.st.parent)
      },
   }

   constructor(params?) {
      this.st = Object.assign({}, this.defaults, params)
      this.catchDom()
      this.fn.setup()

      Sb.public('FilterConcessionaire:demo', this.fn.demo)
   }
}
