import { render, screen, fireEvent } from '@testing-library/react'
import AddTitle from './AddTitle'

describe('проверка AddTitle',()=>{
    test('тест корректного рендеринга',()=>{
        const mockProps = {
            title: 'привет',
            toggleHandler: jest.fn()
        }

        render(<AddTitle options={mockProps}/>)
        expect(screen.getByTestId('openFormButton')).toBeInTheDocument()
        expect(screen.getByTestId('openFormButton')).toHaveTextContent('привет')
    })

    test('Проверка, что обработчик был вызван',()=>{
        const mockProps = {
            title: 'test title',
            toggleHandler: jest.fn()
        }

        render(<AddTitle options={mockProps}/>)
        fireEvent.click(screen.getByTestId('openFormButton'))
        expect(mockProps.toggleHandler).toBeCalled()
    })

    test('Проверка на отсутствие title',()=>{
        const mockProps = {
            title: 'test title',
            toggleHandler: jest.fn()
        }

        render(<AddTitle options={mockProps}/>)
        fireEvent.click(screen.getByTestId('openFormButton'))
        expect(mockProps.toggleHandler).toBeCalled()
    })
})
