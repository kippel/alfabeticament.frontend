"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';


function SilabaIdPage() {
  const [step, setStep] = useState(0);
  const card = [
    {
      word: "nou",
    },
    {
      word: "oii",
    },
  ];
  return (
    <div>
      <h1>Monosillabs</h1>
      <p>Monosillabs is a web development agency.</p>

      <div>
        <h2>{card[step].word}</h2>
        <Button onClick={() => setStep(step + 1)}>Next</Button>
      </div>
    </div>
  );
}

export default SilabaIdPage;