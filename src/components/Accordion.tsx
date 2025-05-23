import { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

export default function Accordion({ question, answer }: Props) {
  const [viewAnswer, setViewAnswer] = useState<boolean>(false);
  return (
    <article className="tablet:py-[2rem] flex w-full flex-col gap-[1.5rem] py-[1.5rem]">
      <section
        onClick={() => setViewAnswer(!viewAnswer)}
        className="flex cursor-pointer items-center justify-between"
      >
        <p className="textPreset2 hover:text-violet text-purple-950">
          {question}
        </p>
        <img
          src={`/assets/images/icon-${viewAnswer ? "minus" : "plus"}.svg`}
          alt="view answer"
        />
      </section>
      <div className={`${viewAnswer ? "block" : "hidden"}`}>
        <p className="textPreset3 text-purple-600">{answer}</p>
      </div>
    </article>
  );
}
