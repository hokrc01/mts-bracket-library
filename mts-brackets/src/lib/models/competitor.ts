export class Competitor {
    id:string;
    name: string;
    schoolId: string;

    constructor(obj?: any) {
        this.id = (obj && obj.id) || '';
        this.name = (obj && obj.name) || '';
        this.schoolId = (obj && obj.schoolId) || '';
    }

}