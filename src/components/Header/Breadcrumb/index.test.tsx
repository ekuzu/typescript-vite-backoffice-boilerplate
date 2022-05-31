import { render, screen } from '@testing-library/react'

import { Menu } from '.'

describe('Menu component', () => {
  it('should render with success', () => {
    render(<Menu />)
    const linkElement = screen.getByText(/breadcrumb/i)
    expect(linkElement).toBeInTheDocument()
  })
})
