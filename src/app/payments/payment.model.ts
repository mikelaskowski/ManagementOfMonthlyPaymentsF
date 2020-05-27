export class Payment {

    private _id: number;
    private _name: string;
    private _category: string;
    private _receiver: string;
    private _accountNumber: string;
    private _title: string;
    private _charge: number;
    private _paymentPeriod: string;
    private _chargeDay: number;
    private _chargeMonth: number;
    private _isPaid: boolean;
    private _imgPath: string;

    constructor(id: number, name: string, category: string, receiver: string, accountNumber: string,   title: string, charge: number, paymentPeriod: string, chargeDay: number, chargeMonth: number, isPaid: boolean, imgPath: string){
        this._id = id;
        this._name = name;
        this._category = category;
        this._receiver = receiver;
        this._accountNumber = accountNumber;
        this._title = title;
        this._charge = charge;
        this._paymentPeriod = paymentPeriod;
        this._chargeDay = chargeDay;
        this._chargeMonth = chargeMonth;
        this._isPaid = isPaid;
        this.imgPath = imgPath;
    }

    get id(): number {return this._id;}
    set id(newId: number) {this._id = newId;}

    get name(): string {return this._name;}
    set name(newName: string) {this._name = newName;}

    get category(): string {return this._category;}
    set category(newCategory: string) {this._category = newCategory;}

    get receiver(): string {return this._receiver;}
    set receiver(newReceiver: string) {this._receiver = newReceiver;}

    get accountNumber(): string {return this._accountNumber;}
    set accountNumber(newAccountNumber: string) {this._accountNumber = newAccountNumber;}

    get title(): string {return this._title;}
    set title(newTitle: string) {this._title = newTitle;}

    get charge(): number {return this._charge;}
    set charge(newCharge: number) {this._charge = newCharge;}

    get paymentPeriod(): string {return this._paymentPeriod;}
    set paymentPeriod(newPaymentPeriod: string) {this._paymentPeriod = newPaymentPeriod;}

    get chargeDay(): number {return this._chargeDay;}
    set chargeDay(newChargeDay: number) {this._chargeDay = newChargeDay;}

    get chargeMonth(): number {return this._chargeMonth;}
    set chargeMonth(newChargeMonth: number) {this._chargeMonth = newChargeMonth;}

    get isPaid(): boolean {return this._isPaid;}
    set isPaid(newIsPaid: boolean) {this._isPaid = newIsPaid;}

    get imgPath(): string {return this._imgPath;}
    set imgPath(newImgPath: string) {this._imgPath = newImgPath;}
    
}
