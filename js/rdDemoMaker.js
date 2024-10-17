const rdDemos = [
    {
        title: "Drawer",
        description: "A wooden drawer",
        result: "assets/videos/drawer.gif",
        thumbnail: "assets/imgs/rd_examples/drawer.png",
    },
    {
        title: "Bucket",
        description: "An orange bucket with a Jack-o'-lantern face",
        result: "assets/videos/bucket.gif",
        thumbnail: "assets/imgs/rd_examples/bucket.png",
    },
    {
        title: "Clamp",
        description: "A metal clamp",
        result: "assets/videos/clamp.gif",
        thumbnail: "assets/imgs/rd_examples/clamp.png",
    },
    {
        title: "Safe",
        description: "A safe box",
        result: "assets/videos/safe.gif",
        thumbnail: "assets/imgs/rd_examples/safe.png",
    },
    {
        title: "Helmet",
        description: "A red motorcycle stunt helmet",
        result: "assets/videos/helmet.gif",
        thumbnail: "assets/imgs/rd_examples/helmet.png",
    },
    {
        title: "Fire Extinguisher",
        description: "A fire extinguisher",
        result: "assets/videos/fire-extinguisher.gif",
        thumbnail: "assets/imgs/rd_examples/fire_extinguisher.png",
    },
    {
        title: "Envelope",
        description: "A red box-like envelope",
        result: "assets/videos/envelope.gif",
        thumbnail: "assets/imgs/rd_examples/envelope.png",
    },
    {
        title: "Angle Grinder",
        description: "A yellow angle grinder",
        result: "assets/videos/angle-grinder.gif",
        thumbnail: "assets/imgs/rd_examples/angle_grinder.png",
    },
    {
        title: "Oven",
        description: "An oven",
        result: "assets/videos/oven.gif",
        thumbnail: "assets/imgs/rd_examples/oven.png",
    },
    {
        title: "Monocular",
        description: "A bronze monocular",
        result: "assets/videos/monocular.gif",
        thumbnail: "assets/imgs/rd_examples/monocular.png",
    },
    {
        title: "Ornithopter",
        description: "An ornithopter",
        result: "assets/videos/ornithopter.gif",
        thumbnail: "assets/imgs/rd_examples/ornithopter.png",
    },
    {
        title: "Pizza cutter",
        description: "A pizza cutter with a red handle",
        result: "assets/videos/pizza_cutter.gif",
        thumbnail: "assets/imgs/rd_examples/pizza_cutter.png",
    }
];

/* <div class="col justify-content-center align-middle">
<div class="card border-1 m-2">
    <div class="card-image text-center">
        <result autoplay muted loop playsinline webkit-playsinline style="width: 60%;">
            <source src="assets/videos/drawer.mp4" type="result/mp4">
        </result>
    </div>
    <div class="backgroundEffect"></div>
    <div class="card-body text-center">
        <h5 class="card-title">
            Drawer
        </h5>
        <div class="card-text text-prompt">
            "A wooden drawer"
        </div>
    </div>
</div>
</div> */

function makeRichDreamerDemos() {
    $("#rd_demos-prompt").attr("placeHolder", rdDemos[0].description);
    $("#rd_demos-result").attr("src", rdDemos[0].result);
    
    rdDemos.forEach((demo) => {
        const $thumbnail = $(`<div class="col pb-1 px-1"></div>`);
        const $img = $(`<img class="thumbnail rounded" src="${demo.thumbnail}" style="width: 100%;">`);
        $img.click(() => {
            $("#rd_demos-prompt").attr("placeHolder", demo.description);
            $("#rd_demos-result").attr("src", demo.result);
        });
        $thumbnail.append($img);
        $("#rd_demos").append($thumbnail);
    });
}