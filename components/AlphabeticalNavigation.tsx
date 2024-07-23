'use client';

import { useRouter } from 'next/navigation';

export default function AlphabeticalNavigation() {
  const router = useRouter();
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const handleLetterClick = (letter: string) => {
    router.push(`/kids?letter=${letter}`);
  };

  return (
    <div className="flex flex-col items-center">
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => handleLetterClick(letter)}
          className="py-1 px-2 hover:bg-gray-200 rounded"
        >
          {letter}
        </button>
      ))}
    </div>
  );
}