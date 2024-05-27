import React from "react";
import { WhiteButton } from "../../styles/components/Button";
import { useCaptureMode } from "../../stores/useCaptureMode";
import CameraIcon from "./icons/CameraIcon";
import { useAlertModal } from "../../stores/useAlertModal";

function SaveContainer() {
  const { toggleCaptureMode } = useCaptureMode();
  const { openAlertModal } = useAlertModal();
  const startCaptureMode = () => {
    toggleCaptureMode();
    openAlertModal("캡처모드입니다.\n종료하려면 아래의 종료 버튼을 누르세요.");
  };

  return (
    <WhiteButton onClick={startCaptureMode} type="button">
      <CameraIcon />
    </WhiteButton>
  );
}

export default SaveContainer;
