import { render, screen ,fireEvent} from "@testing-library/react";
import CloseCross from "./CloseCross";


describe('тесты работы закрывающего крестика',() => {
    test('тест корректного рендеринга',()=>{
        const mockProps = {
            id: 1,
            handler: jest.fn()
        }

        render(<CloseCross {...mockProps} />)
        
        expect(screen.getByTestId('close-cross')).toBeInTheDocument()
    })

    test('Проверка, что обработчик был вызван', () => {
        const mockProps = {
            id: 1,
            handler: jest.fn()
        }

        render(<CloseCross {...mockProps} />)

        fireEvent.click(screen.getByTestId('close-cross'))
        expect(mockProps.handler).toBeCalled()
    })

    test('Проверка, что обработчик был вызван без параметра',()=>{
        const mockProps = {
            handler: jest.fn()
        }

        render(<CloseCross {...mockProps} />)

        fireEvent.click(screen.getByTestId('close-cross'))
        expect(mockProps.handler).toHaveBeenCalledWith(undefined)
    })

})