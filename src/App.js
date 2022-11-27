import './App.css';
import React, {useState} from "react";
import Data from "./Components/Data";
import Counter from "./Components/Counter";
import SelectField from "./Components/SelectField";
import Button from "./Components/Button";


function App() {

    const [aardbei, setAardbei] = useState(0);
    const [bananen, setBananen] = useState(0);
    const [appels, setAppels] = useState(0)
    const [kiwi, setKiwi] = useState(0);

    const [formState, setFormState] = useState({
        firstname: "",
        lastname: "",
        age: "",
        postal: "",
        frequency: '',
        dayPreference: false,
        message: '',
        agreement: '',
        submit: false
    });


    function handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        // console.log(changedFieldName, newValue)

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }


    function handleSubmit(e) {
        e.preventDefault();
        setFormState({
            ...formState,
            submit: true
        })
        console.log(formState);
    }


    function reset() {
        setAardbei(0)
        setBananen(0)
        setAppels(0)
        setKiwi(0)
    }


    return (
        <>
            <main>

                <h1>Fruitmand Bezorgservice</h1>

                <article>

                    <Counter
                        fruitName='🍓 Aardbeien'
                        type='button'
                        fruitValue={aardbei}
                        decrease={() => setAardbei(aardbei => aardbei - 1)}
                        increase={() => setAardbei(aardbei => aardbei + 1)}
                        isDisabled={aardbei === 0}
                    />
                    <Counter
                        fruitName='🍌 Bananen'
                        type='button'
                        fruitValue={bananen}
                        decrease={() => setBananen(bananen => bananen - 1)}
                        increase={() => setBananen(bananen => bananen + 1)}
                        isDisabled={bananen === 0}
                    />
                    <Counter
                        fruitName='🍎 Appels'
                        type='button'
                        fruitValue={appels}
                        decrease={() => setAppels(appels => appels - 1)}
                        increase={() => setAppels(appels => appels + 1)}
                        isDisabled={appels === 0}
                    />
                    <Counter
                        fruitName="🥝 Kiwi's"
                        type='button'
                        fruitValue={kiwi}
                        decrease={() => setKiwi(kiwi => kiwi - 1)}
                        increase={() => setKiwi(kiwi => kiwi + 1)}
                        isDisabled={kiwi === 0}
                    />

                    <Button
                        type='reset'
                        className='btn'
                        onClick={reset}
                        children='RESET'
                    />


                </article>

                <form onSubmit={handleSubmit}>

                    <h3 className='h3-text'>Vul hieronder uw gegevens:</h3>

                    <fieldset className='form'>

                        <Data
                            nameLabel='firstname'
                            label='Voornaam:   '
                            nameType='text'
                            id='firstName'
                            value={formState.firstname}
                            name='firstname'
                            handleField={handleChange}

                        />

                        <Data
                            nameLabel='lastname'
                            label='Achternaam: '
                            nameType='text'
                            id='lastname'
                            value={formState.lastname}
                            name='lastname'
                            handleField={handleChange}

                        />

                        <Data
                            nameLabel='age'
                            label='Leeftijd:  '
                            nameType='text'
                            id='age'
                            value={formState.age}
                            name='age'
                            handleField={handleChange}


                        />

                        <Data
                            nameLabel='postal'
                            label='Postcode:  '
                            nameType='text'
                            id='postal'
                            value={formState.postal}
                            name='postal'
                            handleField={handleChange}

                        />

                        <h3>Bezorgfrequentie :</h3>

                        <SelectField
                            radio='radio'
                            name='frequency'
                            id='frequency'
                            handleFrequency={handleChange}
                            valueOne='Iedere week'
                            valueTwo='Om de week'
                            valueThree='Iedere maand'
                            value={formState.frequency}
                        />


                        <div className='day'>
                            <Data
                                nameLabel='day'
                                nameType='radio'
                                id='day'
                                name='dayPreference'
                                value='day'
                                handleField={handleChange}
                                children=' overdag'

                            />
                            <Data
                                nameLabel='afternoon'
                                nameType='radio'
                                id='afternoon'
                                name='dayPreference'
                                value='afternoon'
                                handleField={handleChange}
                                children=" 's Avonds'"

                            />

                        </div>


                        <div className='message'>
                            <p>Opmerking:</p>
                            <label htmlFor="message">
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="80" rows="10"
                                    value={formState.message}
                                    onChange={handleChange}
                                >
                                </textarea>
                            </label>
                        </div>

                        <div>

                            <Data
                                nameType='checkbox'
                                id='agreement'
                                name='agreement'
                                value={formState.agreement}
                                handleField={handleChange}
                                children=' Ik ga akkoord met de voorwaarden'
                            />
                        </div>


                        <div className='send'>

                            <Button
                                type='submit'
                                value={formState.submit}
                                onClick={handleSubmit}
                                children='Verzenden'

                            />
                        </div>

                    </fieldset>
                </form>

            </main>


        </>
    );
}

export default App;

