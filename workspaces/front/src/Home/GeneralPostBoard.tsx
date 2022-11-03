import styled from "styled-components";
import { FlexColumnDiv } from "../shared/styledComps";

const ExampleDiv = styled.div`
    width: 10%;
    height: 5%;
    margin: 1%;
    background-color: #74A0C0;
`

export function GeneralPostBoard(props: any) {
    return (
        <FlexColumnDiv>
            <ExampleDiv>Some text</ExampleDiv>
        </FlexColumnDiv>
    );
}