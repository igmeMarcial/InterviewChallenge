import type { Emocion } from "./types";

export default function ordenarEmociones(emociones: Emocion[], orden: boolean): Emocion[] {
  // TODO: implementar
  if (emociones.length === 0) {
    return emociones;
  }
  const ordenNumerico = orden ? -1 : 1;

  return emociones.sort((a, b) => {
    const valoresEmociones: Record<Emocion, number> = {
      ":D": 5,
      ":)": 4,
      ":|": 3,
      ":(": 2,
      T_T: 1,
    };
    const valorA = valoresEmociones[a];
    const valorB = valoresEmociones[b];
    return (valorA - valorB) * ordenNumerico;
  });
}
