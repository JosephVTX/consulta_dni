import { atom } from "nanostores";
import { useState } from "react";

export const dni = atom(0);

export const Search = () => {
  const [error, setError] = useState(false);

  const handleForm: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const dniValue = (form[0] as HTMLInputElement).value;

    if (dniValue.length === 8) {
      setError(false);
      dni.set(parseInt(dniValue));
    } else {
      setError(true);
    }
  };

  return (
    <form className="flex flex-col mt-4 gap-2 w-[15rem]" onSubmit={handleForm}>
      <input
        required={true}
        step="1"
        min={8}
        placeholder="Ingrese su DNI"
        className="rounded-md h-[40px] p-2 outline-none"
        type="number"
      />

      {error && <p className="text-red-500 text-center">El dni debe contener 8 dígitos</p>}

      <button
        className="text-white w-full h-[40px] bg-indigo-600 rounded-md"
        type="submit"
      >
        Buscar
      </button>
    </form>
  );
};
