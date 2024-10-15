const demos = [
    {
        title: "Drawer",
        description: "A wooden drawer",
        video: "assets/videos/drawer.gif"
    },
    {
        title: "Bucket",
        description: "An orange bucket with a Jack-o'-lantern face",
        video: "assets/videos/bucket.gif"
    },
    {
        title: "Clamp",
        description: "A metal clamp",
        video: "assets/videos/clamp.gif"
    },
    {
        title: "Safe",
        description: "A safe box",
        video: "assets/videos/safe.gif"
    },
    {
        title: "Helmet",
        description: "A red motorcycle stunt helmet",
        video: "assets/videos/helmet.gif"
    },
    {
        title: "Fire Extinguisher",
        description: "A fire extinguisher",
        video: "assets/videos/fire-extinguisher.gif"
    },
    {
        title: "Envelope",
        description: "A red box-like envelope",
        video: "assets/videos/envelope.gif"
    },
    {
        title: "Angle Grinder",
        description: "A yellow angle grinder",
        video: "assets/videos/angle-grinder.gif"
    },
    {
        title: "Oven",
        description: "An oven",
        video: "assets/videos/oven.gif"
    },
    {
        title: "Monocular",
        description: "A bronze monocular",
        video: "assets/videos/monocular.gif"
    },
    {
        title: "Ornithopter",
        description: "An ornithopter",
        video: "assets/videos/ornithopter.gif"
    },
    {
        title: "Pizza cutter",
        description: "A pizza cutter with a red handle",
        video: "assets/videos/pizza_cutter.gif"
    }
];

{/* <div class="col justify-content-center align-middle">
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
</div> */}

function makeDemos() {
    demos.forEach((demo) => {
        const $card = $(`<div class="col justify-content-center align-middle"></div>`);
        const $innerCard = $(`<div class="card border-1 m-2"></div>`);
        const $cardImage = $(`<div class="card-image text-center"></div>`);
        const $image = $(`<img src="${demo.video}" style="width: 100%;">`);
        $cardImage.append($image);
        const $backgroundEffect = $(`<div class="backgroundEffect"></div>`);
        const $cardBody = $(`<div class="card-body text-center"></div>`);
        const $cardTitle = $(`<h5 class="card-title"></h5>`)
            .html(demo.title);
        const $cardText = $(`<div class="card-text text-prompt"></div>`)
            .html(`"${demo.description}"`);
        $cardBody.append($cardTitle, $cardText);
        $innerCard.append($cardImage, $backgroundEffect, $cardBody);
        $card.append($innerCard);
        $("#demos").append($card);
    });
}