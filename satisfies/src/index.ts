//引用元: https://9sako6.com/posts/why-typescript-satisfies-operator
//satisfies 演算子は、式 satisfies 型のようにして使い、
//式が型にマッチするかどうかをチェックします。

//式がある型にマッチすることを保証しつつ、文脈的に型付けする
//式 が 型にマッチするかどうかをチェックし、型アノテーションとは違い、型推論結果を保つ

type User = {
    email: string;
};

//user_1の型は、{ email: string; }
const user_1 = {
    email: 'user.1@example.com',
} satisfies User;

//user_2の型は、User
const user_2: User = {
    email: 'user.2@example.com',
};

//**satisfiesのメリット**//
type Color = 'red' | 'green' | 'blue';
type RGB = [red: number, green: number, blue: number];

const palette = {
    red: [255, 0, 0],
    green: '#00ff00',
    blue: '#0000ff',
} satisfies Record<Color, string | RGB>;

//以下ができる
//*satisfies を使うと、書くバリューの型が正しく特定の型に推論される
//palette.redの型は、[number, number, number]
//palette.greenの型は、string
const r: number | undefined = palette.red.at(0);
const g: string = palette.green.toLocaleUpperCase();

const paletteAnotation: Record<Color, string | RGB> = {
    red: [255, 0, 0],
    green: '#00ff00',
    blue: '#0000ff',
};

//*型アノテーションを使うと、バリューの全てが　string | RGB になってしまう。
//paletteAnotation.redの型は、string | RGB
//paletteAnotation.greenの型は、string | RGB
//配列の要素 (number)のはずが、string型の可能性が残ってしまっている。
const rAnotation: string | number | undefined = paletteAnotation.red.at(0);
//以下のように開発者が型を明示する必要ができてきてしまう。
const rAnotation2: number | undefined = (paletteAnotation.red as RGB).at(0);

//paletteAnotation.greenは、stringであってほしいが、string | RGB
//であるがゆえにエラーになってしまう。
//const gAnotation: any = paletteAnotation.green.toUpperCase();
//以下のように開発者が型を明示する必要ができてきてしまう。
const gAnotation = (paletteAnotation.green as string).toUpperCase();
