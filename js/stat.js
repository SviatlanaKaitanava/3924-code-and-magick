'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var BAR_GAP = 50;
  var FONT_GAP = 18;
  var BAR_WIDTH = 40;
  var barHeight = 150;
  var COLOR_BLACK_TRANSLUCENT = 'rgba(0, 0, 0, 0.7)';
  var COLOR_BLACK = '#000000';
  var COLOR_WHITE = '#fff';
  var COLOR_RED = 'rgba(255, 0, 0, 1)';

  var renderCloun = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    return arr.sort(function (a, b) {
      return b - a;
    })[0];
  };

  window.stat = {
    renderStatistics: function (ctx, players, times) {
      renderCloun(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, COLOR_BLACK_TRANSLUCENT);
      renderCloun(ctx, CLOUD_X, CLOUD_Y, COLOR_WHITE);

      ctx.fillStyle = COLOR_BLACK;

      ctx.font = '16px PT Mono';
      ctx.textBaseline = 'hanging';
      ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
      ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 2);

      var maxTime = getMaxElement(times);

      players.forEach(function (player, index) {
        ctx.fillStyle = COLOR_BLACK;
        times[index] = Math.round(times[index]);
        ctx.fillText(times[index], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * index, CLOUD_HEIGHT - FONT_GAP - 16 - GAP - ((barHeight * times[index]) / maxTime) - GAP);
        ctx.fillText(players[index], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * index, CLOUD_HEIGHT - FONT_GAP);
        ctx.fillStyle = 'hsl(240, ' + Math.random() * (100 - 0) + 0 + '%, 50%)';
        if (players[index] === 'Вы') {
          ctx.fillStyle = COLOR_RED;
        }
        ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * index, CLOUD_HEIGHT - FONT_GAP - GAP - ((barHeight * times[index]) / maxTime), BAR_WIDTH, (barHeight * times[index]) / maxTime);
      });
    }
  };
})();
