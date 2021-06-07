import React, { useState } from 'react'
import './index.css'
function AvatarShot() {
    const [show, setshow] = useState(false);
    const Shot = async () => {
        let video = document.querySelector("video")
        let div = document.getElementById("avatar")
        setshow(true)
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

            var captureImage = function () {
                let scale = 0.8
                var canvas = document.createElement("canvas")
                canvas.width = video.videoWidth * scale
                canvas.height = video.videoHeight * scale
                canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height)
                var img = document.createElement('img');
                img.src = canvas.toDataURL("image/png")

                div.appendChild(img)
            }
            video.addEventListener('loadeddata', captureImage)
            var button = document.querySelector("button")
            button.onclick = () => {
                video.srcObject = stream
            }
        })

    }
    return (
        <>
            <div id="avatar" onClick={Shot}>

            </div>
            <div id="shot" display={!show ? "hidden" : "fixed"}>
                <div id="camerabox" >
                    <video autoplay muted></video>
                </div>
                <button>点击拍照</button>
            </div>

        </>
    )
}

export default AvatarShot
