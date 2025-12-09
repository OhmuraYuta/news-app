import { speakMessageHandler } from '@/features/chat/handlers';
import React, { useState } from 'react';
import { div } from 'three/webgpu';

export default function TestInput() {
  const [text, setText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(text);

    speakMessageHandler(text);
    
    setText('');
  }

  return (
    <div className='absolute bottom-0 z-50'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          className='border border-black'
        />
        <button type='submit'>送信</button>
      </form>
    </div>
  )
}