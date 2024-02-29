    (function(vegaEmbed) {
      var spec = {"config": {"view": {"continuousWidth": 300, "continuousHeight": 300, "stroke": null}}, "data": {"name": "data-d0b16f6722db09f8ca9ad0b53bc58b8e"}, "mark": {"type": "line", "point": true}, "encoding": {"color": {"field": "CorRaca", "legend": {"orient": "bottom", "symbolType": "square"}, "scale": {"range": ["#F2BF92", "#EFE080", "#94713C", "#3F2818", "#B26A49"]}, "sort": ["Branca", "Amarela", "Parda", "Preta", "Ind\u00edgena"], "title": "Cor/Ra\u00e7a", "type": "nominal"}, "tooltip": [{"field": "Edi\u00e7\u00e3o", "type": "nominal"}, {"field": "CorRaca", "title": "Cor/Ra\u00e7a", "type": "nominal"}, {"field": "Taxa aprova\u00e7\u00e3o", "format": ".02f", "title": "Taxa de Aprova\u00e7\u00e3o (%)", "type": "quantitative"}], "x": {"axis": {"grid": false, "labelAngle": 0, "labelColor": "#888888", "labelFont": "Arial", "labelFontSize": 8, "titleAnchor": "start", "titleColor": "#888888", "titleFont": "Arial", "titleFontSize": 13, "titleFontWeight": "normal"}, "field": "Edi\u00e7\u00e3o", "type": "nominal"}, "y": {"axis": {"grid": false, "labelAngle": 0, "labelColor": "#888888", "labelFont": "Arial", "titleAnchor": "start", "titleColor": "#888888", "titleFont": "Arial", "titleFontSize": 13, "titleFontWeight": "normal"}, "field": "Taxa aprova\u00e7\u00e3o", "title": "Taxa de Aprova\u00e7\u00e3o (%)", "type": "quantitative"}}, "height": 200, "width": 400, "$schema": "https://vega.github.io/schema/vega-lite/v5.16.3.json", "datasets": {"data-d0b16f6722db09f8ca9ad0b53bc58b8e": [{"Edi\u00e7\u00e3o": "XXX", "CorRaca": "Amarela", "Aprovado": 284.0, "Reprovado": 1613.0, "Total": 1897.0, "Taxa aprova\u00e7\u00e3o": 14.971006852925672}, {"Edi\u00e7\u00e3o": "XXX", "CorRaca": "Branca", "Aprovado": 13300.0, "Reprovado": 61783.0, "Total": 75083.0, "Taxa aprova\u00e7\u00e3o": 17.713730138646564}, {"Edi\u00e7\u00e3o": "XXX", "CorRaca": "Ind\u00edgena", "Aprovado": 77.0, "Reprovado": 679.0, "Total": 756.0, "Taxa aprova\u00e7\u00e3o": 10.185185185185185}, {"Edi\u00e7\u00e3o": "XXX", "CorRaca": "Parda", "Aprovado": 6881.0, "Reprovado": 39535.0, "Total": 46416.0, "Taxa aprova\u00e7\u00e3o": 14.824629438124784}, {"Edi\u00e7\u00e3o": "XXX", "CorRaca": "Preta", "Aprovado": 1798.0, "Reprovado": 11275.0, "Total": 13073.0, "Taxa aprova\u00e7\u00e3o": 13.7535378260537}, {"Edi\u00e7\u00e3o": "XXXI", "CorRaca": "Amarela", "Aprovado": 316.0, "Reprovado": 1712.0, "Total": 2028.0, "Taxa aprova\u00e7\u00e3o": 15.581854043392504}, {"Edi\u00e7\u00e3o": "XXXI", "CorRaca": "Branca", "Aprovado": 17368.0, "Reprovado": 66534.0, "Total": 83902.0, "Taxa aprova\u00e7\u00e3o": 20.700340873876666}, {"Edi\u00e7\u00e3o": "XXXI", "CorRaca": "Ind\u00edgena", "Aprovado": 90.0, "Reprovado": 652.0, "Total": 742.0, "Taxa aprova\u00e7\u00e3o": 12.129380053908356}, {"Edi\u00e7\u00e3o": "XXXI", "CorRaca": "Parda", "Aprovado": 8199.0, "Reprovado": 41772.0, "Total": 49971.0, "Taxa aprova\u00e7\u00e3o": 16.407516359488504}, {"Edi\u00e7\u00e3o": "XXXI", "CorRaca": "Preta", "Aprovado": 2090.0, "Reprovado": 11993.0, "Total": 14083.0, "Taxa aprova\u00e7\u00e3o": 14.840587942909892}, {"Edi\u00e7\u00e3o": "XXXII", "CorRaca": "Amarela", "Aprovado": 562.0, "Reprovado": 2872.0, "Total": 3434.0, "Taxa aprova\u00e7\u00e3o": 16.365754222481073}, {"Edi\u00e7\u00e3o": "XXXII", "CorRaca": "Branca", "Aprovado": 29809.0, "Reprovado": 115586.0, "Total": 145395.0, "Taxa aprova\u00e7\u00e3o": 20.502080539220742}, {"Edi\u00e7\u00e3o": "XXXII", "CorRaca": "Ind\u00edgena", "Aprovado": 169.0, "Reprovado": 1150.0, "Total": 1319.0, "Taxa aprova\u00e7\u00e3o": 12.812736921910538}, {"Edi\u00e7\u00e3o": "XXXII", "CorRaca": "Parda", "Aprovado": 13683.0, "Reprovado": 72225.0, "Total": 85908.0, "Taxa aprova\u00e7\u00e3o": 15.927503841318618}, {"Edi\u00e7\u00e3o": "XXXII", "CorRaca": "Preta", "Aprovado": 3663.0, "Reprovado": 21511.0, "Total": 25174.0, "Taxa aprova\u00e7\u00e3o": 14.55072694049416}, {"Edi\u00e7\u00e3o": "XXXIII", "CorRaca": "Amarela", "Aprovado": 609.0, "Reprovado": 1776.0, "Total": 2385.0, "Taxa aprova\u00e7\u00e3o": 25.534591194968552}, {"Edi\u00e7\u00e3o": "XXXIII", "CorRaca": "Branca", "Aprovado": 29909.0, "Reprovado": 65615.0, "Total": 95524.0, "Taxa aprova\u00e7\u00e3o": 31.310456011054814}, {"Edi\u00e7\u00e3o": "XXXIII", "CorRaca": "Ind\u00edgena", "Aprovado": 162.0, "Reprovado": 724.0, "Total": 886.0, "Taxa aprova\u00e7\u00e3o": 18.284424379232505}, {"Edi\u00e7\u00e3o": "XXXIII", "CorRaca": "Parda", "Aprovado": 15062.0, "Reprovado": 43618.0, "Total": 58680.0, "Taxa aprova\u00e7\u00e3o": 25.668029993183367}, {"Edi\u00e7\u00e3o": "XXXIII", "CorRaca": "Preta", "Aprovado": 4291.0, "Reprovado": 13317.0, "Total": 17608.0, "Taxa aprova\u00e7\u00e3o": 24.369604725124944}, {"Edi\u00e7\u00e3o": "XXXIV", "CorRaca": "Amarela", "Aprovado": 371.0, "Reprovado": 2033.0, "Total": 2404.0, "Taxa aprova\u00e7\u00e3o": 15.43261231281198}, {"Edi\u00e7\u00e3o": "XXXIV", "CorRaca": "Branca", "Aprovado": 14288.0, "Reprovado": 65849.0, "Total": 80137.0, "Taxa aprova\u00e7\u00e3o": 17.829467037697945}, {"Edi\u00e7\u00e3o": "XXXIV", "CorRaca": "Ind\u00edgena", "Aprovado": 75.0, "Reprovado": 678.0, "Total": 753.0, "Taxa aprova\u00e7\u00e3o": 9.9601593625498}, {"Edi\u00e7\u00e3o": "XXXIV", "CorRaca": "Parda", "Aprovado": 7962.0, "Reprovado": 44143.0, "Total": 52105.0, "Taxa aprova\u00e7\u00e3o": 15.280683235773918}, {"Edi\u00e7\u00e3o": "XXXIV", "CorRaca": "Preta", "Aprovado": 2156.0, "Reprovado": 13566.0, "Total": 15722.0, "Taxa aprova\u00e7\u00e3o": 13.713268032056991}, {"Edi\u00e7\u00e3o": "XXXV", "CorRaca": "Amarela", "Aprovado": 535.0, "Reprovado": 2233.0, "Total": 2768.0, "Taxa aprova\u00e7\u00e3o": 19.328034682080926}, {"Edi\u00e7\u00e3o": "XXXV", "CorRaca": "Branca", "Aprovado": 20031.0, "Reprovado": 65158.0, "Total": 85189.0, "Taxa aprova\u00e7\u00e3o": 23.513599173602227}, {"Edi\u00e7\u00e3o": "XXXV", "CorRaca": "Ind\u00edgena", "Aprovado": 107.0, "Reprovado": 695.0, "Total": 802.0, "Taxa aprova\u00e7\u00e3o": 13.341645885286782}, {"Edi\u00e7\u00e3o": "XXXV", "CorRaca": "Parda", "Aprovado": 10088.0, "Reprovado": 44682.0, "Total": 54770.0, "Taxa aprova\u00e7\u00e3o": 18.418842431988313}, {"Edi\u00e7\u00e3o": "XXXV", "CorRaca": "Preta", "Aprovado": 2838.0, "Reprovado": 13745.0, "Total": 16583.0, "Taxa aprova\u00e7\u00e3o": 17.113911837423867}, {"Edi\u00e7\u00e3o": "XXXVI", "CorRaca": "Amarela", "Aprovado": 415.0, "Reprovado": 2249.0, "Total": 2664.0, "Taxa aprova\u00e7\u00e3o": 15.578078078078079}, {"Edi\u00e7\u00e3o": "XXXVI", "CorRaca": "Branca", "Aprovado": 13141.0, "Reprovado": 62357.0, "Total": 75498.0, "Taxa aprova\u00e7\u00e3o": 17.405759092956107}, {"Edi\u00e7\u00e3o": "XXXVI", "CorRaca": "Ind\u00edgena", "Aprovado": 74.0, "Reprovado": 587.0, "Total": 661.0, "Taxa aprova\u00e7\u00e3o": 11.195158850226928}, {"Edi\u00e7\u00e3o": "XXXVI", "CorRaca": "Parda", "Aprovado": 7249.0, "Reprovado": 44157.0, "Total": 51406.0, "Taxa aprova\u00e7\u00e3o": 14.10146675485352}, {"Edi\u00e7\u00e3o": "XXXVI", "CorRaca": "Preta", "Aprovado": 2067.0, "Reprovado": 13551.0, "Total": 15618.0, "Taxa aprova\u00e7\u00e3o": 13.23472915866308}, {"Edi\u00e7\u00e3o": "XXXVII", "CorRaca": "Amarela", "Aprovado": 711.0, "Reprovado": 2546.0, "Total": 3257.0, "Taxa aprova\u00e7\u00e3o": 21.829904820386858}, {"Edi\u00e7\u00e3o": "XXXVII", "CorRaca": "Branca", "Aprovado": 22774.0, "Reprovado": 68043.0, "Total": 90817.0, "Taxa aprova\u00e7\u00e3o": 25.07680280123765}, {"Edi\u00e7\u00e3o": "XXXVII", "CorRaca": "Ind\u00edgena", "Aprovado": 103.0, "Reprovado": 700.0, "Total": 803.0, "Taxa aprova\u00e7\u00e3o": 12.826899128268993}, {"Edi\u00e7\u00e3o": "XXXVII", "CorRaca": "Parda", "Aprovado": 12989.0, "Reprovado": 49618.0, "Total": 62607.0, "Taxa aprova\u00e7\u00e3o": 20.74688133914738}, {"Edi\u00e7\u00e3o": "XXXVII", "CorRaca": "Preta", "Aprovado": 3638.0, "Reprovado": 15505.0, "Total": 19143.0, "Taxa aprova\u00e7\u00e3o": 19.004335788538892}, {"Edi\u00e7\u00e3o": "XXXVIII", "CorRaca": "Amarela", "Aprovado": 392.0, "Reprovado": 2337.0, "Total": 2729.0, "Taxa aprova\u00e7\u00e3o": 14.364235983876878}, {"Edi\u00e7\u00e3o": "XXXVIII", "CorRaca": "Branca", "Aprovado": 12450.0, "Reprovado": 61722.0, "Total": 74172.0, "Taxa aprova\u00e7\u00e3o": 16.785309820417407}, {"Edi\u00e7\u00e3o": "XXXVIII", "CorRaca": "Ind\u00edgena", "Aprovado": 76.0, "Reprovado": 618.0, "Total": 694.0, "Taxa aprova\u00e7\u00e3o": 10.951008645533141}, {"Edi\u00e7\u00e3o": "XXXVIII", "CorRaca": "Parda", "Aprovado": 7267.0, "Reprovado": 45084.0, "Total": 52351.0, "Taxa aprova\u00e7\u00e3o": 13.88130121678669}, {"Edi\u00e7\u00e3o": "XXXVIII", "CorRaca": "Preta", "Aprovado": 2083.0, "Reprovado": 14186.0, "Total": 16269.0, "Taxa aprova\u00e7\u00e3o": 12.803491302477104}]}};
      var embedOpt = {"actions": false, "mode": "vega-lite"};

      function showError(el, error){
          el.innerHTML = ('<div style="color:red;">'
                          + '<p>JavaScript Error: ' + error.message + '</p>'
                          + "<p>This usually means there's a typo in your chart specification. "
                          + "See the javascript console for the full traceback.</p>"
                          + '</div>');
          throw error;
      }
      const el = document.getElementById('aprov_etnia_todas');
      vegaEmbed("#aprov_etnia_todas", spec, embedOpt)
        .catch(error => showError(el, error));
    })(vegaEmbed);