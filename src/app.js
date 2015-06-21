/**
 * BabelJs sitesinden alınmış örnek kod.
 * Değişken Tanımlama Let ve Const kullanımı.
 *
 * Bu dosyada Ecmascript6 kurallarıyla yazdığımız kodlar Npm ile kurduğumuz Babel sayesinde ecmascript5'e çevrilir.
 * Dönüştürülen dosya Build klasörüne taşınır.
 *
 * @author Birol Köklü <birolkoklu@gmail.com>
 * @package Example
 * @copyright BabelJs
 */

function f() {
  {
    let x;
    {
      // Burada değişkeni sabit olarak tanımladık.
      const x = "sabit değişken";

      // Bir üst satırsa sabit tanımlandığı için bu satır aktif olduğunda hata mesajı alırız. X değişkeninin sadece okunabilir bir değer olduğunu söyleyecektir hata bize.
      //x = "foo";
    }
    // Aynı şekilde let ile tanımlamaya çalışıldığında da hata alırız, fakat bu sefer x değişkenini birden fazla kez tanımladığımızı belirten bir hata alırız.
    //let x = "inner";
  }
}