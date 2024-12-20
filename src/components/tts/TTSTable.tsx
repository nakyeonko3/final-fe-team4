import * as React from 'react';
import { useCallback, useEffect } from 'react';
import { TbCirclePlus, TbTrash } from 'react-icons/tb';

import { DownloadButton, RecreateButton } from '@/components/buttons/IconButton';
import ViewButtonGroup from '@/components/buttons/ViewFilterButton';
import { TTSTableGrid } from '@/components/tts/TTSTableGrid';
import { TTSTableList } from '@/components/tts/TTSTableList';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface TTSListItem {
  id: string;
  text: string;
  isSelected: boolean;
  speed: number;
  volume: number;
  pitch: number;
}

interface TableHeaderProps {
  onDelete: () => void;
  onAdd: () => void;
  onSelectAll?: () => void;
  isAllSelected?: boolean;
  isListView: boolean;
  onViewChange: (isListView: boolean) => void;
  itemCount: number;
}

interface TableFooterProps {
  selectedCount: number;
  onRegenerate: () => void;
  onDownload: () => void;
  isListView?: boolean;
}

interface TTSTableProps {
  items: TTSListItem[];
  onSelectionChange: (id: string) => void;
  onTextChange: (id: string, newText: string) => void;
  onDelete: () => void;
  onAdd: () => void;
  onRegenerateItem: (id: string) => void;
  onDownloadItem: (id: string) => void;
  onPlay: (id: string) => void;
  onSelectAll?: () => void;
  isAllSelected?: boolean;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  onDelete,
  onAdd,
  onSelectAll,
  isAllSelected,
  isListView,
  onViewChange,
  itemCount,
}) => (
  <div className={cn('flex flex-col bg-white', !isListView ? 'rounded-md border' : 'border-b')}>
    <div className="flex items-center justify-between px-6 py-3">
      <div className="flex items-center space-x-4">
        <Checkbox
          checked={itemCount > 0 && isAllSelected}
          onCheckedChange={onSelectAll}
          className="mr-9"
        />
        <div onClick={onDelete} className="flex items-center gap-2 py-2 hover:cursor-pointer">
          <TbTrash className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-gray-800">삭제</span>
        </div>
        <Separator orientation="vertical" className="h-6 mr-2" />
        <div onClick={onAdd} className="flex items-center gap-2 py-2 hover:cursor-pointer">
          <TbCirclePlus className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-gray-800">텍스트 추가</span>
        </div>
      </div>
      <ViewButtonGroup isListView={isListView} onViewChange={onViewChange} />
    </div>
  </div>
);

export const TableFooter: React.FC<TableFooterProps> = ({
  selectedCount,
  onRegenerate,
  onDownload,
  isListView = true,
}) => (
  <div className={cn('bg-white', !isListView && 'rounded-md border mt-4')}>
    <div
      className={`flex items-center justify-between px-4 ${isListView ? 'py-4 border-t' : 'h-[40px]'}`}
    >
      <div className="text-sm text-black font-medium ml-2">선택 항목: {selectedCount}</div>
      {isListView && (
        <div className="flex items-center space-x-6 mr-2">
          <RecreateButton onClick={onRegenerate} />
          <DownloadButton onClick={onDownload} />
        </div>
      )}
    </div>
  </div>
);

export const TTSTable: React.FC<TTSTableProps> = ({
  items,
  onSelectionChange,
  onTextChange,
  onDelete,
  onAdd,
  onRegenerateItem,
  onDownloadItem,
  onPlay,
  onSelectAll,
  isAllSelected,
}) => {
  const selectedCount = items.filter((item) => item.isSelected).length;
  const [isListView, setIsListView] = React.useState(true);

  useEffect(() => {
    if (items.length === 0 && isAllSelected) {
      onSelectAll?.();
    }
  }, [items.length, isAllSelected, onSelectAll]);

  const handleRegenerate = useCallback(
    (itemId?: string) => {
      const selectedItems = items.filter((item) => item.isSelected);
      if (itemId) {
        onRegenerateItem(itemId);
      } else if (selectedItems.length > 0) {
        selectedItems.forEach((item) => onRegenerateItem(item.id));
      }
    },
    [items, onRegenerateItem]
  );

  const handleDownload = useCallback(
    (itemId?: string) => {
      const selectedItems = items.filter((item) => item.isSelected);
      if (itemId) {
        onDownloadItem(itemId);
      } else if (selectedItems.length > 0) {
        selectedItems.forEach((item) => onDownloadItem(item.id));
      }
    },
    [items, onDownloadItem]
  );

  const listItems = React.useMemo(
    () =>
      items.map((item) => ({
        id: item.id,
        text: item.text,
        isSelected: item.isSelected,
        onPlay: () => onPlay(item.id),
        speed: item.speed,
        volume: item.volume,
        pitch: item.pitch,
        onSelectionChange,
        onTextChange,
      })),
    [items, onPlay, onSelectionChange, onTextChange]
  );

  const gridItems = React.useMemo(
    () =>
      items.map((item) => ({
        id: item.id,
        text: item.text,
        isSelected: item.isSelected,
        audioUrl: '',
        speed: item.speed,
        volume: item.volume,
        pitch: item.pitch,
        onPlay: () => onPlay(item.id),
        onRegenerate: () => handleRegenerate(item.id),
        onDownload: () => handleDownload(item.id),
        onSelectionChange,
        onTextChange,
      })),
    [items, onPlay, handleRegenerate, handleDownload, onSelectionChange, onTextChange]
  );

  return (
    <div
      className={cn(
        'flex flex-col h-[580px]',
        isListView ? 'bg-white border rounded-md overflow-hidden' : 'bg-transparent'
      )}
    >
      <TableHeader
        onDelete={onDelete}
        onAdd={onAdd}
        onSelectAll={onSelectAll}
        isAllSelected={isAllSelected}
        isListView={isListView}
        onViewChange={setIsListView}
        itemCount={items.length}
      />
      <div className={cn('flex-1 min-h-0', !isListView && 'mb-4.5')}>
        {isListView ? (
          <div className="h-full relative">
            <div className="grid grid-cols-[auto,auto,1fr,auto] px-4 py-2 border-b bg-gray-50 text-sm font-medium text-black">
              <div className="w-4 ml-2 mr-2" />
              <div className="w-4 ml-2 mr-2" />
              <div className="ml-6">텍스트</div>
              <div className="flex gap-8">
                <div className="w-[64px] text-center">속도</div>
                <div className="w-[64px] text-center">볼륨</div>
                <div className="w-[64px] text-center">피치</div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 top-[37px]">
              <ScrollArea className="h-full">
                <TTSTableList
                  rows={listItems}
                  onSelectionChange={onSelectionChange}
                  onTextChange={onTextChange}
                />
              </ScrollArea>
            </div>
          </div>
        ) : (
          <ScrollArea className="h-full mt-3">
            <TTSTableGrid items={gridItems} />
          </ScrollArea>
        )}
      </div>
      <TableFooter
        selectedCount={selectedCount}
        onRegenerate={() => handleRegenerate()}
        onDownload={() => handleDownload()}
        isListView={isListView}
      />
    </div>
  );
};
