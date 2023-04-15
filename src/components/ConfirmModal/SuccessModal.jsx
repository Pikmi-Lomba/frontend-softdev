import { Dialog } from "@headlessui/react";
import { createPortal } from "react-dom";

export const SuccessModal = ({ title, isOpen, onClickButton }) => {
  return (
    <>
      {createPortal(
        <Dialog
          open={isOpen}
          onClose={onClickButton}
          className="fixed z-10 right-0 bottom-0 flex justify-center items-center"
        >
          <Dialog.Panel className="absolute right-4 bottom-4 bg-green-600 text-white w-96 px-6 py-4 rounded-xl flex flex-col gap-4 items-start">
            <Dialog.Title className="text-xl font-bold">{title}</Dialog.Title>
          </Dialog.Panel>
        </Dialog>,
        document.getElementById("overlay")
      )}
    </>
  );
};
