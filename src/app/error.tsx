'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Algo salió mal</h2>
      <p className="text-lg text-gray-600 mb-8">
        Ha ocurrido un error al cargar esta página.
      </p>
      <button
        onClick={() => reset()}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors"
      >
        Intentar de nuevo
      </button>
    </div>
  )
}