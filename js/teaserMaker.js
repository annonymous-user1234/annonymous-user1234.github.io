const teaserDemos = {
    helicopter: {
        name: "Red Helicopter",
        coords: "162,172,913,151,996,197,811,241,816,368,606,404,542,377,583,312,356,321,272,382,164,339,139,255",
        shape: "poly",
        description: "A bright red, small-scale helicopter with rotors",
        path: "assets/videos/teaser/helicopter.gif",
    },
    spaceship: {
        name: "Futuristic Aircraft",
        coords: "1150,458,1245,291,1254,183,1315,173,1345,281,1527,295,1614,349,1584,415,1194,507",
        shape: "poly",
        description: "A black-and-red sci-fi spaceship with sharp edges",
        path: "assets/videos/teaser/fighter_jet.gif",
    },
    missile: {
        name: "Missile Launcher",
        coords: "733,646,774,448,888,328,1015,412,1050,523,1052,612,906,677,896,645",
        shape: "poly",
        description: "a short description here",
        path: "assets/videos/teaser/missle_launcher.gif",
    },
    robot: {
        name: "R2-D2",
        coords: "469,560,542,463,666,526,657,729,613,750,586,685,517,706",
        shape: "poly",
        description: "R2-D2 droid from the \"Star Wars\" franchise",
        path: "assets/videos/teaser/r2d2.gif",
    },
    door: {
        name: "Turnstile Gate",
        coords: "128,693,397,600,509,703,384,752,389,805,304,936,228,956",
        shape: "poly",
        description: "A turnstile gate with rotating panels",
        path: "assets/videos/teaser/turnstile.gif",
    },
    trash: {
        name: "Trash Can",
        coords: "391,762,574,694,661,843,650,1016,535,1087,461,1041,395,841",
        shape: "poly",
        description: "A trash can with a lid",
        path: "assets/videos/teaser/trashcan.gif",
    },
    cabinet: {
        name: "Cabinet",
        coords: "684,653,664,707,681,850,723,850,781,821,806,870,908,851,893,651",
        shape: "poly",
        description: "a short description here",
        path: "assets/videos/teaser/cabinet.gif",
    },
    laptop: {
        name: "Laptop",
        coords: "662,894,776,831,810,912,874,953,759,1038,689,985",
        shape: "poly",
        description: "a short description here",
        path: "assets/videos/teaser/laptop.gif",
    },
    microphone: {
        name: "Microphone",
        coords: "888,934,849,866",
        shape: "rect",
        description: "a short description here",
        path: "assets/videos/teaser/microphone.gif",
    },
    cutter: {
        name: "Axe Saw",
        coords: "905,923,996,850,1035,879,928,936",
        shape: "poly",
        description: "a short description here",
        path: "assets/videos/teaser/cutter.gif",
    },
    knife: {
        name: "Utility Knife",
        coords: "984,918,925,953,928,1023,962,965,1006,940",
        shape: "poly",
        description: "a short description here",
        path: "assets/videos/teaser/utility_knife.gif",
    },
    mixer: {
        name: "Mixer",
        coords: "962,1001,1042,934,1030,897,1072,887,1123,921,1079,968,994,1024",
        shape: "poly",
        description: "a short description here",
        path: "assets/videos/teaser/mixer.gif",
    },
    grinder: {
        name: "Meat Grinder",
        coords: "1137,918,1254,963,1316,1035,1272,1124,1089,1035",
        shape: "poly",
        description: "a short description here",
        path: "assets/videos/teaser/meat_grinder.gif",
    },
    microwave: {
        name: "Microwave",
        coords: "1325,809,1518,887,1442,1031,1308,1012,1272,938,1274,877",
        shape: "poly",
        description: "a short description here",
        path: "assets/videos/teaser/microwave.gif",
    },
    oven: {
        name: "Oven",
        coords: "954,819,938,682,1123,573,1265,620,1243,837,1138,906",
        shape: "poly",
        description: "a short description here",
        path: "assets/videos/teaser/oven.gif",
    },
    car: {
        name: "Rusty Car",
        coords: "1320,523,1633,604,1911,765,1877,850,1728,933,1371,782,1267,687,1271,612,1196,584,1198,558",
        shape: "poly",
        description: "a short description here",
        path: "assets/videos/teaser/rusty_car.gif",
    },
};

function makeTeaserDemo(id) {
    const info = teaserDemos[id];

    const $area = $(`<area></area>`)
        .attr("target", "")
        .attr("href", "")
        .attr("alt", id)
        .attr("data-hover", `hoverCard-${id}`)
        .attr("data-bs-toggle", "modal")
        .attr("data-bs-target", `#videoModal-${id}`)
        .attr("coords", info.coords)
        .attr("shape", info.shape);
    
    const $hoverCard = $(`<div id="hoverCard-${id}"></div>`)
        .attr("class", "card")
        .css("display", "none")
        .css("min-width", "25%");
    const hoverCardHeader = $(`<div></div>`)
        .attr("class", "card-header bg-success text-light")
        .html(`${info.name} <span class="mx-1"><i class="fas fa-${id}"></i></span>`);
    const hoverCardBody = $(`<div></div>`)
        .attr("class", "card-body")
        .html(
            // `<p class="card-text m-0">${info.description}</p>
            `<p class="card-text text-success"><i>click to show video</i></p>`
        );
    $hoverCard.append(hoverCardHeader, hoverCardBody);

    const $modal = $(`<div id="videoModal-${id}"></div>`)
        .attr("class", "modal fade")
        .attr("tabindex", "-1")
        .attr("aria-labelledby", `videoModalLabel-${id}`)
        .attr("aria-hidden", "true");
    const $modalDialog = $(`<div></div>`)
        .attr("class", "modal-dialog modal-lg");
    const $modalContent = $(`<div></div>`)
        .attr("class", "modal-content");
    const modalHeader = $(`<div></div>`)
        .attr("class", "modal-header bg-success")
        .html(
            `<h5 class="modal-title text-light" id="videoModalLabel-${id}">${info.name}</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>`
        );
    const modalBody = $(`<div></div>`)
        .attr("class", "modal-body");
    const modalGif = $(`<img></img>`)
        .attr("src", info.path)
        .attr("class", "img-fluid");
    modalBody.append(modalGif);
    $modalContent.append(modalHeader, modalBody);
    $modalDialog.append($modalContent);
    $modal.append($modalDialog);

    $("map").append($area);
    $("#teaserCards").append($hoverCard);
    $("#teaserModals").append($modal);
}

function makeTeaser() {
    Object.keys(teaserDemos).forEach((id) => {
        makeTeaserDemo(id);
    });
}