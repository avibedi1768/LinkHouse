import React from 'react'

function CopyText(para) {

  console.log(para.first + para.second)

  const copyToClipboard = () => {
    console.log('copyToClipboard started')
    const textArea = document.createElement('textarea')
    textArea.value = para.first + para.second
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    alert('copy done')
  }

  const openLink = () => {
    window.location.href=para.first + para.second
  }
  return (
    <div>
      <input type="text" defaultValue={para.first + para.second} />
      <button onClick={copyToClipboard}>copy</button>
      <button onClick={openLink}>Open Link</button>
    </div>
  )
}

export default CopyText