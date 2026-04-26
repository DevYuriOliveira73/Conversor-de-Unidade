import { MoveRightIcon } from '../assets/MoveRightIcon';
import { OctagonXIcon } from '../assets/OctagonXIcon';

interface IResultComponent{
  result: number | null | undefined,
  unitFrom: string,
  unitTo: string,
  handleCloseResult: () => void
}


export function ResultComponent ({result, unitFrom, unitTo, handleCloseResult}:IResultComponent) {
  return (
    <div className="relative mt-4 rounded-lg bg-gray-100 p-4 text-center">
      <button
        type="button"
        onClick={handleCloseResult}
        className="absolute right-2 top-2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
        aria-label="Fechar resultado"
      >
        <OctagonXIcon/>
      </button>

      <p className="text-sm text-gray-500">Resultado</p>

      <strong className="text-xl text-gray-800">
        {result?.toFixed(4)}
      </strong>

      <p className="mt-1 text-xs text-gray-400 flex items-center justify-center gap-2">
        {unitFrom}
          <MoveRightIcon />
        {unitTo}
      </p>
    </div>
  )
}