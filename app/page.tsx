export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Main Content */}
      <main className="flex flex-col w-full gap-4 items-center justify-center">
        <div className="w-96 h-auto items-center justify-center text-center p-8 border border-gray-500 rounded-xl">
          <h1 className="text-2xl dark:text-gray-50 text-gray-900 font-sans font-semibold">
            Welcome to Precise Tech.!
          </h1>
          <p className="text-sm dark:text-gray-50 text-gray-900 font-sans font-normal">
            Enjoy your stay and learn modern technologies.
          </p>
        </div>
      </main>
      {/* Main Content */}
    </div>
  );
}
