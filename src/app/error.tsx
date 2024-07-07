'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
        {error.message}
      <h2>Error.tsx went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}