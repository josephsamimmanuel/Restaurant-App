import React from 'react'
import { Modal, Button } from 'antd'

function DialogBox({ open, handleCancel, handleConfirm, title, message }) {
  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      footer={null}
      centered
      className="normal-dialog"
    >
      <div className="bg-white rounded-lg p-6 sm:p-3">
        <h2 className="text-xl sm:text-2xl font-semibold text-green-800 mb-6 rounded-md border-b border-green-800 p-2">
          {title}
        </h2>

        <p className="text-black mb-6">
          {message}
        </p>

        <div className="flex justify-end gap-3">
          <Button
            onClick={handleCancel}
            className="border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900"
          >
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={handleConfirm}
            className="bg-green-600 hover:bg-green-700 border-none"
          >
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default DialogBox
