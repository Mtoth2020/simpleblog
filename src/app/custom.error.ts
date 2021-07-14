interface NotificationObj {
    message: string,
    notificationCode: number
}
//error ősosztály kiegészítése
export class NotificationError extends Error {
    notificationCode: number;
    constructor(props: NotificationObj) { //meghívjuk az ősosztályt a superrel és példányosítjuk vele
        super(props.message);
        /*errorObj.message = `
        Code: ${error.status}\n
        Message: ${this.getServerErrorMessage(error)}`*/
        this.notificationCode = props.notificationCode;
    }
}