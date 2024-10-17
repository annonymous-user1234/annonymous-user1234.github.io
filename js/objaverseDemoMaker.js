const objaverseDemos = [
    {
        name: "Compass",
        thumbnail: "assets/videos/objaverse_examples/compass_thumbnail.jpg",
        model: "https://sketchfab.com/3d-models/ww1-vintage-compass-df9fa07ac2a644a2818c16a7b97cc5ba/embed",
        result: "assets/videos/objaverse_examples/compass.gif"
    },
    {
        name: "Lantern",
        thumbnail: "assets/videos/objaverse_examples/lantern_thumbnail.jpg",
        model: "https://sketchfab.com/3d-models/lantern-f0b0ea89f20b4f10bb583c449ae04d9c/embed",
        result: "assets/videos/objaverse_examples/lantern.gif"
    },
    {
        name: "Rusty Car",
        thumbnail: "https://media.sketchfab.com/models/544aa41de67b48cf89f8fcc2bb06e8f4/thumbnails/7c955920d3fa42ccaa76043faa63a4a0/1024x576.jpeg",
        model: "https://sketchfab.com/3d-models/old-rusty-car-2-544aa41de67b48cf89f8fcc2bb06e8f4/embed",
        result: "assets/videos/teaser/rusty_car.gif"
    },
    {
        name: "R2D2",
        thumbnail: "https://media.sketchfab.com/models/71374f8575744fb691f57256274c00ee/thumbnails/9f4165f71c404188b0a620faa68f7ec3/1be43c10d6f847689eb89c1f54ef5ffe.jpeg",
        model: "https://sketchfab.com/3d-models/r2-d2-71374f8575744fb691f57256274c00ee/embed",
        result: "assets/videos/teaser/r2d2.gif"
    },
    {
        name: "Door",
        thumbnail: "https://media.sketchfab.com/models/97d0a569506e4c2da5bb1b7262149951/thumbnails/104628dc9455475484df3bf1186d8732/ba7ebfd26d774366b22955d5c103077b.jpeg",
        model: "https://sketchfab.com/3d-models/turnstile-97d0a569506e4c2da5bb1b7262149951/embed",
        result: "assets/videos/teaser/turnstile.gif"
    },
    {
        name: "Missile",
        thumbnail: "https://media.sketchfab.com/models/3e4608397b4a464ca5563fb94cdb4221/thumbnails/84aca90bb09342f6a15caad6595ebd9c/dea7adb7513048aa82d503e2a616c897.jpeg",
        model: "https://sketchfab.com/3d-models/scifi-missile-launcher-3e4608397b4a464ca5563fb94cdb4221/embed",
        result: "assets/videos/teaser/missle_launcher.gif"
    },
    {
        name: "Space craft",
        thumbnail: "https://media.sketchfab.com/models/e766136d4871441289d37d44a4bbcd3b/thumbnails/b09767dc936f4ebc8f37476c28eed382/de01fb91f0b14ce3872f76f683140f23.jpeg",
        model: "https://sketchfab.com/3d-models/space-fighter-e766136d4871441289d37d44a4bbcd3b/embed",
        result: "assets/videos/teaser/fighter_jet.gif"
    },
    {
        name: "Oven",
        thumbnail: "https://media.sketchfab.com/models/9fd6d43d030a43a98a52baa1d5d303f2/thumbnails/e1ca062accd744699753a32e18f822b1/8e9dd9866873433cbca60fa63c0ac59f.jpeg",
        model: "https://sketchfab.com/3d-models/retro-oven-9fd6d43d030a43a98a52baa1d5d303f2",
        result: "assets/videos/teaser/oven.gif"
    },
    {
        name: "Microwave",
        thumbnail: "https://media.sketchfab.com/models/cb7e7aaf8a9749a588d984a659c38309/thumbnails/8beb5e0bfa514ec2aa8fa9dc67826989/f79bdff990b647a69993e6268717fbb5.jpeg",
        model: "https://sketchfab.com/3d-models/microwave-cb7e7aaf8a9749a588d984a659c38309/embed",
        result: "assets/videos/teaser/microwave.gif"
    }, 
    {
        name: "Laptop",
        thumbnail: "https://media.sketchfab.com/models/ed2a53dd243f492b8ce3ad1f4f54457b/thumbnails/12d5434c1e77413fb28a00aaf98ee5fb/0635d266110441e8881245f98cfc3936.jpeg",
        model: "https://sketchfab.com/3d-models/laptop-ed2a53dd243f492b8ce3ad1f4f54457b/embed",
        result: "assets/videos/teaser/laptop.gif"
    }
];

/* <div class="col justify-content-center align-middle">
<div class="card border-1 m-2">
    <div class="card-image text-center">
        <video autoplay muted loop playsinline webkit-playsinline style="width: 60%;">
            <source src="assets/videos/drawer.mp4" type="video/mp4">
        </video>
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

function makeObjaverseDemos() {
    $("#objaverse_demos-model").attr("src", objaverseDemos[0].model);
    $("#objaverse_demos-result").attr("src", objaverseDemos[0].result);
    
    objaverseDemos.forEach((demo) => {
        const $thumbnail = $(`<div class="col pb-1 px-1 thumbnail"></div>`);
        const $img = $(`<img src="${demo.thumbnail}" style="width: 100%;">`);
        $img.click(() => {
            $("#objaverse_demos-model").attr("src", demo.model);
            $("#objaverse_demos-result").attr("src", demo.result);
        });
        $thumbnail.append($img);
        $("#objaverse_demos").append($thumbnail);
    });
}