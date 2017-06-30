import stores from "../store/store"
const request = {
    getDataOne: false
}
export function changeStartData() {
    if (request.getDataOne) {
        return;
    }
    request.getDataOne = true;
    let testData=Math.random();
    console.log(testData)
    stores
        .goTestStore
        .changeStartData(testData);
}