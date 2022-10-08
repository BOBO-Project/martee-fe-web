import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import S from "./_PortoPageStyle";
import ContextBanner from "components/ContextBanner";
import portoBanner from "../../assets/images/portoBanner.png";
import useAxios from "hooks/useAxios";
import titlePorto from "assets/images/textPorto.png";
import { color } from "styles/colors";
import { PORTO_HOME_URL } from "url/api-url";
import { BASE_URL } from "url/api-url";
import { PORTO_PATH } from "url/web-url";

const PortoPage: FC = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [totalpages, setTotalPages] = useState<number[]>([]);
  const { response, fetchData } = useAxios(PORTO_HOME_URL);

  const dataPorto = response?.data || null;

  useEffect(() => {
    fetchData({
      params: { page, category, limit: 8 },
    });
  }, [page, category]);

  useEffect(() => {
    const arr = [];
    for (let i = 1; i <= response?.totalPages; i++) {
      arr.push(i);
    }
    setTotalPages(arr);
  }, [response]);

  const handleChangeCategory = (value: string) => {
    setCategory(value);
    setPage(1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ContextBanner backgroundImg={portoBanner} title={titlePorto} />
      <S.Title>PORTOFOLIO</S.Title>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "0 0 2% 0",
        }}
      >
        <div style={{ color: color["primary-cream2"] }}>
          <S.Button
            onClick={() => handleChangeCategory("")}
            category={category === "" ? true : false}
          >
            Semua Kategori
          </S.Button>
          •
        </div>
        <div style={{ color: color["primary-cream2"] }}>
          <S.Button
            onClick={() => handleChangeCategory("traditional-wedding")}
            category={category === "traditional-wedding" ? true : false}
          >
            Traditional Wedding
          </S.Button>
          •
        </div>
        <div style={{ color: color["primary-cream2"] }}>
          <S.Button
            onClick={() => handleChangeCategory("international-wedding")}
            category={category === "international-wedding" ? true : false}
          >
            International Wedding
          </S.Button>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          gap: 20,
          marginBottom: "30px",
        }}
      >
        {dataPorto
          ? dataPorto.map((e: any) => {
              return (
                <div
                  key={e.id}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  {e.PortoImages.map((el: any) => {
                    if (el.is_main) {
                      return (
                        <div
                          style={{
                            padding: "22px",
                            background: "#F5EDE4",
                          }}
                        >
                          <img
                            key={el.id}
                            src={`${BASE_URL}/${el.image_url}`}
                            alt={`${el.id}-${el.image_url}`}
                            width={245}
                            height={245}
                          />
                        </div>
                      );
                    } else {
                      return <></>;
                    }
                  })}
                  <h3
                    style={{
                      textAlign: "center",
                      color: "#08182F",
                      fontSize: "14px",
                    }}
                  >
                    {e.name}
                  </h3>
                  <button
                    style={{
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                      color: color["primary-cream"],
                    }}
                    onClick={() => navigate(`${PORTO_PATH}/${e.id}`)}
                  >
                    SEE MORE {">"}
                  </button>
                </div>
              );
            })
          : null}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        <div
          style={{
            color: color["primary-cream2"],
            padding: "5px 15px",
            cursor: "pointer",
            fontFamily: "roboto",
            borderRadius: "5px",
            fontWeight: 700,
          }}
          onClick={() => setPage(page - 1)}
        >
          {"<"}
        </div>
        {totalpages.length > 0 &&
          totalpages.map((x: any) => (
            <div
              key={x}
              style={{
                background: page === x ? color["primary-cream2"] : "",
                color:
                  page === x ? color["primary-white"] : color["primary-cream2"],
                padding: "5px 15px",
                cursor: "pointer",
                fontFamily: "roboto",
                borderRadius: "5px",
                fontWeight: 700,
              }}
              onClick={() => setPage(x)}
            >
              {x}
            </div>
          ))}
        <div
          style={{
            color: color["primary-cream2"],
            padding: "5px 15px",
            cursor: "pointer",
            fontFamily: "roboto",
            borderRadius: "5px",
            fontWeight: 700,
          }}
          onClick={() => setPage(page + 1)}
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

export default PortoPage;
