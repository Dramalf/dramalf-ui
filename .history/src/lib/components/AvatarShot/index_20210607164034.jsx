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
            var button = document.getElementById("takephoto")
            button.onclick = () => {
                video.srcObject = stream
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
                <button id="takephoto">点击拍照</button>
                <button id="closecamera" onclick={() => {
                    console.log(12)
                    let shot = document.getElementById("shot")
                    shot.className = "hide"
                    console.log(shot)
                }}>关闭</button>
            </div>

        </>
    )
}

export default AvatarShot
