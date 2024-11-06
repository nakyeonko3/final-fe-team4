import { Slot } from '@radix-ui/react-slot';
import { Download, Layers2, Layers3, RefreshCw, RotateCcw, Save, Upload } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  asChild?: boolean;
  iconBgColor?: string;
  iconColor?: string;
  width?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      label,
      asChild = false,
      iconBgColor = 'bg-gray-100',
      iconColor = 'text-black',
      width = '228px',
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center text-sm font-medium transition-colors',
          'hover:bg-gray-100',
          'bg-gray-50',
          className
        )}
        aria-label={label}
        {...props}
        style={{
          display: 'flex',
          width,
          padding: '8px 10px',
          alignItems: 'center',
          gap: '8px',
          borderRadius: '8px',
        }}
      >
        <span
          className={cn(iconBgColor, iconColor, 'flex items-center justify-center')}
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '5px',
          }}
        >
          {React.cloneElement(icon as React.ReactElement, { width: 13, height: 13 })}
        </span>
        <span
          style={{
            color: 'var(--Text-primary, #1B1B1B)',
            fontFamily: 'Pretendard',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
          }}
        >
          {label}
        </span>
      </Comp>
    );
  }
);
IconButton.displayName = 'IconButton';

export function UploadButton() {
  return (
    <IconButton
      icon={<Upload />}
      label="텍스트 파일 업로드"
      iconBgColor="bg-purple-100"
      iconColor="text-purple-500"
      width="167px"
    />
  );
}

export function SaveButton() {
  return (
    <IconButton
      icon={<Save />}
      label="저장"
      iconBgColor="bg-pink-50"
      iconColor="text-pink-500"
      width="76px"
    />
  );
}

export function RecreateButton() {
  return (
    <IconButton
      icon={<RefreshCw />}
      label="재생성"
      iconBgColor="bg-blue-50"
      iconColor="text-blue-600"
      width="90px"
    />
  );
}

export function DownloadButton() {
  return (
    <IconButton
      icon={<Download />}
      label="다운로드"
      iconBgColor="bg-blue-50"
      iconColor="text-blue-600"
      width="104px"
    />
  );
}

export function ApplySelectionButton() {
  return (
    <IconButton
      icon={<Layers2 />}
      label="선택 적용"
      iconBgColor="bg-blue-50"
      iconColor="text-blue-600"
    />
  );
}

export function ApplyAllButton() {
  return (
    <IconButton
      icon={<Layers3 />}
      label="전체 적용"
      iconBgColor="bg-blue-50"
      iconColor="text-blue-600"
    />
  );
}

export function ResetChangesButton() {
  return (
    <IconButton
      icon={<RotateCcw />}
      label="변경 초기화"
      iconBgColor="bg-blue-50"
      iconColor="text-blue-600"
    />
  );
}

export { IconButton };
