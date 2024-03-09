//*interface
//型エイリアスと似た型宣言の一周
//interface インターフェイス名 {}; <-これで宣言
//interfaceは、以下のものしか宣言できない
//① オブジェクト
//② 関数の型

interface Bread {
    calories: number;
}
interface Bread {
    type: string;
}
//同じインターフェイス名で宣言すると、プロパティが結合される
const francePan: Bread = {
    calories: 300,
    type: 'hard',
};

//*型エイリアス
type MaboDofu = {
    calories: number;
    spicylevel: number;
};

type Rice = {
    calories: number;
    gram: number;
};

//交差型にすることでプロパティを結合できる
type MaboDon = MaboDofu & Rice;

const maboDon: MaboDon = {
    calories: 1200,
    spicylevel: 5,
    gram: 350,
};
