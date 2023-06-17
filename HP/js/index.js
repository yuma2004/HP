 // ページが読み込まれた後に実行される関数
 window.onload = function() {

   // メインJPEG要素を取得
   var mainImage = document.getElementById('mainImage');

    // メインJPEGの画像パスを配列で定義
    var imagePaths = ['./main.jpg', './main..webp', './main3.jpg'];

   // メインJPEGをフェードインさせる関数
   function fadeInImage() {
     mainImage.style.opacity = '1';
     mainImage.style.transition = 'opacity 1s ease-in-out';
   }

   // メインJPEGをフェードアウトさせる関数
   function fadeOutImage() {
     mainImage.style.opacity = '0';
     mainImage.style.transition = 'opacity 1s ease-in-out';
   }

   // メインJPEGの初期設定（非表示）
   mainImage.style.opacity = '0';
   mainImage.style.transition = 'none';

   // メインJPEGの表示を切り替える関数
   function toggleImage() {
    var currentImageIndex = 0;

    function showNextImage() {
      mainImage.src = imagePaths[currentImageIndex];
      fadeInImage();

      setTimeout(function() {
        fadeOutImage();
        currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
        setTimeout(showNextImage, 1000); // 画像切り替えまでの待ち時間（ミリ秒）
      }, 3000); // フェードイン表示時間（ミリ秒）
    }

    showNextImage();
  }

   // メインJPEGの表示切り替えを開始
   toggleImage();

   // 画像要素のリストを取得
   var images = document.querySelectorAll('#photo ul li img');

    // 画像の表示を遅延させる関数
    function displayImagesSlowly(index) {
      // インデックスの範囲を確認
      if (index >= images.length) {
        return;
      }

      // インデックス番目の画像を表示する
      images[index].style.opacity = 1;

      // 次の画像を表示するまでの待ち時間（ミリ秒）
      var delay = 2000;

      // 次の画像を表示する前に、一定の待ち時間を設ける
      setTimeout(function() {
        // 次の画像のインデックス
        var nextIndex = index + 1;

        // 次の画像を表示する
        displayImagesSlowly(nextIndex);
      }, delay);
    }

    // すべての画像の表示を非表示にする
    for (var i = 0; i < images.length; i++) {
      images[i].style.opacity = 0;
    }

    // 最初の画像から表示を始める
    displayImagesSlowly(0);
};




