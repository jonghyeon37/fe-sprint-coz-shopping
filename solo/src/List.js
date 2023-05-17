import { useState } from 'react';
import Product from './Product';
import Category from './Category';
import Exhibition from './Exhibition';
import Brand from './Brand';
import contents from './Main';

function List() {
  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    setIsOn(!isOn);
  };


  return (
    <div>
      <div className='contents'>
        <Product isOn={isOn} toggleHandler={toggleHandler} />
        <Category isOn={isOn} toggleHandler={toggleHandler} />
        <Exhibition isOn={isOn} toggleHandler={toggleHandler} />
        <Brand isOn={isOn} toggleHandler={toggleHandler} />
      </div>
      <div className='contents'>
        <Product isOn={isOn} toggleHandler={toggleHandler} />
        <Category isOn={isOn} toggleHandler={toggleHandler} />
        <Exhibition isOn={isOn} toggleHandler={toggleHandler} />
        <Brand isOn={isOn} toggleHandler={toggleHandler} />
      </div>
      <div className='contents'>
        <Product isOn={isOn} toggleHandler={toggleHandler} />
        <Category isOn={isOn} toggleHandler={toggleHandler} />
        <Exhibition isOn={isOn} toggleHandler={toggleHandler} />
        <Brand isOn={isOn} toggleHandler={toggleHandler} />
      </div>
      <div className='contents'>
        <Product isOn={isOn} toggleHandler={toggleHandler} />
        <Category isOn={isOn} toggleHandler={toggleHandler} />
        <Exhibition isOn={isOn} toggleHandler={toggleHandler} />
        <Brand isOn={isOn} toggleHandler={toggleHandler} />
      </div>
    </div>
  );
}

export default List;