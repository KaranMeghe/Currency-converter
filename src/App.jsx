import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  useCurrencyInfo(`usd`);
  return (
    <>
      <h1 className="text-orange-500">Vite + React okay</h1>
    </>
  );
}

export default App;
