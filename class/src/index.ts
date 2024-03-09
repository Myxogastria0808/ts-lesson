import { aliusSample } from './class/alius';
import { Person, Android, Animal, writeConstructor } from './class/class';

//型エイリアスのパターン
aliusSample();

//classのパターン
const taro = new Person('Taro', 30, 'Japan');

//メソッドの呼び出し
taro.logProfile();

//publicは、呼び出せる
console.log(taro.name);
//protected private は、エラーとなる
// console.log(taro.nationality);
// console.log(taro.age);

//publicは、書き換えも可能
taro.name = 'Jiro';

//メソッドの呼び出し
taro.logProfile();

//継承されたクラス
const meiko = new Android('Meiko', 40, 'Japan');
console.log(meiko.profile());

//set, get
const meron = new Animal('meron', 10);
//getterは、中身が見れる
console.log(meron.getPetName);
//中身のチェック
meron.animalLog();
//setterは、中身を変えれる
meron.setPetAge = 1;
//中身のチェック
meron.animalLog();

//writeConstructor
const instanseWriteConstructor = new writeConstructor('Hello', 100);
instanseWriteConstructor.constructorLog();
