import { Fragment } from "react";
import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: Lato;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 15px;
  border-radius: 10px;
`;

const useSelectMonedas = (label, opciones) => {
  const [state, setState] = useState("");

  const SelectMonedas = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">Selecione</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  return [state, SelectMonedas];
};

export default useSelectMonedas;
