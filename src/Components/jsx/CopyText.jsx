import React from 'react'

function CopyText(val) {

  console.log(val.sharableLink)

  const copyToClipboard = () => {
    console.log('copyToClipboard started')
    const textArea = document.createElement('textarea')
    textArea.value = val.sharableLink
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    alert('copy done')
  }

  const openLink = () => {
    window.location.href=val.sharableLink
  }
  return (
    <div>
      <input type="text" defaultValue={val.sharableLink} />
      <button onClick={copyToClipboard}>copy</button>
      <button onClick={openLink}>Open Link</button>
    </div>
  )
}

export default CopyText