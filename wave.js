import{
    Point
} from './point.js';

export class Wave {
    constructor(index, totalPoints, color){
        this.index = index;
        this.totalPoints = totalPoints;
        this.color = color;
        this.points = [];
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;

        this.pointGap = this.stageWidth / (this.totalPoints - 1);

        this.init();
    }

    init() {
        this.points = [];

        for (let i = 0; i < this.totalPoints; i++){
            const point = new Point(
                this.index + i,
                this.pointGap * i,
                this.centerY,
            );
            this.points[i] = point;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = '#ff0000';

        this.point.update();

        ctx.arc(this.point.x, this.point.y, 30, 0 , 2 * Math.PI);
        ctx.fill();
    }
}