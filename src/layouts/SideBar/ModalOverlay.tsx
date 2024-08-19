import React from 'react';

interface ModalOverlayProps {
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ setter }) => (
  <div
    className="fixed bottom-0 left-0 right-0 top-0 z-30 flex bg-black/50 md:hidden"
    onClick={() => setter((prev) => !prev)}
  />
);

export default ModalOverlay;
