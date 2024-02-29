
(function(vegaEmbed) {
  var spec = {"config": {"view": {"continuousWidth": 300, "continuousHeight": 300, "stroke": null}}, "data": {"name": "data-20a1d8c3436a2dde200e3a44834ac2e4"}, "mark": {"type": "line", "point": true}, "encoding": {"color": {"field": "Metric", "legend": {"orient": "bottom", "symbolType": "square", "title": "Taxa de Participa\u00e7\u00e3o"}, "scale": {"range": ["#9B0A51", "#3BAE96"]}, "type": "nominal"}, "tooltip": [{"field": "Edi\u00e7\u00e3o", "type": "nominal"}, {"field": "Value", "format": ".02f", "title": "Taxa de Participa\u00e7\u00e3o (%)", "type": "quantitative"}], "x": {"axis": {"grid": false, "labelAngle": 0, "labelColor": "#888888", "labelFont": "Arial", "labelFontSize": 8, "titleAnchor": "start", "titleColor": "#888888", "titleFont": "Arial", "titleFontSize": 13, "titleFontWeight": "normal"}, "field": "Edi\u00e7\u00e3o", "type": "nominal"}, "y": {"axis": {"grid": false, "labelAngle": 0, "labelColor": "#888888", "labelFont": "Arial", "titleAnchor": "start", "titleColor": "#888888", "titleFont": "Arial", "titleFontSize": 13, "titleFontWeight": "normal"}, "field": "Value", "scale": {"domain": [0, 80]}, "title": "Taxa de Participa\u00e7\u00e3o (%)", "type": "quantitative"}}, "height": 200, "width": 400, "$schema": "https://vega.github.io/schema/vega-lite/v5.16.3.json", "datasets": {"data-20a1d8c3436a2dde200e3a44834ac2e4": [{"Edi\u00e7\u00e3o": "XXX", "Metric": "Feminino", "Value": 58.447255662109775}, {"Edi\u00e7\u00e3o": "XXXI", "Metric": "Feminino", "Value": 57.27165973369425}, {"Edi\u00e7\u00e3o": "XXXII", "Metric": "Feminino", "Value": 58.17833122155317}, {"Edi\u00e7\u00e3o": "XXXIII", "Metric": "Feminino", "Value": 59.07769457914246}, {"Edi\u00e7\u00e3o": "XXXIV", "Metric": "Feminino", "Value": 58.3883113531541}, {"Edi\u00e7\u00e3o": "XXXV", "Metric": "Feminino", "Value": 58.71702308384131}, {"Edi\u00e7\u00e3o": "XXXVI", "Metric": "Feminino", "Value": 59.412260793845604}, {"Edi\u00e7\u00e3o": "XXXVII", "Metric": "Feminino", "Value": 59.99252662390234}, {"Edi\u00e7\u00e3o": "XXXVIII", "Metric": "Feminino", "Value": 58.63215128406798}, {"Edi\u00e7\u00e3o": "XXX", "Metric": "Masculino", "Value": 41.552744337890225}, {"Edi\u00e7\u00e3o": "XXXI", "Metric": "Masculino", "Value": 42.72834026630575}, {"Edi\u00e7\u00e3o": "XXXII", "Metric": "Masculino", "Value": 41.82166877844683}, {"Edi\u00e7\u00e3o": "XXXIII", "Metric": "Masculino", "Value": 40.92230542085753}, {"Edi\u00e7\u00e3o": "XXXIV", "Metric": "Masculino", "Value": 41.611688646845906}, {"Edi\u00e7\u00e3o": "XXXV", "Metric": "Masculino", "Value": 41.28297691615869}, {"Edi\u00e7\u00e3o": "XXXVI", "Metric": "Masculino", "Value": 40.587739206154396}, {"Edi\u00e7\u00e3o": "XXXVII", "Metric": "Masculino", "Value": 40.00747337609765}, {"Edi\u00e7\u00e3o": "XXXVIII", "Metric": "Masculino", "Value": 41.36784871593201}]}};
  var embedOpt = {"actions": false, "mode": "vega-lite"};

  function showError(el, error){
      el.innerHTML = ('<div style="color:red;">'
                      + '<p>JavaScript Error: ' + error.message + '</p>'
                      + "<p>This usually means there's a typo in your chart specification. "
                      + "See the javascript console for the full traceback.</p>"
                      + '</div>');
      throw error;
  }
  const el = document.getElementById('per_part_genero_todas');
  vegaEmbed("#per_part_genero_todas", spec, embedOpt)
    .catch(error => showError(el, error));
})(vegaEmbed);