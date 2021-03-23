import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "message", "counter" ]

  connect() {
    this._setMaxLengthAttribute()
    this._setCounterStartValue()
  }

  updateCounter() {
    this.counterTarget.innerText = this._charactersRemaining
  }

  _setMaxLengthAttribute() {
    this.messageTarget.setAttribute("maxLength", this._maxLength)
  }

  _setCounterStartValue() {
    this.counterTarget.innerText = this._maxLength
  }

  get _charactersRemaining() {
    return this._maxLength - this._currentLength
  }

  get _currentLength() {
    return this.messageTarget.value.length
  }

  get _maxLength() {
    return this.data.get("maxLength")
  }
}
