import { render, screen ,fireEvent} from "@testing-library/react";
import App from './App';

describe('test App',()=>{
    test('наличие и работа кнопки по открыванию формы', ()=>{
        render(<App />);
        expect(screen.queryByTestId('add-form')).toBeNull()
        expect(screen.getByTestId('openFormButton')).toBeInTheDocument()
        
        fireEvent.click(screen.getByTestId('openFormButton'))
        expect(screen.getByTestId('add-form')).toBeInTheDocument()
        expect(screen.queryByTestId('openFormButton')).toBeNull()
    })

    test('клик на крестик в форме должен закрывать форму',()=> {
        render(<App />);
        fireEvent.click(screen.getByTestId('openFormButton'))
        const CloseCrossButton = screen.getByTestId('close-cross')
        expect(CloseCrossButton).toBeInTheDocument()

        fireEvent.click(CloseCrossButton)
        expect(screen.queryByTestId('add-form')).toBeNull()
        expect(screen.getByTestId('openFormButton') ).toBeInTheDocument()
    })

    test('проверка работы формы по добавлению колонки', ()=>{
        render(<App />);
        fireEvent.click(screen.getByTestId('openFormButton'))

        const addInput = screen.getByTestId('add-texarea')
        const addButton = screen.getByTestId('add-button')
        expect(addInput).toBeInTheDocument()
        expect(addButton).toBeInTheDocument()

        fireEvent.input(addInput, {
            target: {value: 'to do'}
        })
        fireEvent.click(addButton)
        const column = screen.getByTestId('column')
        const columnTitle = screen.getByTestId('column-title')
        expect(column).toBeInTheDocument()
        expect(columnTitle).toBeInTheDocument()
        expect(columnTitle).toHaveTextContent('to do')
        expect(screen.queryByTestId('add-form')).toBeNull()
    })

})
