import './App.css'
import Stopwatch from './Stopwatch';

function App() {

    return (
        <>
            <div className='container mt-4'>
                <div className='row justify-content-center'>
                    {Array.from({ length: 100 }).map((_, index) => (
                        <Stopwatch key={index} id={index + 1} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default App
