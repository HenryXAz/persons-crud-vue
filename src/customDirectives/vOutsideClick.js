const vOutsideClick = {
  mounted: (el, {value: {listener, triggers}}) => {
    el.__outsideClickHandler__ = (event) => {
      const targetId = event.target.id

      if(!(event.target === el.target || el.contains(event.target) ) && !triggers.includes(targetId)) {
        listener()
      }
    }

    document.body.addEventListener('click', el.__outsideClickHandler__)
  },
  unmounted: (el) => {
    document.body.removeEventListener('click', el.__outsideClickHandler__)
  }
}

export default vOutsideClick