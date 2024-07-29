import Image from 'next/image';

interface HeroProps {
  imageUrl: string;
  title: string;
  category?: string;
  description?: string;
}

const Hero: React.FC<HeroProps> = ({ imageUrl, title, category, description }) => {
  return (
    <div className="relative w-full h-[60vh] mb-8">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        quality={85}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center hero-title">
          {title}
        </h1>
        {category && <p className="text-xl mb-2">{category}</p>}
        {description && <p className="text-lg text-center max-w-2xl">{description}</p>}
      </div>
    </div>
  );
};

export default Hero;