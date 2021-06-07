import React from 'react'
import './index.css'
function AvatarShot() {
    const Shot = async () => {
        let video = document.querySelector("video")
        navigator.mediaDevices.getUserMedia({
            video: {
                width: 360,
                height: 360
            },
            audio: true
        }).then((stream) => {
            video.srcObject = stream
            video.setAttribute("autoplay", true)
            video.setAttribute("muted", true)
        })

    }
    return (
        <>
            <div className="avatar" onClick={Shot}>

            </div>
            <div id="camerabox">
                <video autoplay muted></video>
            </div>
        </>
    )
}

export default AvatarShot
