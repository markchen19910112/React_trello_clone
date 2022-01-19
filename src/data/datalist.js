const cards = [
  {
    id: "card-1",
    title: "Learning Python",
  },
  {
    id: "card-2",
    title: "Reading a book",
  },
  {
    id: "card-3",
    title: "Taking a shower",
  },
];

const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Todo",
      cards,
    },
    "list-2": {
      id: "list-2",
      title: "In progress",
      cards: [],
    },
  },
  listIds: ["list-1", "list-2"],
};

export default data;
