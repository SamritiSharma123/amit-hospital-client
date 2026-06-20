import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />

      <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "3rem"
      }}>
        Homepage starts here
      </div>
    </>
  );
}

export default Home;