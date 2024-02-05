import { ConnectWallet, useContract } from "@thirdweb-dev/react";
import { NextPage } from "next";
const Home: NextPage = () => {
const { contract } =useContract("0x711809EDddC67f3ad6E6ae02cD7A592e78f4F7e6");

return (
<div style={{
display: "flex",

flexDirection: "column",
alignItems: "center",
justifyContent: "center",
height: "100vh"
}}>
<div style={{
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "center",
border: "1px solid black",
padding: "1rem",
borderRadius: "1rem",
backgroundColor: "#232323",
minWidth: "400px",
}}>
  <ConnectWallet/>

</div>
</div>
);
};
export default Home;
