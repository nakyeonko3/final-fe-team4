'use client';

import { AudioWaveform, CirclePlay, Volume2 } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

export const UNIT_SOUND_STATUS_TYPES = {
  SPEED: 'unit_speed',
  VOLUME: 'unit_volume',
  PITCH: 'unit_pitch',
} as const;

export type UnitStatusType = (typeof UNIT_SOUND_STATUS_TYPES)[keyof typeof UNIT_SOUND_STATUS_TYPES];

interface SoundStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  type: UnitStatusType;
  value: number;
}

export const STATUS_CONFIGS = {
  [UNIT_SOUND_STATUS_TYPES.SPEED]: { icon: CirclePlay, unit: 'x' },
  [UNIT_SOUND_STATUS_TYPES.VOLUME]: { icon: Volume2, unit: '%' },
  [UNIT_SOUND_STATUS_TYPES.PITCH]: { icon: AudioWaveform, unit: '' },
} as const;

const SoundStatus = React.forwardRef<HTMLDivElement, SoundStatusProps>(
  ({ className, type, value, ...props }, ref) => {
    const { icon: Icon, unit } = STATUS_CONFIGS[type];

    return (
      <div
        ref={ref}
        className={cn('w-fit flex items-center gap-2 bg-purple-50 rounded-lg px-3 py-2', className)}
        {...props}
      >
        <Icon className="w-4 h-4 text-purple-900 flex-shrink-0" />
        <span className="text-sm text-purple-900">
          {value.toFixed(1)}
          {unit}
        </span>
      </div>
    );
  }
);

SoundStatus.displayName = 'SoundStatus';

export { SoundStatus };
