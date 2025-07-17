export default (Alpine) => {
  Alpine.data("state", () => ({
    isOpen: false,
    toggle() {
      this.isOpen = !this.isOpen
    }
  }))
  Alpine.data("lightbox", () => ({
    isOpen: false,
    imgSrc: '',
    open(src) {
      this.imgSrc = src
      this.isOpen = true
    },
    close() {
      this.imgSrc = ''
      this.isOpen = false
    }
  }))
}