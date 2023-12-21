import React, {useState} from 'react';
import '../App.css';
function Parent() {
    let [show, setShow] = useState(false);
    let [weight, setWeight] = useState(0);
    let [planetName, setPlanet] = useState('');
    let [image, setImage] = useState('');
    const calculateWeight = (w,p) => {
        switch(p) {
            case 'Mercury':
                setWeight((w*3.7));
                setImage(require('../images/mercury.png'));
                break;
             case 'Venus':
                setWeight(w*3.9);
                setImage(require('../images/venus.png'));
                break;
            case 'Earth':
                setWeight(w*9.8);
                setImage(require('../images/earth.png'));
                break;
            case 'Mars':
                setWeight(w*3);
                setImage(require('../images/mars.png'));
                break;
            case 'Jupiter':
                setWeight(w*1.8);
                setImage(require('../images/jupiter.png'));
                break;
            case 'Saturn':
                setWeight(w*1.4);
                setImage(require('../images/pluto.png'));
                break;
            case 'Uranus':
                setWeight(w*0.08);
                setImage(require('../images/uranus.png'));
                break;
            case 'Neptune':
                setWeight(w*1.7);
                setImage(require('../images/neptune.png'));
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let weight =  e.target.elements.weightName.value;
        let planet = e.target.elements.dropdown.value;
        setPlanet(e.target.elements.dropdown.value);
        calculateWeight(weight,planet); 
        setShow(true);
    };
    return (
      <div>
        <h1 className='headerh1'>Calculate the weight of an object on a planet</h1>
        <form onSubmit={handleSubmit}>
       <div className='banner1'>
       <input 
       id = 'weightName' 
       name='weight' 
       type='number' 
       placeholder='Enter weight in kg' 
       className='button'
       required>
       </input>
       <select 
       id = "dropdown" 
       className='button1' 
       name='planetsName'>
        <option value = 'Mercury'>Mercury</option>
        <option value = 'Venus'>Venus</option>
        <option value = 'Earth'>Earth</option>
        <option value = 'Mars'>Mars</option>
        <option value = 'Jupiter'>Jupiter</option>
        <option value = 'Saturn'>Saturn</option>
        <option value = 'Uranus'>Uranus</option>
        <option value = 'Neptune'>Neptune</option>
      </select>
       <button 
       type='submit' 
       className='button3'>
        Calculate Weight</button>
       <button 
       type='reset' 
       className='button3' 
       onClick={() => setShow(false)}>
        Reset</button>
        </div> 
        </form>
       {show && <div className='banner2'>
                <img src={image} alt={planetName} className='images'/>
            <div className='banner3'>
                <h3 className='header2'>The weight of an object on {planetName}</h3>
                <div className='banner4'>
                {weight.toFixed(2)}N
                </div>
            </div>
        </div>}
        </div>
    )

}

export default Parent;
