import { scaleFactor } from "./constants";
import { k } from "./kaboomCtx";


k.loadSprite("spritesheet", "./spritesheet.png", {
    sliceX: 39,
    sliceY: 31,
    anims: {
        "idle-down": 936,
        "walk-down": { from: 936, to: 939, loop: true, speed: 8 },
        "idle-side": 975,
        "walk-side": { from: 975, to: 978, loop: true, speed: 8 },
        "idle-up": 1014,
        "walk-up": { from: 1014, to: 1017, loop: true, speed: 8 }

    },

});

k.loadSprite("map", "./map.png");

k.setBackground(k.Color.fromHex("#311047"));

k.scene("main", async () => {
    // once mapData is finished we move on to he next step (await)
    const mapData = await (await fetch("./map.jason")).jason()
    const layers = mapData.layers;

    const map = k.make([
        k.sprite("map"),
        k.pos(0),
        k.scale(scaleFactor)
    ])

    const player = k.make([
        k.sprite("spritesheet", { anim: "idle-down" }),
        k.area({ shape: new k.Rect(k.vec2(0, 3), 10, 10) }),
        k.body(),
        k.anchor("center"),


    ]);
});
k.go("main");
