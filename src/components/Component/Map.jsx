import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MapPositions from "/src/Data/MapPositions";
import { useDispatch, useSelector } from "react-redux";
import { donatingCountry } from "../../Donations/donationSlice";

function Map() {
  const position = [54.526, 15.2551];
  const dispatch = useDispatch();
  const selectedCountry = useSelector((store) => store.donate.donatingTo);

  function handleSelectedTxt(country) {
    dispatch(donatingCountry(country));
  }

  return (
    <div className="flex justify-center w-full p-5">
      <MapContainer
        center={position}
        zoom={3}
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
        zoomControl={false}
        className="w-110 h-100 self-center"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        />
        {MapPositions.map((each) => {
          const country = Object.keys(each)[0];

          return (
            <Marker position={each[country]}>
              <Popup>
                <div className="flex flex-row gap-5 justify-center font-bold items-center">
                  <p className="text-black text-[18px] font-[400] ">
                    {" "}
                    {country}
                  </p>

                  <button
                    className="text-black  w-fit px-2 h-10 rounded-[10px] text-white text-[15px] font-[400]"
                    onClick={() => handleSelectedTxt(country)}
                    style={{
                      backgroundColor:
                        donatingCountry === country ? "#1B5402" : "green",
                    }}
                  >
                    {selectedCountry === country ? "Selected" : "Select"}
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
