import GradualSpacing from "@/components/magicui/gradual-spacing";

import Meetings from "./_components/Meetings";
import JoinAndChat from "./_components/join-chat"

export default function Dashboard() {
  return (
    <div className="grid grid-cols-5 h-[100vh]">
      <aside className="col-span-1 px-4 py-1 flex flex-col items-start space-y-4">
        <h1 className="text-2xl font-bold ">
          <GradualSpacing
            className="font-display text-center tracking-[-4px] text-2xl font-bold text-black dark:text-white md:text-3xl md:leading-[3rem]"
            text="Dashborad"
          />
        </h1>
        <button className="shadow-[0_0_0_3px_#000000_inset] w-[10rem] px-2 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold">
          New Meeting +
        </button>
        <button className="shadow-[0_0_0_3px_#000000_inset] w-[10rem] px-2 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold">
          Mange Meetings
        </button>
        <button className="shadow-[0_0_0_3px_#000000_inset] w-[10rem] px-2 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold">
          Community
        </button>
      </aside>

      <section className="col-span-4 ">
        <Meetings/>
        <JoinAndChat/>        
      </section>
    </div>
  );
}
