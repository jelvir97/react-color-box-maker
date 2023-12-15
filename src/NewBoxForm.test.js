import { render } from '@testing-library/react';
import NewBoxForm from "./NewBoxForm"

const fakeFn = ()=>{}

it("should render correctly", ()=>{
    render(<NewBoxForm addBox={fakeFn}/>)
})

it('should match snapshot', ()=>{
    const {asFragment} = render(<NewBoxForm addBox={fakeFn}/>)
    expect(asFragment).toMatchSnapshot();
})


