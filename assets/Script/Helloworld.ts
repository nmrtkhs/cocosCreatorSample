const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Sprite)
    titleImage: cc.Sprite = null;

    @property
    text: string = 'hello';

    @property(cc.Node)
    canvas: cc.Node = null;

    onLoad() {
        this.canvas.on(cc.Node.EventType.TOUCH_START, function (event) {
            var touches = event.getTouches();
            this.titleImage.enabled = false;
            this.label.enabled = false;
        }, this);
    }

    start () {
    }
}
