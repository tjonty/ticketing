import { Ticket } from "../tickets";

it("implement optimistic concurrency control", async () => {
  // Create an instance of a ticket
  const ticket = Ticket.build({
    title: "concert",
    price: 5,
    userId: "124",
  });

  // Save the ticket to the database
  await ticket.save();

  // fetch the ticket twice
  const firstInstance = await Ticket.findById(ticket.id);
  const secondInstace = await Ticket.findById(ticket.id);

  // make two separate changes to the tickets we fetched
  firstInstance!.set({ price: 10 });
  secondInstace!.set({ price: 15 });

  // save the fetched ticket
  await firstInstance!.save();

  //   save the second fetched ticket
  try {
    await secondInstace!.save();
  } catch (err) {
    return;
  }

  throw new Error("Should not reach this point");
});

it("increments the version number on multiple saves", async () => {
  const ticket = Ticket.build({
    title: "concert",
    price: 20,
    userId: "123",
  });

  await ticket.save();
  expect(ticket.version).toEqual(0);
  await ticket.save();
  expect(ticket.version).toEqual(1);
  await ticket.save();
  expect(ticket.version).toEqual(2);
});
