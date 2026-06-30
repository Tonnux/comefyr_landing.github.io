// Clases para centrar la última card cuando queda sola en la fila final del grid
export function centeredLastGridItem(index, total, columns = {}) {
  const { sm = 0, lg = 0 } = columns
  if (index !== total - 1) return ''

  const classes = []

  if (sm > 0 && total % sm !== 0) {
    if (sm === 2) classes.push('sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-xl')
    if (sm === 3) classes.push('sm:col-span-3 sm:mx-auto sm:w-full sm:max-w-xl')
  }

  if (lg > 0 && total % lg !== 0) {
    if (lg === 2) classes.push('lg:col-span-2 lg:mx-auto lg:w-full lg:max-w-xl')
    if (lg === 3) classes.push('lg:col-span-3 lg:mx-auto lg:w-full lg:max-w-xl')
    if (lg === 4) classes.push('lg:col-span-4 lg:mx-auto lg:w-full lg:max-w-sm')
  }

  return classes.join(' ')
}
