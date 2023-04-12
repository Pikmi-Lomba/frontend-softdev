import { useState } from "react";
import { Dialog } from "@headlessui/react";

export const ConfirmModal = ({
  title,
  desc,
  isOpen,
  onCancel,
  onOk,
  okText,
  cancelText,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onCancel ?? onOk}
      className="fixed z-10 bg-black bg-opacity-70 inset-0 flex justify-center items-center"
    >
      <Dialog.Panel className="bg-[#37787c] text-white w-96 px-6 py-4 rounded-xl flex flex-col gap-4 items-start">
        <Dialog.Title className="text-4xl font-bold">{title}</Dialog.Title>
        <Dialog.Description>{desc}</Dialog.Description>
        <div>
          <button
            onClick={onOk}
            className="bg-cyan-50 text-black px-4 py-2 rounded-xl"
          >
            {okText}
          </button>
          {cancelText && (
            <button onClick={onCancel} className="bg-green-600 px-4 py-3">
              {cancelText}
            </button>
          )}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
