import logo from './logo.svg';
import './App.css';
import { Image } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <div>
        <h2>Profile</h2>
      </div>
      <div>
      <Image
          borderRadius='full'
          boxSize='150px'
          border={"3px solid white"}
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
          width="87px"
          height="86px"
          boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
         
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", margin: "auto", alignItems: "center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", width: "80%", background: "white", height: "600px", borderRadius: "12px" }}>
       
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "white" }}>
          <div>
            <h3 style={{ background: "white" }}>Rich Explorer</h3>
          </div>
          <div style={{ display: "flex", gap: "12px", marginTop: "22px", background: "white" }}>
            <div style={{ padding: "12px 25px", boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px", borderRadius: "12px", color: "white" }}>
              <h5 style={{ fontWeight: "600", fontFamily: "system-ui", fontSize: "larger" }}>2100</h5>
              <p>Points</p>
            </div>
            <div style={{ padding: "12px 25px", boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px", borderRadius: "12px", color: "white" }}>
              <h5 style={{ fontWeight: "600", fontFamily: "system-ui", fontSize: "larger" }}>#1</h5>
              <p>Rank</p>
            </div>
            <div style={{ padding: "12px 25px", boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px", borderRadius: "12px", color: "white" }}>
              <h5 style={{ fontWeight: "600", fontFamily: "system-ui", fontSize: "larger" }}>3</h5>
              <p>Level</p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "22px", paddingTop: "22px", background: "white" }}>
          <div style={{ background: "white", color: "#a6a0a0", fontWeight: "600" }}>Membership</div>
          <div style={{ background: "white", color: "#a6a0a0", fontWeight: "600" }} >Badges</div>
          <div style={{ background: "white", color: "#a6a0a0", fontWeight: "600" }}>Point History</div>
        </div>




      </div>

    </div>
  );
}

export default App;
