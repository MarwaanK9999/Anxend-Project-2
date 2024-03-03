//Necessary imports for the component
import React, { useRef } from 'react';

//The interface of the AvatarSelector
interface AvatarSelectorProps {
  selectedAvatar: string;
  onSelectAvatar: (avatar: string) => void;
}

//The interface of the avatar
interface Avatar {
  src: string;
  alt: string;
}

//THe avatar selector and the images it will containt
const AvatarSelector: React.FC<AvatarSelectorProps> = ({ selectedAvatar, onSelectAvatar }) => {
  const avatars: Avatar[] = [
    { src: 'images/Avatars/ballerina-shoes.svg', alt: 'Ballerina Shoes' },
    { src: 'images/Avatars/croupier.svg', alt: 'Croupier' },
    { src: 'images/Avatars/director.svg', alt: 'Director' },
    { src: 'images/Avatars/librarian.svg', alt: 'Librarian' },
    { src: 'images/Avatars/policeman.svg', alt: 'Policeman' },
    { src: 'images/Avatars/welder.svg', alt: 'Welder' },
  ];
  
  const avatarContainerRef = useRef<HTMLDivElement>(null);

  //Scroller element to cycle through the avatars
  const scrollLeft = () => {
    if (avatarContainerRef.current) {
      avatarContainerRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (avatarContainerRef.current) {
      avatarContainerRef.current.scrollLeft += 100;
    }
  };

  return (
    <div className="flex items-center space-x-4 overflow-x-auto p-4 bg-gray-200">
      <h2 className="text-lg font-bold">Select Your Avatar</h2>
      <div className="flex space-x-4">
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded-md focus:outline-none"
          onClick={scrollLeft}
        >
          {'<'}
        </button>
        <div className="flex space-x-4 overflow-x-auto" ref={avatarContainerRef}>
          {avatars.map((avatar) => (
            <img
              key={avatar.src}
              src={avatar.src}
              alt={avatar.alt}
              className={`cursor-pointer h-16 w-16 rounded-full ${selectedAvatar === avatar.src ? 'border-4 border-blue-500' : ''}`}
              onClick={() => onSelectAvatar(avatar.src)}
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

export default AvatarSelector;
