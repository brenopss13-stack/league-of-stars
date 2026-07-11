export type Player = {
  name: string;
  avatar: string;
  image: string;
  revenue: number;
  growth: number;
  /** Positive = subiu X posições, negativo = desceu, 0 = manteve */
  positionChange: number;
};

const img = (id: number) => `https://i.pravatar.cc/240?img=${id}`;

export const players: Player[] = [
  { name: "João Silva", avatar: "JS", image: img(12), revenue: 1250000, growth: 34, positionChange: 1 },
  { name: "Marina Costa", avatar: "MC", image: img(47), revenue: 980000, growth: 21, positionChange: -1 },
  { name: "Rafael Mendes", avatar: "RM", image: img(33), revenue: 845000, growth: 18, positionChange: 0 },
  { name: "Lucas Ferreira", avatar: "LF", image: img(15), revenue: 623000, growth: 12, positionChange: 2 },
  { name: "Ana Beatriz", avatar: "AB", image: img(45), revenue: 512400, growth: 9, positionChange: 1 },
  { name: "Pedro Alves", avatar: "PA", image: img(53), revenue: 421000, growth: -3, positionChange: -3 },
  { name: "Camila Rocha", avatar: "CR", image: img(49), revenue: 356800, growth: 15, positionChange: 3 },
  { name: "Diego Martins", avatar: "DM", image: img(57), revenue: 289500, growth: 7, positionChange: 0 },
  { name: "Beatriz Lima", avatar: "BL", image: img(20), revenue: 214300, growth: -2, positionChange: -2 },
  { name: "Thiago Souza", avatar: "TS", image: img(60), revenue: 189700, growth: 5, positionChange: 1 },
];
