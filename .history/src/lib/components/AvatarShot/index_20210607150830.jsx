import React from 'react'
import './index.css'
function AvatarShot() {
    const Shot = async () => {
        let camera = document.createElement("video")
        console.log(navigator)
        let mediaStream = await navigator.mediaDevices.getUserMedia({
            video: {
                width: 360,
                height: 360
            },
            audio: true
        })
        camera.srcObject = mediaStream
        camera.autoplay = true
        camera.muted = true
        camera.height = "360px"
        camera.width = "360px"
        document.querySelector("html")

    }
    return (
        <div className="avatar" onClick={Shot}>
            12
        </div>
    )
}

export default AvatarShot
