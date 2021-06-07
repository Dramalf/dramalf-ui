import React from 'react'
import './index.css'
function AvatarShot() {
    const Shot = async () => {
        let camera = document.createElement("video")
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
        camera.setAttribute("height", "360px")
        camera.setAttribute("width", "360px")
        camera.setAttribute("transform", "rotateY(180deg)")
        camera.setAttribute("id", "camera")
        let body = document.querySelector("body")
        body.appendChild(camera)

    }
    return (
        <div className="avatar" onClick={Shot}>
            12
        </div>
    )
}

export default AvatarShot
