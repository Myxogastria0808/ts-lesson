//オプショナルパラメーター
//引数として含まなくてもよい仮パラメータを設定したい場合
// 仮パラメータ名?: 型 <-このように宣言する
const isUserSigndIn = (userId: string, username?: string): boolean => {
    if (userId == 'ABC') {
        console.log('User is signed in! Username is ', username);
        return true;
    } else {
        console.log('User is not signed in.');
        return false;
    }
};

//デフォルトパラメータ
//デフォルト値を持たせることができる
//仮パラメータ名: 型 = デフォルト値　<-このように宣言する
const isUserSigndIn2 = (userId: string, username: string = 'NO NAME'): boolean => {
    if (userId == 'ABC') {
        console.log('User is signed in! Username is ', username);
        return true;
    } else {
        console.log('User is not signed in.');
        return false;
    }
};

//レストパラメータを持つ関数
//可変長引数である。
//...仮パラメータ名: 型[] <-これで宣言できる
const sumProductPrice = (...productPrice: number[]) => {
    return productPrice.reduce((prevTotal: number, productPrice: number) => {
        return prevTotal + productPrice;
    }, 0);
};

//呼び出しシグネチャ
//関数、変数の型をまとめて宣言できる。
//自作の型集合みたいなのを作れる
//*省略記法
type msg = (message: string) => void;
const msg1: msg = (message) => {
    console.log('これは、シグネチャで宣言された型で作られた関数のmessage: ', message);
};

//*省略なしの記法
type fullMsg = {
    (message: string): void;
};
const msg2: fullMsg = (message) => {
    console.log('これは、シグネチャで宣言された型で作られた関数のmessage: ', message);
};

export { isUserSigndIn, isUserSigndIn2, sumProductPrice, msg1, msg2 };
