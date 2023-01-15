export function randomNum(lowNum: number, topNum: number):number{
    return Math.floor(Math.random()*(topNum-lowNum+1))+lowNum;
}