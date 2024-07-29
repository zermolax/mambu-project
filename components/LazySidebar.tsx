import Sidebar from './Sidebar';

interface LazySidebarProps {
  type: 'kids' | 'roma';
  categories: string[];
  bookRecommendation: {
    title: string;
    imageUrl: string;
    price: number;
    link: string;
  };
}

const LazySidebar: React.FC<LazySidebarProps> = (props) => {
  return <Sidebar {...props} />;
};

export default LazySidebar;