const Card = ({ children, className = '', hover = false, onClick, style = {} }) => {
  const baseClasses = 'card'
  const hoverClasses = hover ? 'card-hover cursor-pointer' : ''
  const clickableClasses = onClick ? 'cursor-pointer' : ''

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  )
}

export default Card

