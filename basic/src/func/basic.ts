//*関数の戻り値の型
// const 関数名 = (仮パラメーター: 仮パラメーターの型): 戻り値の型v => {
//     処理内容
//     return ~ <-必要に対じて
// };
//*呼び出し
// 関数名(引数);

//*特殊なパラーメーターの型
//void <- return文を持たない関数の戻り値
//never <-決して戻ることのない関数の戻り値

//*void
const logMessage = (message: string): void => {
    console.log('message is :' + message);
};

//*never
const alwaysThrowError = (message: string): never => {
    throw new Error(message);
};

export { logMessage, alwaysThrowError };

type hello = () => void;

const a: hello = () => {
    console.log('hello');
};
