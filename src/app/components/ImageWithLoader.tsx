"use client"
import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWithLoaderProps extends Omit<ImageProps, 'onLoadingComplete'> {
  containerClassName?: string;
  usePlainImg?: boolean;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({ 
  src, 
  alt, 
  containerClassName = "", 
  className = "", 
  usePlainImg = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse z-10 flex items-center justify-center">
           <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {usePlainImg ? (
        <img
          src={typeof src === 'string' ? src : ''}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`${className} transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          {...(props as any)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          onLoadingComplete={() => setIsLoaded(true)}
          className={`${className} transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          {...props}
        />
      )}
    </div>
  );
};

export default ImageWithLoader;
