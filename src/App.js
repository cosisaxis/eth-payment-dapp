import { useState } from "react";
import { ethers } from "ethers";


function App() {
  return (
    <form className="m-4">
      <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white ">
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-center">
            Send ETH
          </h1>
          <div>
            <div className="my-3">
              <input 
              type='text'
              name='addr'
              className='input input-bordered block w-auto focus:ring focus:outline-none mx-auto'
              placeholder='Address'
              />
            </div>
            <div className="my-3">
              <input 
              type='text'
              name='addr'
              className='input input-bordered block w-auto focus:ring focus:outline-none mx-auto'
              placeholder='Amount'
              />
            </div>
          </div>
        </main>
        <footer className="p-4">
          <button 
          type="submit"
          className="btn bg-blue-500 submit-button focus:ring focus:outline-none w-full mx-auto block"
          >
          
            Send transfer
          </button>
        </footer>
      </div>
    </form>
  );
}

export default App;
