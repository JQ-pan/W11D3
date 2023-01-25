import { CoffeeContext } from "../context/CoffeeContext";
import { useContext } from 'react';

const SelectedCoffeeBean = () => {

  const bean = useContext(CoffeeContext)

  return (
    <div className="selected-coffee">
      <h2>{bean.coffeeBean.name}</h2>
    </div>
  );
}

export default SelectedCoffeeBean;