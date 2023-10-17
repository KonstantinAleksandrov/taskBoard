import { render, screen,fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddStore from '../../store/addStore'
import AddForm from './AddForm'
import { IAddForm } from './types'
import { createColumnsStore } from '../../store/ColumnsStore'




describe('проверка работы формы добавления',()=>{
    test('проверка корректного рендера',()=>{
        const addStore = new AddStore()
        const mockProps: IAddForm = {
            placeholder: 'test placeholder',
            buttonName: 'test buttonName',
            toggleHandler: addStore.toggleFormColumn,
            textareaData: {value: '', handler: addStore.changeTitle },
            addType: 'column'
        }

        render(<AddForm options={mockProps}/>)
        expect(screen.getByTestId('add-form')).toBeInTheDocument()
        expect(screen.getByTestId('add-button')).toBeInTheDocument()
    })

    test('проверка текста в кнопке и в placeholder',()=>{
        const addStore = new AddStore()
        const mockProps: IAddForm = {
            placeholder: 'test placeholder',
            buttonName: 'test buttonName',
            toggleHandler: addStore.toggleFormColumn,
            textareaData: {value: '', handler: addStore.changeTitle },
            addType: 'column'
        }

        render(<AddForm options={mockProps}/>)
        expect(screen.getByTestId('add-texarea')).toHaveAttribute('placeholder', 'test placeholder')
        expect(screen.getByTestId('add-button')).toHaveTextContent('test buttonName')
    })

    test('проверка работы textarea',()=>{
        const addStore = new AddStore()
        const mockProps: IAddForm = {
            placeholder: 'test placeholder',
            buttonName: 'test buttonName',
            toggleHandler: addStore.toggleFormColumn,
            textareaData: {value: '', handler: addStore.changeTitle },
            addType: 'column'
        }

        render(<AddForm options={mockProps}/>)

        fireEvent.input(screen.getByTestId('add-texarea'), {
            target: {value: 'to do'}
        })
        expect(addStore.title.columnName).toBe('to do')
    })

    test('проверка добавления новой колонки',()=>{
        const addStore = new AddStore()
        const columnsStore = createColumnsStore()
        const mockProps: IAddForm = {
            placeholder: 'test placeholder',
            buttonName: 'test buttonName',
            toggleHandler: addStore.toggleFormColumn,
            textareaData: {value: 'to do', handler: addStore.changeTitle},
            addType: 'column',
            addColumn: columnsStore.addColumn
        }

        render(<AddForm options={mockProps}/>)

        fireEvent.click(screen.getByTestId('add-button'))
        expect(columnsStore.columns[0].title).toBe('to do')
    })
})