import React from "react";
type MagicButtonProps={
    title:string,
    icon:React.ReactNode,
    position:string,
    otherClasses?:string,
    handleClick?:()=>void
}
const MagicButton = ({title,icon,position,otherClasses,handleClick}:MagicButtonProps) => {
  return (
    <div>
     <button className="relative mt-10 inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none ">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-9 md:px-12 py-2 text-base font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
            {position=="left" && icon}
            {title}
            {position=="right" && icon}
          </span>
        </button>
    </div>
  );
};

export default MagicButton;
