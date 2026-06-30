String.prototype.capitalize = function() {
  return this.replace(/^[a-z]/, c => String.fromCharCode(c.charCodeAt(0)-32))
}
