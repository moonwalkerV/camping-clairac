/* Météo du camping (Open-Meteo : gratuit, sans clé ni cookie). Coordonnées du domaine de Clairac. */
(function () {
  var blocs = document.querySelectorAll("[data-meteo]");
  if (!blocs.length) return;
  var url = "https://api.open-meteo.com/v1/forecast?latitude=43.3624&longitude=3.3191" +
    "&current=temperature_2m,weather_code,is_day,wind_speed_10m" +
    "&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FParis&forecast_days=6";
  function etat(code, jour) {
    if (code === 0) return jour === 0 ? ["lune", "Ciel dégagé"] : ["soleil", "Ensoleillé"];
    if (code <= 2) return ["eclaircie", "Éclaircies"];
    if (code === 3) return ["nuage", "Couvert"];
    if (code === 45 || code === 48) return ["brouillard", "Brouillard"];
    if (code >= 95) return ["orage", "Orageux"];
    if ((code >= 71 && code <= 77) || code === 85 || code === 86) return ["neige", "Neige"];
    return ["pluie", code <= 57 ? "Bruine" : "Pluie"];
  }
  function picto(nom) { return '<svg class="picto picto-meteo" aria-hidden="true"><use href="#m-' + nom + '"/></svg>'; }
  fetch(url).then(function (r) { if (!r.ok) throw 0; return r.json(); }).then(function (d) {
    var c = d.current, e = etat(c.weather_code, c.is_day), t = Math.round(c.temperature_2m);
    blocs.forEach(function (b) {
      if (b.dataset.meteo === "court") {
        b.innerHTML = picto(e[0]) + '<span><span class="meteo-titre">En ce moment au camping</span><strong>' + t + ' °C</strong> · ' + e[1].toLowerCase() + '</span>';
      } else {
        var jours = d.daily.time.slice(1).map(function (date, i) {
          var k = i + 1, ej = etat(d.daily.weather_code[k], 1);
          var nom = new Date(date + "T12:00:00").toLocaleDateString("fr-FR", { weekday: "short" }).replace(".", "");
          return '<li><span class="meteo-jour">' + nom + '</span>' + picto(ej[0]) + '<span class="cache-visuel">' + ej[1] + ', </span><span>' +
            Math.round(d.daily.temperature_2m_max[k]) + '°<span class="meteo-min"> / ' + Math.round(d.daily.temperature_2m_min[k]) + '°</span></span></li>';
        }).join("");
        b.innerHTML = '<div class="meteo-maintenant">' + picto(e[0]) + '<div><p class="meteo-titre">En ce moment</p><p class="meteo-temp">' + t + ' °C</p><p>' + e[1] + ' · vent ' + Math.round(c.wind_speed_10m) + ' km/h</p></div></div><ul class="meteo-jours">' + jours + '</ul>';
      }
      b.removeAttribute("aria-busy");
    });
  }).catch(function () {
    blocs.forEach(function (b) { if (b.dataset.meteo === "court") b.hidden = true; else b.innerHTML = '<p>La météo est indisponible pour le moment.</p>'; b.removeAttribute("aria-busy"); });
  });
})();
