export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold">Scanner Link</h2>
          <p className="py-3">Your browser for the crypto network</p>
          <div className="join">
            <input
              type="text"
              className="input w-full max-w-xs join-item"
              placeholder="Crypto address"
            ></input>
            <button className="btn bg-orange-300 join-item rounded-r-full">Scan</button>
          </div>
        </div>
      </div>
    </div>
  );
}
