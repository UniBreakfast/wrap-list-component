function buildPanWrapList(arr) {
  const pan = document.createElement('horizontal-pan')
  
  pan.innerHTML = `<wrap-list>${
    arr.map(creature => `<li>${creature}</li>`).join('')
  }</wrap-list>`

  if (!stylesAdded) {
    const sheet = document.styleSheets[0]
    
    rules.forEach(rule => sheet.insertRule(rule, sheet.cssRules.length))
    stylesAdded = true
  }

  return pan
}

let stylesAdded = false

const rules = `
horizontal-pan {
  display: block;
  height: 300px;
  overflow: auto clip;
}

wrap-list {
  display: flex;
  flex-flow: column wrap;
  width: min-content;
  height: 100%;
  gap: 0 20px;
}

wrap-list>li {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 250px;
}
`.split('\n\n')
