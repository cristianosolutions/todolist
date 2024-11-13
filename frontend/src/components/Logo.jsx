
export function Logo({ className = 'h1 mt-3 mb-4 pb-3' }) {
  return (
    <p className={`${className} text-center text-primary`}>
      <i className="bi bi-check-square-fill me-2"></i>
      <u>Rotinas Diarias</u>
    </p>
  )
}