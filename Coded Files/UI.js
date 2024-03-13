import React from "react";

function TireManagementSystem() {
  return (
    <div className="flex flex-col items-center pb-20 bg-stone-200">
      <header className="self-stretch px-16 py-11 w-full bg-blue-700 rounded-md max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
            <h1 className="text-5xl font-bold text-yellow-400 max-md:mt-10 max-md:text-4xl">
              TireOptiTrack<br />
            </h1>
          </section>
          <section className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
            <h2 className="mt-1.5 text-3xl font-bold text-center text-white max-md:mt-10 max-md:max-w-full">
              Tire Inflation & Thread depth and Tire Status Record
            </h2>
          </section>
        </div>
      </header>
      <main className="mt-28 w-full max-w-[1182px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <aside className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto text-2xl text-black max-md:mt-10">
              <div>Select Vehicle Type</div>
              <div className="mt-14 max-md:mt-10">Vehicle Number </div>
              <div className="mt-16 max-md:mt-10">Tire Position</div>
              <div className="mt-16 max-md:mt-10">Tire Serial Number </div>
              <div className="mt-16 max-md:mt-10">Thread Depth</div>
              <div className="mt-14 max-md:mt-10">Air Pressure </div>
              <div className="mt-16 max-md:mt-10">Km Reading </div>
            </div>
          </aside>
          <section className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow items-end pt-3.5 pl-20 min-h-[536px] max-md:mt-10 max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c55b5b538b4729bb37603e8f03a4556e882abfe759061e6bcd26fbbae467aecd?apiKey=96e1cba5b127436faff0969b56b97d88&" alt="Tire Status Visualization" className="object-cover absolute inset-0 size-full" />
              <div className="relative text-2xl text-black max-md:max-w-full">Tire Status </div>
              <div className="relative mt-16 text-2xl text-black max-md:mt-10 max-md:max-w-full">Tire Brand </div>
              <div className="relative mt-16 text-2xl text-black max-md:mt-10 max-md:max-w-full">Tire Cross Pattern </div>
              <div className="flex relative flex-col py-6 mt-12 max-w-full rounded-xl bg-zinc-300 w-[400px] max-md:mt-10">
                <div className="flex flex-col px-9 max-md:px-5">
                  <div className="flex gap-3 self-start">
                    <div className="shrink-0 rounded-md bg-zinc-400 h-[69px] w-[60px]" />
                    <div className="shrink-0 rounded-md bg-zinc-400 h-[69px] w-[59px]" />
                  </div>
                  <div className="flex z-10 gap-3 self-end mt-0">
                    <div className="shrink-0 rounded-md bg-zinc-400 h-[69px] w-[59px]" />
                    <div className="shrink-0 rounded-md bg-zinc-400 h-[69px] w-[60px]" />
                  </div>
                </div>
                <div className="flex flex-col px-9 mt-28 max-md:px-5 max-md:mt-10">
                  <div className="flex gap-3 self-start">
                    <div className="shrink-0 rounded-md bg-zinc-400 h-[69px] w-[60px]" />
                    <div className="shrink-0 rounded-md bg-zinc-400 h-[69px] w-[59px]" />
                  </div>
                  <div className="flex z-10 gap-3 self-end mt-0">
                    <div className="shrink-0 rounded-md bg-zinc-400 h-[69px] w-[59px]" />
                    <div className="shrink-0 rounded-md bg-zinc-400 h-[69px] w-[60px]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="justify-center items-center px-16 py-6 mt-20 w-full text-3xl font-bold text-center text-white whitespace-nowrap bg-blue-700 rounded-xl max-w-[1182px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        SUBMIT
      </footer>
    </div>
  );
}

export default TireManagementSystem;