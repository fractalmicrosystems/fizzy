import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "target" ]

  connect() {
    this.#scrollTargetIntoView()
  }

  #scrollTargetIntoView() {
    if(this.hasTargetTarget) {
      this.element.scrollTo({
        top: this.targetTarget.offsetTop,
        left: this.targetTarget.offsetLeft,
        behavior: "instant"
      })
    }
  }
}
