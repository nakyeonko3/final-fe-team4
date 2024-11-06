'use client';

import { Pause, Play } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

interface PlayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isPlaying?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
}

const PlayButton = React.forwardRef<HTMLButtonElement, PlayButtonProps>(
  ({ className, isPlaying = false, onPlay, onPause, ...props }, ref) => {
    const Icon = isPlaying ? Pause : Play;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (isPlaying) {
        onPause?.();
      } else {
        onPlay?.();
      }
    };

    return (
      <button
        ref={ref}
        className={cn(
          'flex items-center justify-center',
          'h-6 w-6 rounded-full',
          'bg-blue-900 hover:bg-blue-800',
          'transition-colors duration-200',
          className
        )}
        onClick={handleClick}
        aria-label={isPlaying ? 'Pause' : 'Play'}
        {...props}
      >
        <Icon className="h-3 w-3 text-white fill-white" />
      </button>
    );
  }
);

PlayButton.displayName = 'PlayButton';

export { PlayButton };
