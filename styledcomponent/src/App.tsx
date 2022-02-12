import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
`;
function App() {
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
    };
    return <div></div>;
}

export default App;
