import Stopwatch from './Stopwatch';
import { useTranslation } from "react-i18next";
import './App.css'

function App() {

    const { i18n } = useTranslation();

    //Creating a method to change the language onChnage from select box
    const changeLanguageHandler = (e) => {
        const languageValue = e.target.value
        i18n.changeLanguage(languageValue);
    }

    const { t } = useTranslation();

    return (
        <>
            <div className='container mt-3'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-xl-auto mb-5 text-end'>
                        <div className='h1'>TL Batut</div>
                    </div>
                    <div className='col-xl-auto mb-5'>
                        <div style={{ width: "100px" }}>
                            <select className="form-select bg-light" onChange={changeLanguageHandler}>
                                <option value="tm">TM</option>
                                <option value="en">EN</option>
                                <option value="ru">RU</option>
                            </select>
                        </div>
                    </div>
                </div>
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
