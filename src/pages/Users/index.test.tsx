import { render, screen } from '@testing-library/react'

import { Users } from '.'

describe('Home page component', () => {
  it('should render with success', () => {
    render(<Users />)
    const linkElement = screen.getByText(/users/i)
    expect(linkElement).toBeInTheDocument()
  })
})
