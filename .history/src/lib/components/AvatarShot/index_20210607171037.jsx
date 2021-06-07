import React, { useState } from 'react'
import './index.css'
function AvatarShot() {
    const Shot = async () => {
        let shot = document.getElementById("shot")
        shot.className = ""
        let video = document.querySelector("video")
        navigator.mediaDevices.getUserMedia({
            video: {
                width: 360,
                height: 360
            },
            audio: true
        }).then((stream) => {
            video.srcObject = stream
            let mediaStreamTrack = typeof stream.stop === 'function' ? stream : stream.getTracks()[1];
            video.onloadedmetadata = function (e) {
                video.play()
            }
            video.setAttribute("autoplay", true)
            var captureImage = async function () {
                let scale = 0.8
                var canvas = document.createElement("canvas")
                canvas.width = video.videoWidth * scale
                canvas.height = video.videoHeight * scale
                canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height)
                let img = document.getElementById('avatarimg');
                img.src = await canvas.toDataURL("image/png")
                console.log(img)
            }
            video.addEventListener('loadeddata', captureImage)
            let tp = document.getElementById("takephoto")
            tp.onclick = () => {
                video.srcObject = stream
            }
            let cc = document.getElementById("closecamera")
            cc.onclick = () => {
                mediaStreamTrack && mediaStreamTrack.stop();
                shot.className = "hide"
            }
        })

    }
    return (
        <>
            <div id="avatar" onClick={Shot}>
                <img id="avatarimg" />
            </div>
            <div id="shot" className="hide">
                <div id="camerabox" >
                    <video autoplay muted></video>
                </div>
                <p>
                    <button className="bt bt1" id="takephoto">拍照</button>
                    <button className="bt bt2" id="closecamera">关闭</button>
                </p>
            </div>

        </>
    )
}

export default AvatarShot
