export default class Login {
   private dom: any = {}
   private st: any = {}

   private defaults: any = {
      ele: '.ele',
      parent: '.parent',
   }

   private catchDom() {
      this.dom.parent = $(this.st.parent)
      this.dom.ele = $(this.st.ele)
   }

   private fn: any = {
      setup: () => {
         log('Loading Login ...', this.st.parent)
      },
   }

   constructor(params?) {
      this.st = Object.assign({}, this.defaults, params)
      this.catchDom()

      this.fn.setup()
   }
}
