/*
- 猫 35%、犬 30%、きりん 20%、その他 15%
- 円グラフのオプションには 幅100%、高さ300px を指定
*/
var pieData = {
    labels: ['cat', 'dog'],
    series: [65, 35]
};

var pieOptions = {
    with: '100%',
    height: '300px'
};

new Chartist.Pie('.animal-chart', pieData, pieOptions);
