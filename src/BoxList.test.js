import { render, fireEvent, queryAllByRole } from '@testing-library/react';
import BoxList from "./BoxList"

it('should render correctly', ()=>{
    render(<BoxList />)
})

it('should match snapshot', ()=>{
    const {asFragment} = render(<BoxList />)
    expect(asFragment).toMatchSnapshot()
})

it('should add box', ()=>{
    const { getByText, container} = render(<BoxList />)
    const addBtn = getByText('Add Box!')

    let boxes = container.querySelectorAll('.Box')
    expect(boxes.length).toEqual(0)

    fireEvent.click(addBtn)
    boxes = container.querySelectorAll('.Box')
    expect(boxes.length).toEqual(1)

})

it('should add box with non-default values', ()=>{
    const { container, getByText, getByLabelText } = render(<BoxList />)
    const addBtn = getByText('Add Box!')
    const colorInput = getByLabelText('Color:')
    const widthInput = getByLabelText('Width')
    const heightInput = getByLabelText('Height')

    
    let boxes = container.querySelectorAll('.Box')
    expect(boxes.length).toEqual(0)

    fireEvent.change(colorInput, { target: { value: "#ffffff"}})
    fireEvent.change(widthInput, { target: { value: 100}})
    fireEvent.change(heightInput, { target: { value: 100}})


    fireEvent.click(addBtn)
    boxes = container.querySelectorAll('.Box')
    const styles = window.getComputedStyle(boxes[0])._values

    expect(boxes.length).toEqual(1)
    expect(styles['background-color']).toEqual('rgb(255, 255, 255)')
    expect(styles['width']).toEqual('100px')
    expect(styles['height']).toEqual('100px')
})

it('should remove box', ()=>{
    const { getByText, container } = render(<BoxList />)
    const addBtn = getByText('Add Box!')

    fireEvent.click(addBtn)

    let boxes = container.querySelectorAll('.Box')
    expect(boxes.length).toEqual(1)

    const removeBtn = getByText('X')
    
    fireEvent.click(removeBtn)
    
    boxes = container.querySelectorAll('.Box')
    expect(boxes.length).toEqual(0)
})