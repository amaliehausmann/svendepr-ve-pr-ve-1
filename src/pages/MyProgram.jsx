import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useGet } from "../hooks/useGet";

export const MyProgram = () => {
  const { userData } = useContext(UserContext);
  const { data } = useGet(
    `https://api.mediehuset.net/mediesuset/programme/${userData.user_id}`,
    userData?.access_token
  );

  // function der fjerner duplicates
  // https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects/59528833#59528833
  function getUnique(arr, comp) {
    return arr
      .map((e) => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i) // store the keys of the unique objects
      .filter((e) => arr[e])
      .map((e) => arr[e]); // eliminate the dead keys & store unique objects
  }

  const myProgram = getUnique(data?.items || [], "event_id");

  console.log(myProgram);
  return (
    <div>
      <h1>My Program</h1>
      {myProgram?.length > 0 ? (
        myProgram.map((item) => (
          <h1 key={item.event_id}>{item.event_title}</h1>
        ))
      ) : (
        <p>No events in your program.</p>
      )}
    </div>
  );
};
