import { Competitor } from "../models/competitor";

export function generateMockRoster(noOfCompetitor: number, raw = true,competitorName='Seed'): any[] {
  const roster: any[] = [];
  for (let id = 1; id <= noOfCompetitor; id++) {
    const name = `${competitorName}-${id.toString()}`;
    if (raw) {
      roster.push({ id, name });
    } else {
      roster.push(new Competitor({ id, name }));
    }

  }
  return roster;
}
