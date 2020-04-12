const { LinValidator,Rule } = require('lin-mizar')
class testValidator extends LinValidator{
  constructor(){
    super()
    this.id = [
      new Rule('isInt',"需要一个正整数",{min:1})
    ]
  }
} 
module.exports = {
  testValidator
}