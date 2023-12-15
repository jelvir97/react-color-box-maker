import { render} from '@testing-library/react';
import Box from "./Box"

const fakeFn = ()=>{}

it("should render correctly", ()=>{
    render(<Box info={{color:"red",width:200,height:200}}  id={1} removeBox={fakeFn}/>)
})

it("should match snapshot", ()=>{
    const {asFragment} = render(<Box info={{color:"red",width:200,height:200}}  id={1} removeBox={fakeFn}/>)
    expect(asFragment).toMatchSnapshot()
})