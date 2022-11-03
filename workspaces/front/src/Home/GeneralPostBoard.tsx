import styled from "styled-components";
import { FlexColumnDiv } from "../shared/styledComps";

const ExampleDiv = styled.div`
    width: 99%;
    height: 120%;
    margin: 0.5% auto;
    background-color: #b3ffdf;
`   


const GeneralPostBoardDiv = styled(FlexColumnDiv)`
    width: 80%;
`

export function GeneralPostBoard(props: any) {
    return (
        <GeneralPostBoardDiv>
            <textarea name="" id="" cols={30} rows={10}></textarea>
            <button>Postar</button>
            <ExampleDiv>Some text</ExampleDiv>
        </GeneralPostBoardDiv>
    );
}