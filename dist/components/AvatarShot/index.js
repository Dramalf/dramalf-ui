"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

require("./index.css");

function AvatarShot() {
  var Shot = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var shot, video;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              shot = document.getElementById("shot");
              shot.className = "";
              video = document.querySelector("video");
              navigator.mediaDevices.getUserMedia({
                video: {
                  width: 350,
                  height: 350
                },
                audio: true
              }).then(function (stream) {
                video.srcObject = stream;
                var mediaStreamTrack = typeof stream.stop === 'function' ? stream : stream.getTracks()[1];

                video.onloadedmetadata = function (e) {
                  video.play();
                };

                video.setAttribute("autoplay", true);

                var captureImage = /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
                    var scale, canvas, img;
                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            scale = 0.8;
                            canvas = document.createElement("canvas");
                            canvas.width = video.videoWidth * scale;
                            canvas.height = video.videoHeight * scale;
                            canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
                            img = document.getElementById('avatarimg');
                            _context.next = 8;
                            return canvas.toDataURL("image/png");

                          case 8:
                            img.src = _context.sent;
                            console.log(img);

                          case 10:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function captureImage() {
                    return _ref2.apply(this, arguments);
                  };
                }();

                video.addEventListener('loadeddata', captureImage);
                var tp = document.getElementById("takephoto");

                tp.onclick = function () {
                  video.srcObject = stream;
                };

                var cc = document.getElementById("closecamera");

                cc.onclick = function () {
                  mediaStreamTrack && mediaStreamTrack.stop();
                  shot.className = "hide";
                };
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function Shot() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement("div", {
    id: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "avatar",
    onClick: Shot
  }, /*#__PURE__*/_react.default.createElement("img", {
    id: "avatarimg"
  })), /*#__PURE__*/_react.default.createElement("div", {
    id: "shot",
    className: "hide"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "camerabox"
  }, /*#__PURE__*/_react.default.createElement("video", {
    autoplay: true,
    muted: true
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "op"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bt",
    id: "takephoto"
  }, "\u62CD\u7167"), /*#__PURE__*/_react.default.createElement("div", {
    className: "bt",
    id: "closecamera"
  }, "\u5173\u95ED"))));
}

var _default = AvatarShot;
exports.default = _default;