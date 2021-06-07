import React from 'react'
import './index.css'
function AvatarShot() {
    const Shot = async () => {

        let mediaStream = await navigator.mediaDevices.getUserMedia({
            video: {
                width: 360,
                height: 360
            },
            audio: true
        })
    }
    return (
        <div className="avatar" onClick={Shot}>
            <div id="camerabox">
                <video autoplay muted></video>
            </div>
        </div>
    )
}

export default AvatarShot
