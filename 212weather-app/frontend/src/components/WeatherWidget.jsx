import React, { useEffect } from 'react';

const WeatherWidget = ({ cityId, appid, units }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js`;
    script.async = true;
    document.getElementById('openweathermap-widget-1').appendChild(script);
    window.myWidgetParam = window.myWidgetParam || [];
    window.myWidgetParam.push({
      id: 1,
      cityid: cityId,
      appid: appid,
      units: units,
      containerid: 'openweathermap-widget-1',
    });
  }, [cityId, appid, units]);

  return <div id="openweathermap-widget-1"></div>;
};

export default WeatherWidget;
