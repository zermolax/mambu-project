import React from 'react';

export default function KidsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="kids-layout font-abeezee">
      {/* Aici puteți adăuga elemente comune pentru toate paginile din secțiunea kids, 
          dar fără meniurile redundante */}
      <div className="kids-content">
        {children}
      </div>
    </div>
  )
}