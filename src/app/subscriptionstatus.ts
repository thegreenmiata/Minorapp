export class SubscriptionStatus{
    
    Id: number;
    Status: string;

    constructor(id: number, status: string){
        this.Id = id;
        this.Status = status;
    }
}