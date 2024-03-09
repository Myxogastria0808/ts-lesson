//primitive型　(typescriptは、型推定をしてくれる)
//型は。3種類
//string型
//number型
//boolean型

const primitiveSample = () => {
    //string型
    const name: string = 'Hello, World';
    console.log('primitive type:', typeof name, name);

    //number型
    const barth: number = 808;
    console.log('primitive type:', typeof barth, barth);

    //boolean型
    const check: boolean = barth >= 100;
    console.log('primitive type:', typeof check, check);
};

export default primitiveSample;
