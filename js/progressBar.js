$(document).ready(function () { 
    var currentGfgStep, nextGfgStep, previousGfgStep; 
    var opacity; 
    var current = 1; 
    // var steps = $("fieldset").length; 
    var steps = 4;

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function makeGenerationProgressBar(stepList, sleepTimeList) {
        const steps = stepList.length;
        
        // const 
        
        for (i = 0; i < steps; i++) {
            $(".progressbar li").eq(i).addClass("active");
            await sleep(sleepTimeList[i]);
        }
    };
  
    $("#start").click(async function () {
        for (i = 0; i < steps; i++) {
            $(".progressbar li").eq(i).addClass("active");
            await sleep(500);
        }
    });

    $("#reset").click(function () {
        $(".progressbar li").eq(0).addClass("active");
        for (i = 1; i < steps; i++) {
            $(".progressbar li").eq(i).removeClass("active");
        }
        // setProgressBar(1);
    });

    $(".next-step").click(function () { 
  
        currentGfgStep = $(this).parent(); 
        nextGfgStep = $(this).parent().next(); 
  
        $(".progressbar li").eq($("fieldset") 
            .index(nextGfgStep)).addClass("active"); 
  
        nextGfgStep.show(); 
        currentGfgStep.animate({ opacity: 0 }, { 
            step: function (now) { 
                opacity = 1 - now; 
  
                currentGfgStep.css({ 
                    'display': 'none', 
                    'position': 'relative'
                }); 
                nextGfgStep.css({ 'opacity': opacity }); 
            }, 
            duration: 500 
        }); 
        setProgressBar(++current); 
    }); 
  
    $(".previous-step").click(function () { 
  
        currentGfgStep = $(this).parent(); 
        previousGfgStep = $(this).parent().prev(); 
  
        $(".progressbar li").eq($("fieldset") 
            .index(currentGfgStep)).removeClass("active"); 
  
        previousGfgStep.show(); 
  
        currentGfgStep.animate({ opacity: 0 }, { 
            step: function (now) { 
                opacity = 1 - now; 
  
                currentGfgStep.css({ 
                    'display': 'none', 
                    'position': 'relative'
                }); 
                previousGfgStep.css({ 'opacity': opacity }); 
            }, 
            duration: 500 
        }); 
        setProgressBar(--current); 
    }); 
  
    function setProgressBar(idx, duration) { 
        duration = duration || 500;
        var percent = parseFloat(100 / steps) * idx; 
        percent = percent.toFixed(); 
        $(".progress-bar") 
            .animate({ width: percent + "%" }, duration);
    } 
  
    $(".submit").click(function () { 
        return false; 
    }) 
}); 