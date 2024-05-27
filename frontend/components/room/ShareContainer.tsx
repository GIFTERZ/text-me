import React, { useState } from "react";
import { WhiteButton } from "../../styles/components/Button";
import ShareIcon from "./icons/ShareIcon";
import ShareModal from "./ShareModal";

function ShareContainer() {
  const [shareModal, setShareModal] = useState(false);

  const openNativeShareDialog = () => {
    navigator.share({
      title: "공유하기",
      url: window.location.href,
    });
  };

  const onShareClick = () => {
    if (!navigator.share) {
      setShareModal(true);
      return;
    }

    openNativeShareDialog();
  };

  return (
    <>
      {shareModal && <ShareModal close={() => setShareModal(false)} />}
      <WhiteButton onClick={onShareClick} type="button">
        <ShareIcon />
      </WhiteButton>
    </>
  );
}

export default ShareContainer;
