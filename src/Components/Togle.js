import React, { useState } from "react";
const Togle = () => {
  const [state, setSate] = useState(false);
  const handleClick = () => {
    setSate(!state);
  };

  return (
    <>
      <button onClick={handleClick}>{state ? "hide" : "show"}</button>
      {state ? (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          dolores eius non, voluptate autem repellendus molestias tenetur nam
          quidem omnis. Impedit beatae nostrum maiores nisi commodi nulla qui
          iure iste similique fuga, perferendis sed in dolores non deserunt
          sunt. Voluptates quae ut blanditiis ipsam optio porro voluptatibus
          saepe modi quibusdam dolor voluptatem deleniti officia eligendi
          tempora minima eum reiciendis placeat, sit vel officiis, alias cum
          nemo quia perferendis! Vitae similique beatae iste labore quos
          eligendi unde et, soluta vel consequatur numquam, molestiae minus
          iusto tenetur placeat rerum perspiciatis totam dolorem qui ab quia!
          Velit sapiente nisi iusto voluptate. Ipsam, nemo!
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default Togle;
