//クラスのプロパティの内容
//private <-クラス内のみ参照可能
//protected <-サブクラスからの参照も可能
//public <-どこからでも参照可能

//型エイリアス
type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type Player = 'first' | 'second';

//駒の位置を渡すクラス
class Position {
    //プロパティ
    private suji: Suji;
    private dan: Dan;
    //初期化
    constructor(suji: Suji, dan: Dan) {
        this.suji = suji;
        this.dan = dan;

        //パラメータに渡された位置と現在の位置を比較するメソッド
    }
}
//駒を表すクラス
//抽象クラス(Pieceはサブクラスを作ることで初めて使えるようになる)
abstract class Piece {
    //プロパティ
    private readonly player: Player;
    protected position: Position;
    //初期化
    constructor(suji: Suji, dan: Dan, player: Player) {
        //初期化(Positionの属性を持つpositionの初期化)
        this.position = new Position(suji, dan);
        this.player = player;
    }

    //メソッドの定義
    //駒の移動用のメソッド
    moveTo(position: Position) {
        this.position = position;
    }
    //移動できるかどうかの判定メソッド
    abstract canMoveTo(position: Position, player: Player): boolean;
}
