console.log("lala")
module.exports = {
   root: true,
   parser: 'typescript-eslint-parser',
   extends: 'standard',
   globals: {
       window : true,
       log : true
   },
   // "plugins": [
   //    "typescript"
   // ],
   rules: {
     "no-new": 1,
     "indent": ["error", 3]
   }
 }
