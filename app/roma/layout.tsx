import React from 'react';

export default function RomaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="roma-layout font-lora">
      <div className="roma-content p-4">
        {children}
      </div>
    </div>
  )
}