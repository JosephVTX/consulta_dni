import { useStore } from "@nanostores/react";
import { Details } from "./components/details/Details";
import { Profile } from "./components/profile/Profile";
import { Search, dni } from "./components/search/Search";
import { useApi } from "./hooks/useApi";
import EnvData from "./config";
const { API_DNI } = EnvData;

const App = () => {
  const $dni = useStore(dni);

  const data = useApi(
    API_DNI,

    $dni
  );

 

  return (
    <>
      <div className=" flex flex-col items-center mt-10">
        <Profile img={data?.foto} />
        <Details {...data} />
        <Search />
      </div>
    </>
  );
};
export default App;
