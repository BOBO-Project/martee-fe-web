import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "hooks/useAxios";
import { BASE_URL, PORTO_DETAIL_URL } from "url/api-url";

const PortoDetail: FC = () => {
  const { id } = useParams();

  const { response, fetchData } = useAxios(`${PORTO_DETAIL_URL}/${id}`);
  const mainImage = response?.data.PortoImages.find((x: any) => x.is_main);
  console.log(mainImage);

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ padding: "61px", background: "#F5EDE4" }}>
        <img
          src={`${BASE_URL}/${mainImage.image_url}`}
          alt={`${mainImage.id} - ${mainImage.image_url}`}
          width={560}
          height={560}
        />
      </div>
      <h1>{response?.data.name}</h1>
      {response?.data.description.length > 0 && (
        <div
          dangerouslySetInnerHTML={{
            __html: response?.data.description.length,
          }}
        />
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          maxWidth: "864px",
          margin: "auto",
        }}
      >
        {response?.data.PortoImages.map((el: any, i: number) => (
          <div
            key={el.id}
            style={{ gridColumn: i % 3 === 0 ? "1 / span 2" : undefined }}
          >
            <img
              src={`${BASE_URL}/${el.image_url}`}
              alt={`${el.id}-${el.image_url}`}
              style={{
                maxWidth: "680px",
                width: i % 3 === 0 ? undefined : "340px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortoDetail;
