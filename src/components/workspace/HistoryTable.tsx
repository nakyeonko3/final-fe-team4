import { TbChevronRight, TbDownload } from 'react-icons/tb';

import { PlayButton } from '@/components/buttons/PlayButton';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface HistoryItem {
  id: string;
  order: string;
  projectName: string;
  fileName: string;
  content: string;
  type: 'VC' | 'TTS' | 'CONCAT';
  createdAt: string;
}

interface HistoryTableProps {
  items: HistoryItem[];
  onPlay: (id: string) => void;
  onPause: (id: string) => void;
  currentPlayingId?: string;
}

export function HistoryTable({ items, onPlay, onPause, currentPlayingId }: HistoryTableProps) {
  const AudioBadge = (type: 'VC' | 'TTS' | 'CONCAT') => {
    const variant = type.toLowerCase() as 'vc' | 'tts' | 'concat';
    return <Badge variant={variant}>{type}</Badge>;
  };

  return (
    <div className="px-6 pt-6 h-auto">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <h3 className="text-h3">최근 내보내기</h3>
        <p className="text-black text-body2 flex items-center gap-1 cursor-pointer">
          전체보기
          <TbChevronRight className="w-6 h-6" />
        </p>
      </div>
      <Table>
        <TableHeader className="border-t">
          <TableRow>
            <TableHead className="pl-[66px] bg-gray-50 font-bold text-gray-900">순서</TableHead>
            <TableHead className="bg-gray-50 font-bold text-gray-900">프로젝트명</TableHead>
            <TableHead className="bg-gray-50 font-bold text-gray-900">파일명</TableHead>
            <TableHead className="bg-gray-50 font-bold text-gray-900">내용</TableHead>
            <TableHead className="bg-gray-50 font-bold text-gray-900">유형</TableHead>
            <TableHead className="bg-gray-50 font-bold text-gray-900">다운로드</TableHead>
            <TableHead className="pl-[60px] bg-gray-50 font-bold text-gray-900">
              업데이트 날짜
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.slice(0, 5).map((item) => (
            <TableRow
              key={item.id}
              data-state={currentPlayingId === item.id ? 'selected' : undefined}
            >
              <TableCell className="font-medium">
                <div className="flex items-center gap-7">
                  <PlayButton
                    isPlaying={currentPlayingId === item.id}
                    onPlay={() => onPlay(item.id)}
                    onPause={() => onPause(item.id)}
                  />
                  {item.order}
                </div>
              </TableCell>
              <TableCell>{item.projectName}</TableCell>
              <TableCell>{item.fileName}</TableCell>
              <TableCell className="max-w-md truncate">{item.content}</TableCell>
              <TableCell>{AudioBadge(item.type)}</TableCell>
              <TableCell>
                <div className="flex justify-start pl-3">
                  <button
                    onClick={() => console.log('다운로드:', item.id)}
                    aria-label="Download file"
                  >
                    <TbDownload className="h-6 w-6" />
                  </button>
                </div>
              </TableCell>
              <TableCell className="text-gray-700 pl-[60px]">{item.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
