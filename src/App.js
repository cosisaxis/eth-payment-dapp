import { useState } from "react";
import { ethers } from "ethers";
import ErrorMsg from "./ErrorMsg";
import TransactionsList from "./TransactionsList";
import './index.css'



const payment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No wallet was found, please install");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function App() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await payment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr")
    });
  };

  return (
   <div className="container">
    <form className="m-4" onSubmit={submit}>
      <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-red-500">
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-center text-white">
            ETH Payment
          </h1>
          <div className="">
            <div className="my-3">
              <input
                type="text"
                name="addr"
                className="input input-bordered block w-auto mx-auto focus:ring focus:outline-none"
                placeholder="Recipient Address"
              />
            </div>
            <div className="my-3">
              <input
                name="ether"
                type="text"
                className="input input-bordered block w-auto  mx-auto focus:ring focus:outline-none"
                placeholder="Amount in ETH"
              />
            </div>
          </div>
        </main>
        <footer className="p-4">
          <button
            type="submit"
            className="btn btn-blue submit-button focus:ring focus:outline-none w-full"
          >
            Pay now
          </button>
          <ErrorMsg message={error} />
          <TransactionsList txs={txs} />

          <div>
            <h2 className=" text-center mt-2 text-white">
              made by <a href='https://twitter.com/cartieraxis' className="text-black font-bold">Axis</a>
            </h2>
          </div>
        </footer>
      </div>
    </form>
    </div>
   

    
  );
 
}

