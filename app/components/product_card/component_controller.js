import {Controller} from "stimulus"

export default class extends Controller {
  delete(){
    const element = this.element
    element.style.display = 'none'
    M.toast({html: 'Produto deletado!'})
  }
}