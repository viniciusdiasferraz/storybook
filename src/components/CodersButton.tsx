export type CoderButtonProps= {
  label: string
}

export default function CodersButton({ label }:CoderButtonProps) {
  return(
    <button>{label}</button>
  )
}