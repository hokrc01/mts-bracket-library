import {Competitor} from './competitor';
export class Match {
    id: number;
    competitor1: Competitor;
    competitor2: Competitor;

    constructor(competitor1: Competitor, competitor2: Competitor, id: number) {
        this.competitor1 = competitor1;
        this.competitor2 = competitor2;
        this.id = id
    }


}