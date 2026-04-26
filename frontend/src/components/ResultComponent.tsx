import { MoveRightIcon } from '../assets/MoveRightIcon';
import useUnitConverter from './useUnitConverter'

export function ResultComponent () {
  const {formData, result, handleCloseResult} = useUnitConverter()
  return (
    <div className="relative mt-4 rounded-lg bg-gray-100 p-4 text-center">
      <button
        type="button"
        onClick={handleCloseResult}
        className="absolute right-3 top-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        aria-label="Fechar resultado"
      >
        ×
      </button>

      <p className="text-sm text-gray-500">Resultado</p>

      <strong className="text-xl text-gray-800">
        {result?.toFixed(4)}
      </strong>

      <p className="mt-1 text-xs text-gray-400 flex items-center justify-center gap-2">
        {formData.unitFrom}
          <MoveRightIcon />
        {formData.unitTo}
      </p>
    </div>
  )
}