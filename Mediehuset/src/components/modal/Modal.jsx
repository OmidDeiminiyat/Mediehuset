import React, { useState } from 'react';

export const Modal = ({ isOpen, onClose, children }) => {
  // If `isOpen` is false, don't render the modal
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
