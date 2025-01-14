import { useParams } from "react-router-dom";
import { useGet } from "../hooks/useGet";

export const SingleNewsPage = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGet(
    `https://api.mediehuset.net/mediesuset/news/${id}`
  );

  return (
    <>
      {data && (
        <div>
          <img src={data.item.image} alt="" />
          <h1>{data.item.title}</h1>
          <p>{data.item.content}</p>
        </div>
      )}
    </>
  );
};
