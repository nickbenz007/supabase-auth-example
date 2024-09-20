export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Main Content */}
      <main className="flex flex-col w-full gap-4 items-center justify-center">
        <div className="w-96 h-auto items-center justify-center text-center p-8 border rounded-xl">
          <h1 className="text-xl dark:text-gray-50 text-gray-900 font-sans font-semibold">
            Home Screen
          </h1>
          <p className="text-sm dark:text-gray-50 text-gray-900 font-sans font-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            aperiam officia, et esse repellat ea dolores dolor labore dolore
            odio harum iure sequi deserunt modi necessitatibus, ducimus ad
            natus. Cum.
          </p>
        </div>
      </main>
      {/* Main Content */}
    </div>
  );
}
