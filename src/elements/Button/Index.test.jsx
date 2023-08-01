import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import Button from './Index'

describe(Button, () => {
  test('Should not allowed click button if isDisabled is present', () => {
    const {container} = render(<Button isDisabled={true}></Button>)

    expect(container.querySelector("span.disabled")).toBeInTheDocument()
  })
  
  test('Should render loading/spinner', () => {
    const {container, getByText} = render(<Button isLoading={true}></Button>)
    expect(getByText(/loading/i)).toBeInTheDocument()
    expect(container.querySelector("span")).toBeInTheDocument()
  })
  
  test('Should render HTML a tag', () => {
    const {container} = render(<Button type='link' isExternal={true}></Button>)
    expect(container.querySelector("a")).toBeInTheDocument()
  })
  
  test('Should render React Link component', () => {
    const {container} = render(<Router><Button href='' type='link'></Button></Router>)
    expect(container.querySelector("a")).toBeInTheDocument()
  })

})