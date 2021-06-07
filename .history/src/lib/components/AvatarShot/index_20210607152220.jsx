import React from 'react'
import './index.css'
function AvatarShot() {
    const Shot = async () => {
        let video = document.querySelector("video")
        let mediaStream = await navigator.mediaDevices.getUserMedia({
            video: {
                width: 360,
                height: 360
            },
            audio: true
        })
        video.srcObject = mediaStream
    }
    return (
        <div className="avatar" onClick={Shot}>
            <div id="camerabox">12
                <video autoplay muted></video>
            </div>
        </div>
    )
}

export default AvatarShot
