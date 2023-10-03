"use client";
import React from "react";

export default function Revealable({ children }) {
  const [isRevealed, setisRevealed] = React.useState(false);

  return isRevealed ? (
    children
  ) : (
    <div className="reveal">
      <button onClick={() => setisRevealed(true)}>Reveal Content</button>
    </div>
  );
}
