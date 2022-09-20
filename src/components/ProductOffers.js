import React from "react";

function ProductOffers() {
  const divStyle = "flex flex-col gap-4 shadow-md m-4 pb-2";
  const h1Style = "text-2xl text-violet-700";

  
  return (
    <div className="bg-slate-200 py-4 px-2">
      <p className="text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        cursus, lacus at fringilla lacinia, leo leo eleifend tortor, quis
        sollicitudin mauris ipsum a elit.
      </p>
      <section>
        <div className={divStyle}>
          <h1 className={h1Style}>Quality Products</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            cursus, lacus at fringilla lacinia leo eleifend.
          </p>
        </div>

        <div className={divStyle}>
          <h1 className={h1Style}>Parking Facility</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            cursus, lacus at fringilla lacinia leo eleifend.
          </p>
        </div>

        <div className={divStyle}>
          <h1 className={h1Style}>Affordable Price</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            cursus, lacus at fringilla lacinia leo eleifend.
          </p>
        </div>
      </section>

      {/* <section className="bg-white p-8">
        <div>
          <ul>
            <div className="p-12 flex justify-between shadow-lg rounded-3xl text-2xl">
              <div className="flex  justify-between bg-slate-400">
                <li className="text-blue-500">01.</li>
                <li classsName="text-blue-500 ml-4">Home security</li>
              </div>
              <li>arrow right</li>
            </div>
          </ul>
        </div>
      </section> */}
    </div>
  );
}

export default ProductOffers;
