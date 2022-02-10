import styled, { keyframes } from "styled-components";
const Father = styled.div`
    display: flex;
`;
const rotation = keyframes`
    0%{
        transform: rotate(0deg);
        border-radius: 0px;
    }
    50%{
        border-radius: 100px;
    }
    100%{
        transform: rotate(360deg);
        border-radius: 0px;
    }
`;
const Emoji = styled.p`
    font-size: 36px;
`;
const Box = styled.div`
    height: 200px;
    width: 200px;
    background-color: tomato;
    animation: ${rotation} 5s linear infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    ${Emoji} {
        font-size: 36px;
        :hover {
            font-size: 100px;
        }
        :active {
            opacity: 0;
        }
    }
`;

function App() {
    return (
        <Father>
            <Box>
                <Emoji>😍</Emoji>
            </Box>
        </Father>
    );
}

export default App;
