import {Controller} from "stimulus"

export default class extends Controller {
  static targets = [ "pageItem", "pageProduct" ]
  static values = { index: Number }

  next(event) {
    event.preventDefault()
    this.indexValue++
    if(this.indexValue == 6)
      this.indexValue = 1
  }

  prev(event) {
    event.preventDefault()
    this.indexValue--
    if(this.indexValue == 0)
      this.indexValue = 5
  }

  indexValueChanged() {
    this.showPagination()
  }

  showPagination() {
    this.pageItemTargets.forEach((element, index) => {
      if(index + 1 == this.indexValue)
        element.className = "active"
      else 
        element.className = "waves-effect"
    })

    this.pageProductTargets.forEach((element, index) => {
      if(index + 1 == this.indexValue)
        element.style.display = 'none'
      else 
        element.style.display = ''
    })
  }
  setIndex(event) {
    event.preventDefault()
    this.indexValue = Number(event.target.dataset.value)
  }
}