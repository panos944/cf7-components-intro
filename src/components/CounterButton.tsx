type ButtonProps = {
  onclick: () => void;
  disabled?: boolean;
  label: string;
  addClass?: string;
}


const CounterButton = ({onclick, disabled = false, label, addClass="bg-black"}: ButtonProps) => {
  return(
    <>
      <button 
      className={"bg-blue-400 text-white py-2 px-4 disabled:bg-gray-400 " + addClass}
      onClick={onclick}
      disabled = {disabled}>
      {label}
      </button>
    </>
  )
}

export default CounterButton;