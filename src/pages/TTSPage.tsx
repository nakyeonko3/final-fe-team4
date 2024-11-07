import TTSOptionsSidebar from '@/components/tts/TTSOptionsSidebar';

const TTSPage = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-200 h-[92px]">
        <h1>My work status</h1>
      </header>

      <div className="flex flex-1">
        {/* Main Content Group */}
        <div className="flex-1 flex flex-col">
          {/* Main1 */}
          <section className="flex-1 ">
            <h2>Main Content 1</h2>
            {/* 메인1 콘텐츠 */}
          </section>

          {/* Main2 */}
          <section className=" bg-gray-200 h-[135px]">
            <h2>Main Content 2</h2>
            {/* 메인2 콘텐츠 */}
          </section>
        </div>

        {/* Right Sidebar */}
        <aside className="w-[276px] flex-shrink-0 min-h-full">
          <TTSOptionsSidebar />
        </aside>
      </div>
    </div>
  );
};

export default TTSPage;
