//存在しないことを表現する型
//null型 <-値の欠損(初期化を経ているのに、値が割り当てられていない)
//undefined <-初期化されておらず、値が割り当てられていない

const notExistSample = () => {
    //null型
    let name = null;
    console.log('Type:', typeof name, name);
    //nullの判定
    if (name == null) {
        console.log('The type of name is ' + name);
    } else {
        console.log('The type of name ism`t null.');
    }

    //undefined型
    let hello = undefined;
    console.log('Type:', typeof hello, hello);
    //undefinedの判定
    if (hello == null) {
        console.log('The type of hello is ' + hello);
    } else {
        console.log('The type of hello ism`t undefined.');
    }
};

export default notExistSample;
