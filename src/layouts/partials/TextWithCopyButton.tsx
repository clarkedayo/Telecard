"use client";
import React, { useState } from 'react';

interface TextWithCopyButtonProps {
  text: string;
}

const TextWithCopyButton: React.FC<TextWithCopyButtonProps> = ({ text }) => {
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  return (
    <div style={{ border: '1px solid gold', padding: '10px', display: 'inline-block' }}>
      <p>{text}</p>
      <button onClick={copyToClipboard}>Copy</button>
      {copySuccess && <div style={{ marginTop: '10px' }}>{copySuccess}</div>}
    </div>
  );
};

export default TextWithCopyButton;
