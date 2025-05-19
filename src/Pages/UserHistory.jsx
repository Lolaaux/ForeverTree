function UserHistory({ session, handleLogout, storeState, loading }) {
  return (
    <div className="w-full">
      <div className="flex flex-col px-8 pt-20">
        <div className="flex flex-col md:flex-row justify-between gap-5 py-4">
          {" "}
          <p className="text-black">Welcome, {session.user.email}</p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2  rounded w-30"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-[green] text-[30px]">Your Donations:</h1>
          {!loading ? (
            <p className="text-[#247401]">Fetching...</p>
          ) : storeState.userData.length > 0 ? (
            <div className="flex flex-col">
              {storeState.userData.map((each, index) => (
                <div key={index} className="flex flex-col w-full gap-4 pt-4">
                  {" "}
                  <p className="text-black"> Donated as a/an: {each.donater}</p>
                  <p className="text-black">Payment type: {each.payment}</p>
                  <p className="text-black pb-5">
                    You donated: €{each.donatingAmount} to plant trees in{" "}
                    {each.donatingTo}
                  </p>
                  <hr></hr>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-black">You haven't made any donations.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserHistory;
