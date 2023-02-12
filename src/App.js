import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600 underline">
        Fetch from an api
      </h1>
      <button
        onClick={getArrayFromAPI}
        className={
          "my-4 inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-blue-600 hover:bg-opacity-1 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        }
      >
        Fetch array from an api
      </button>
      <p id="textDisp" className="text-3xl my-10"></p>
    </div>
  );
}
async function getArrayFromAPI() {
  const textDisp = document.getElementById("textDisp");
  let data = await fetch("http://0.0.0.0:3000");
  let res = await data.json();
  //console.log(res);
  textDisp.innerHTML = res;
}

export default App;
