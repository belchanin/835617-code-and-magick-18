'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var GAP = 10;
var BIG_GAP = GAP * 4;
var FONT_GAP = GAP * 2;
var BAR_GAP = GAP * 5;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, x, y, color, text) {
  ctx.font = '16px PT Mono';
  ctx.textBaseLine = 'hanging';
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

var renderRect = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx, CLOUD_X + FONT_GAP, CLOUD_Y + GAP + FONT_GAP, '#000', 'Ура вы победили!');
  renderText(ctx, CLOUD_X + FONT_GAP, CLOUD_Y + GAP + FONT_GAP * 2, '#000', 'Список результатов:');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    renderText(ctx, CLOUD_X + BIG_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP, '#000', names[i]);

    if (names[i] === 'Вы') {
      renderRect(ctx, CLOUD_X + BIG_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - BIG_GAP - BAR_HEIGHT + (BAR_HEIGHT - BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, BAR_HEIGHT * Math.floor(times[i]) / maxTime, 'rgba(255, 0, 0, 1)');
    } else {
      renderRect(ctx, CLOUD_X + BIG_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - BIG_GAP - BAR_HEIGHT + (BAR_HEIGHT - BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, BAR_HEIGHT * Math.floor(times[i]) / maxTime, 'hsl(240,' + Math.random() * 100 + '%, 50%)');
    }

    renderText(ctx, CLOUD_X + BIG_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - BIG_GAP - GAP - BAR_HEIGHT + (BAR_HEIGHT - BAR_HEIGHT * Math.floor(times[i]) / maxTime), '#000', Math.floor(times[i]));
  }
};
