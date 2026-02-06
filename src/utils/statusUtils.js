// Utility functions for status colors and calculations

export const getStatusColor = (status) => {
  const colors = {
    'completed': '#1EA54E',
    'in-progress': '#F59F0A',
    'delayed': '#F50A0A',
    'not-started': '#8597A8',
    'partially-uploaded': '#004479',
    'fully-uploaded': '#0078D7',
  }
  return colors[status] || '#8597A8'
}

// Calculate progress percentage for gauge (semicircle arc)
export const calculateGaugeValue = (value) => {
  // Arc length = π * r, for semicircle r=80, so arc length ≈ 251.33
  // We need to calculate the dash array: [dash length, gap length]
  const arcLength = Math.PI * 80 // approximate arc length
  const dashLength = (value / 100) * arcLength
  return dashLength
}

