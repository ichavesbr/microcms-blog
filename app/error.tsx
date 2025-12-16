"use client"

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <>
      <h1>ACONTECEU UM ERRO {error.message}</h1>
      <button onClick={() => reset()}>Tentar de novo</button>
    </>
  )
}
