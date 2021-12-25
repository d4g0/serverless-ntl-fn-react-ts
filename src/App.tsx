import { Form } from "./components/form";
import "./index.css";
function App() {
  return (
    <div className='bg-gray-300 text-gray-700 text-xl w-full min-h-screen'>
      <header>
        <h1 className='p-10 text-3xl'>Awesome Serverless with Ntf &amp; TypeScript</h1>
      </header>
      <main className=''>
        <Form />
      </main>
    </div>
  );
}

export default App;
