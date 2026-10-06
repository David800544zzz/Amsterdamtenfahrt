import { Check, X } from 'lucide-react';
import type { PollQuestion } from '@/lib/data';

type PollCardProps = {
  pollIndex: number;
  poll: PollQuestion;
  selectedOption: number | null;
  isCorrect: boolean | null;
  onSelect: (optionIndex: number) => void;
};

export default function PollCard({
  pollIndex,
  poll,
  selectedOption,
  isCorrect,
  onSelect,
}: PollCardProps) {
  const answered = selectedOption !== null;

  return (
    <div className="bg-green-600 rounded-2xl p-4 sm:p-5">
      <p className="text-white text-sm sm:text-base font-medium mb-3">
        {pollIndex + 1}. {poll.question}
      </p>
      <div className="grid grid-cols-1 gap-2">
        {poll.options.map((option, i) => {
          const isSelected = selectedOption === i;
          const showCorrect = answered && i === poll.correctIndex;
          const showWrong = answered && isSelected && !isCorrect;

          return (
            <button
              key={i}
              disabled={answered}
              onClick={() => onSelect(i)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all duration-300 ${
                showCorrect
                  ? 'bg-white text-green-700 font-semibold'
                  : showWrong
                  ? 'bg-white text-red-500 font-semibold'
                  : isSelected
                  ? 'bg-white text-green-700'
                  : answered
                  ? 'bg-green-700 text-white/60'
                  : 'bg-green-700 text-white hover:bg-green-800 cursor-pointer'
              }`}
            >
              <span>{option}</span>
              {showCorrect && <Check className="w-5 h-5 text-green-600 animate-check-pop" strokeWidth={3} />}
              {showWrong && <X className="w-5 h-5 text-red-500 animate-check-pop" strokeWidth={3} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
