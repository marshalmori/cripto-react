import styled from "@emotion/styled";

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <div>
      <p>
        Preço: <span>{PRICE}</span>
      </p>
      <p>
        Maior alta: <span>{HIGHDAY}</span>
      </p>
      <p>
        Menor baixa: <span>{LOWDAY}</span>
      </p>
      <p>
        Variação das 24h: <span>{CHANGEPCT24HOUR}</span>
      </p>
      <p>
        Última atualização: <span>{LASTUPDATE}</span>
      </p>
    </div>
  );
};

export default Resultado;
