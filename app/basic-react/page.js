'use client'
import {useState} from 'react'

export default function BasicReact() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    
    function firstnameChange(event) {
        //console.log(event.target.value);
        setFirstname(event.target.value);        
    }

    function lastnameChange(event) {
        //console.log(event.target.value);
        setLastname(event.target.value);
        
    }

    function buttonClick() {
        if(firstname.length == 0) {
            alert("Please Enter your firstname");
        }
        
    }

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-3">
                        <label htmlFor="">Firstname: </label>
                        <input type="text" className='form-control' value={firstname} onChange={(event) => setFirstname(event.target.value)}/>
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="">Lastname: </label>
                        <input type="text" className='form-control' value={lastname} onChange={lastnameChange}/>
                    </div>
                    <div className="col-12">
                        Full name: {firstname} {lastname}
                    </div>
                    <div className="col-12">
                        <button onClick={buttonClick}>CLick</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

