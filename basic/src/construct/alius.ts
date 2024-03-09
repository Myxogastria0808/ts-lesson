const typeAliusSample = () => {
    //型エイリアス
    type Country = {
        capital: string;
        language: string;
        name: string;
    };
    //後で各々のオブジェクトを作成する
    const japan: Country = {
        capital: 'Tokyo',
        language: 'Japanese',
        name: 'Japan',
    };
    console.log('Country object:', japan);

    const america: Country = {
        capital: 'Washington',
        language: 'English',
        name: 'U.S.',
    };
    console.log('Country object:', america);

    //合併型(union)と交差型(intersection)
    type Knight = {
        hitPoint: number;
        swordPoint: number;
        weapon: string;
        swordSkill: string;
    };
    type Wizard = {
        hitPoint: number;
        magicPoint: number;
        weapon: string;
        magicSkill: string;
    };

    //合併型... KnightとWizardの両方のプロパティ又は、どちらかを引っ張ってこれる
    type Adventurer = Knight | Wizard;

    //交差型... KnightとWizardのすべてのプロパティを必要とする
    type Paladin = Knight & Wizard;

    //Adventurer
    //pattern1
    const adventurer1: Adventurer = {
        hitPoint: 28,
        swordPoint: 100,
        weapon: '木の剣',
        swordSkill: '振りかぶる',
    };
    console.log('pattern1:', adventurer1);
    //pattern2
    const adventurer2: Adventurer = {
        hitPoint: 30,
        magicPoint: 200,
        weapon: '木の杖',
        magicSkill: 'ファイアボール',
    };
    console.log('pattern2:', adventurer2);

    //Paladin
    //pattern1
    const paladin: Paladin = {
        hitPoint: 60,
        swordPoint: 100,
        magicPoint: 200,
        weapon: '木の剣, 木の杖',
        swordSkill: '振りかぶる',
        magicSkill: 'ファイアボール',
    };
    console.log('paladin:', paladin);
};

export default typeAliusSample;
