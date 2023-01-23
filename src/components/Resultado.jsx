import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="Imagem da criptomoeda"
      />
      <div>
        <Precio>
          Preço: <span>{PRICE}</span>
        </Precio>
        <Texto>
          Maior alta: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Menor baixa: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variação das 24h: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última atualização: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
