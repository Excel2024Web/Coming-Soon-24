'use client';
import React, { useRef } from "react";
import { Dialog } from "@mui/material";

const VideoDialog = ({ handleClose, open }) => {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      PaperProps={{
        className: "w-full rounded-2xl m-4 bg-transparent overflow-hidden",
      }}
      slotProps={{
        backdrop: {
          style: {
            opacity: 0.5,
            background: "linear-gradient(to right, #F16BF3, #339DDC)",
          },
        },
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className="video-container">
        <video
          ref={videoRef}
          preload="auto"
          autoPlay
          onClick={handleVideoClick}
          onTouchStart={handleVideoClick}
          className="w-full h-auto"
        >
          <source
            src="https://drive.google.com/drive/u/0/folders/1U25zYN2ACjM-IFitQHSFgrXvnjE5IWRb"
            type="video/mp4"
          />
        </video>
      </div>
    </Dialog>
  );
};

export default VideoDialog;
