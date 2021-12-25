import React, { useState } from "react";

export function Form() {
  const [name, setName] = useState("");
  const [favColor, setFavColor] = useState("");
  const [res, setRes] = useState();

  async function hadnleSubmit(evt: React.SyntheticEvent<HTMLFormElement>) {
    evt.preventDefault();

    if (!(name != "" || favColor != "")) {
      return;
    }

    const res = await fetch("/.netlify/functions/submit", {
      method: "POST",
      body: JSON.stringify({ name, favColor }),
    }).then((res) => res.json());

    setRes(res);
    setName("");
    setFavColor("");
  }

  return (
    <>
      <div className='p-5'>
        <div className='p-4 w-full overflow-x-auto  bg-gray-200 rounded-2xl'>
          <pre>{res ? JSON.stringify(res, null, 2) : null}</pre>
        </div>
      </div>
      <form
        style={{ padding: "20px", margin: "20px" }}
        onSubmit={hadnleSubmit}
        className=''
      >
        <div>
          <label htmlFor='name'>Name</label>
          <br />
          <input
            type='text'
            name='name'
            id='name'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor='favColor'>FavColor</label>
          <br />
          <input
            type='text'
            name='favColor'
            id='favColor'
            onChange={(e) => {
              setFavColor(e.target.value);
            }}
          />
        </div>

        <button>Submit</button>
      </form>
    </>
  );
}
