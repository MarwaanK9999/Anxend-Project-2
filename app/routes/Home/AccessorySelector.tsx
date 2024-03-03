//Needed imports for the component
import React, { useRef } from 'react';

//Interface for the accessory selector
interface AccessorySelectorProps {
  selectedAccessory: string;
  onSelectAccessory: (accessory: string, index: number) => void;
}

//Interface for the accessories
interface Accessory {
  src: string;
  alt: string;
}

//The AccessorySelector and the images it will contain
const AccessorySelector: React.FC<AccessorySelectorProps> = ({ selectedAccessory, onSelectAccessory }) => {
  const accessories: Accessory[] = [
    { src: 'images/Accessories/Acc1.png', alt: 'acc1' },
    { src: 'images/Accessories/acc2.jfif', alt: 'acc2' },
    { src: 'images/Accessories/acc3.png', alt: 'acc3' },
    { src: 'images/Accessories/acc4.jpg', alt: 'acc4' },
    { src: 'images/Accessories/acc5.jpg', alt: 'acc5' },
    { src: 'images/Accessories/acc6.jpg', alt: 'acc6' },
    { src: 'images/Accessories/acc7.jfif', alt: 'acc7' },
    { src: 'images/Accessories/acc8.jpg', alt: 'acc8' },
    { src: 'images/Accessories/acc9.jfif', alt: 'acc9' },
    { src: 'images/Accessories/acc10.jpg', alt: 'acc10' },
    { src: 'images/Accessories/acc11.jpg', alt: 'acc11' },
    { src: 'images/Accessories/acc12.jfif', alt: 'acc12' },
    { src: 'images/Accessories/acc13.jpg', alt: 'acc13' },
    { src: 'images/Accessories/acc14.jpg', alt: 'acc14' },
    { src: 'images/Accessories/acc15.jpg', alt: 'acc15' },
  ];
  
  const accessoryContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (accessoryContainerRef.current) {
        accessoryContainerRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (accessoryContainerRef.current) {
        accessoryContainerRef.current.scrollLeft += 100;
    }
  };

  return (
    <div className="flex items-center space-x-4 overflow-x-auto p-4 bg-gray-200">
      <h2 className="text-lg font-bold">Select An Accessory To Receive Your Question</h2>
      <div className="flex space-x-4">
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded-md focus:outline-none"
          onClick={scrollLeft}
        >
          {'<'}
        </button>
        <div className="flex space-x-4 overflow-x-auto" ref={accessoryContainerRef}>
          {accessories.map((accessory, index) => (
            <img
              key={accessory.src}
              src={accessory.src}
              alt={accessory.alt}
              className={`cursor-pointer h-16 w-16 rounded-full ${selectedAccessory === accessory.src ? 'border-4 border-blue-500' : ''}`}
              onClick={() => onSelectAccessory(accessory.src, index)}
            />
          ))}
        </div>
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded-md focus:outline-none"
          onClick={scrollRight}
        >
          {'>'}
        </button>
      </div>
    </div>

  );
};

export default AccessorySelector;