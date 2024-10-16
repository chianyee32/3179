var vg_1 = "map.json";
vegaEmbed("#map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "high.json";
vegaEmbed("#high", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "low.json";
vegaEmbed("#low", vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "highest_vs_average.json";
vegaEmbed("#highest_vs_average", vg_4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_5 = "difference.json";
vegaEmbed("#difference", vg_5).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_6 = "range.json";
vegaEmbed("#range", vg_6).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

fetch('map2.json')
  .then(response => response.json())
  .then(spec => {
    vegaEmbed('#map2', spec).then(res => {
        const view = res.view;
        let isPaused = false; 
        let currentYear = 1980;
        let interval;

        const updateYear = () => {
            if (currentYear > 2029) {
                currentYear = 1980; 
            } else {
                view.signal('year', currentYear).runAsync();
                currentYear++;
            }
        };

        const startAnimation = () => {
            interval = setInterval(() => {
                if (!isPaused) {
                    updateYear();
                }
            }, 500); 
        };

        startAnimation();

        document.getElementById('toggleAnimation').addEventListener('click', () => {
            isPaused = !isPaused;
            document.getElementById('toggleAnimation').textContent = isPaused ? 'Resume' : 'Pause';
            if (!isPaused && !interval) {
                startAnimation(); 
            }
        });

    }).catch(console.error);
});


var vg_8 = "salary_scatter.json";
vegaEmbed("#salary_scatter", vg_8).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
