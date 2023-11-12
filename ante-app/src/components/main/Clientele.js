import { useState, useEffect } from "react";
import { BASE_URL, imageCorrection } from "../../Constant";

function Clientele() {
  const [clientlist, getClients] = useState([]);

  useEffect(() => {
    const getClient = () => {
      fetch("http://localhost:5000/api/clientele")
        .then((res) => res.json())
        .then((clientData) => {
          getClients(imageCorrection(clientData));
        });
    };

    getClient();
  }, []);

  return (
    // clientele section starts here
    <section className="container-fluid clientele my-5 py-5 bg-colorlight">
      <div className="container">
        <h3 className="text-colorblack font-header-Font text-center mb-4 fw-bold text-capitalize">
          clientele
        </h3>
        <div className="row">
          <div className="grid-wrapper">
            {clientlist.map((client) => {
              const { id, imageUrl = "" } = client;
              return (
                <div className="grid-item" key={id}>
                  <img src={imageUrl} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    //  clientele section ends here
  );
}

export default Clientele;
