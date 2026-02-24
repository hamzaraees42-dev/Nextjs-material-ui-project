export interface Supplier {
  id: number;
  name: string;
  category: string;
  status: "active" | "inactive";
}

const suppliers: Supplier[] = [
  {
    id: 1,
    name: "Fresh Farms Distribution",
    category: "Produce",
    status: "active",
  },
  {
    id: 2,
    name: "National Dairy Co.",
    category: "Dairy",
    status: "active",
  },
  {
    id: 3,
    name: "Urban Bakery Supplies",
    category: "Bakery",
    status: "inactive",
  },
];

export default suppliers;
