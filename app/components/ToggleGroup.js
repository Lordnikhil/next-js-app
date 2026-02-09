'use client'
export default function ToggleGroup({ options, value, onChange }) {
  return (
    <div>
      {options.map(o => (
        <button
          key={o}
          onClick={() => onChange(o)}
          style={{
            background: value === o ? '#000' : '#ddd',
            color: value === o ? '#fff' : '#000'
          }}
        >
          {o}
        </button>
      ))}
    </div>
  )
}
