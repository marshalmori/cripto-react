import { Fragment } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
`;

const useSelectMonedas = (label, opciones) => {
  const SelectMonedas = () => (
    <Fragment>
      <Label>{label}</Label>
      <select>
        <option value="">Selecione</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </select>
    </Fragment>
  );

  return [SelectMonedas];
};

export default useSelectMonedas;
