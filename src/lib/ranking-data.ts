export type Player = {
  name: string;
  avatar: string;
  revenue: number;
  growth: number;
  /** Positive = subiu X posições, negativo = desceu, 0 = manteve */
  positionChange: number;
};

export const players: Player[] = [
  { name: "João Silva", avatar: "JS", revenue: 1250000, growth: 34, positionChange: 1 },
  { name: "Marina Costa", avatar: "MC", revenue: 980000, growth: 21, positionChange: -1 },
  { name: "Rafael Mendes", avatar: "RM", revenue: 845000, growth: 18, positionChange: 0 },
  { name: "Lucas Ferreira", avatar: "LF", revenue: 623000, growth: 12, positionChange: 2 },
  { name: "Ana Beatriz", avatar: "AB", revenue: 512400, growth: 9, positionChange: 1 },
  { name: "Pedro Alves", avatar: "PA", revenue: 421000, growth: -3, positionChange: -3 },
  { name: "Camila Rocha", avatar: "CR", revenue: 356800, growth: 15, positionChange: 3 },
  { name: "Diego Martins", avatar: "DM", revenue: 289500, growth: 7, positionChange: 0 },
  { name: "Beatriz Lima", avatar: "BL", revenue: 214300, growth: -2, positionChange: -2 },
  { name: "Thiago Souza", avatar: "TS", revenue: 189700, growth: 5, positionChange: 1 },
];
