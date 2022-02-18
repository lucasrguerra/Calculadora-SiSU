'use strict';

function NumberInput({ label, id, number, setNumber, placeholder }) {
  return (
    <center className="py-2">
      <label className="text-gray-500 mx-auto text-sm md:text-lg font-bold" htmlFor="nome">{label}<br /></label>
      <div className='flex md:gap-2'> 
        <input className="mx-auto rounded-xl text-center border-gray-300 py-1 border-2 w-3/5" id={id}
          type="number"
          placeholder={placeholder}
          value={number}
          onChange={(event) => {
            setNumber(event.target.value);
          }}
        />
      </div>
    </center>
  );
};
export default NumberInput;