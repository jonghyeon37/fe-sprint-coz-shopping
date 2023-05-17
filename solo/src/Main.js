import { useState } from 'react';
import Product from './Product';
import Category from './Category';
import Exhibition from './Exhibition';
import Brand from './Brand';

function Main() {
  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <div className="list">
        <h2>상품 리스트</h2>
        <div className='contents'>
          <Product isOn={isOn} toggleHandler={toggleHandler} />
          <Category isOn={isOn} toggleHandler={toggleHandler} />
          <Exhibition isOn={isOn} toggleHandler={toggleHandler} />
          <Brand isOn={isOn} toggleHandler={toggleHandler} />
        </div>
      </div>
      <div className="book">
        <h2>북마크 리스트</h2>
        <div className='contents'>
          <Product isOn={isOn} toggleHandler={toggleHandler} />
          <Category isOn={isOn} toggleHandler={toggleHandler} />
          <Exhibition isOn={isOn} toggleHandler={toggleHandler} />
          <Brand isOn={isOn} toggleHandler={toggleHandler} />
        </div>
      </div>
    </div>
  );
}

export default Main;
