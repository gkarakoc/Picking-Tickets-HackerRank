function maxTickets(tickets: number[]): number {
  tickets.sort((a, b) => a - b);
  let longest = 0;
  for (let i = 0; i < tickets.length; i++) {
    let j = i;
    for (; j < tickets.length - 1; j++)
      if (tickets[j + 1] - tickets[j] > 1) break;
    if (longest < j - 1) longest = j - 1;
  }
  return longest + 1;
}
