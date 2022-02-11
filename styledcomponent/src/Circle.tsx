import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}
interface CircleProps {
    bgColor: string;
    borderColor?: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
`;

function Circle({ bgColor, borderColor }: CircleProps) {
    return <Container bgColor={bgColor} borderColor={borderColor ?? "black"} />;
}

export default Circle;
