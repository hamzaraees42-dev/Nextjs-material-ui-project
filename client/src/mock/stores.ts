export type StoreStatus = "approved" | "pending" | "rejected";

export interface Store {
  id: number;
  name: string;
  location: string;
  status: StoreStatus;
  subscription: string;
}

const stores: Store[] = [
  {
    id: 1,
    name: "Fresh Mart Downtown",
    location: "Toronto, ON",
    status: "approved",
    subscription: "Active",
  },
  {
    id: 2,
    name: "Green Valley Grocers",
    location: "Mississauga, ON",
    status: "pending",
    subscription: "Trial",
  },
  {
    id: 3,
    name: "Community Foods",
    location: "Brampton, ON",
    status: "rejected",
    subscription: "Inactive",
  },
];

export default stores;
