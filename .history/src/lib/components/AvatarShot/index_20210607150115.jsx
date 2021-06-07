import React from 'react'
import './index.css'
function AvatarShot() {
    const Shot = async () => {
        let camera = document.createElement("video")
        let mediaStream = await navigator.mediaDevices.getUserMedia({
            video: {
                width: 375,
                height: 600
            },
            audio: true
        })
        camera.srcObject = mediaStream
        camera.autoplay = true

    }
    return (
        <div className="avatar" onClick={Shot}>
            12
        </div>
    )
}

export default AvatarShot
