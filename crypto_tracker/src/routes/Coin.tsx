import { useParams } from "react-router-dom";

function Coin() {
    const { coinId } = useParams<{ coinId: string }>();
    console.log(coinId);
    return <div>Coin{coinId}</div>;
}
export default Coin;
