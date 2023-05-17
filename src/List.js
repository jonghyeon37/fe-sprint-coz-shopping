import Product from './Product';
import Category from './Category';
import Exhibition from './Exhibition';
import Brand from './Brand';

function List() {
    return (
      <div>
        <div className='contents'>
          <Product />
          <Category />
          <Exhibition />
          <Brand />
          </div>
          <div className='contents'>
          <Product />
          <Category />
          <Exhibition />
          <Brand />
          </div>
          <div className='contents'>
          <Product />
          <Category />
          <Exhibition />
          <Brand />
          </div>
          <div className='contents'>
          <Product />
          <Category />
          <Exhibition />
          <Brand />
          </div>
      </div>
    );
  }
  
  export default List;