function buildPanWrapList(arr) {
  const pan = document.createElement('horizontal-pan')
  
  pan.innerHTML = `<wrap-list>${
    arr.map(creature => `<li>${creature}</li>`).join('')
  }</wrap-list>`

  return pan
}
