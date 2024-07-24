import { Helmet } from 'react-helmet'
export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>Gonca Akarsu | Healy Frekans Terapisi Uzmanı, Danışmanı & Sponsoru</title>
        <meta
          name="description"
          content="Gonca Akarsu olarak, frekans terapisi ve enerji dengeleme alanında uzmanlaşmış bir sağlık danışmanıyım. Bütünsel sağlık yaklaşımıyla kişiye özel çözümler sunuyorum."
        />
        <meta
          name="keywords"
          content="hakkımızda, gonca akarsu, frekans terapisi, enerji dengeleme, sağlık danışmanı, bütünsel sağlık, biyoenerji, enerji tıbbı"
        />
      </Helmet>

      <div className="flex flex-col justify-center items-center ">
        <div className=" flex max-h-96 relative mb-16">
          <div>
            <img
              src="./images/about-us11.jpg"
              alt="about-us"
              className="w-[100vw] max-h-[30rem]"
            />
          </div>
          <div className="absolute top-[50%] left-[50%]">
            {' '}
            <h1 className="text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Yaşamın için Frekanslar
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-10 w-[90%]">
          <div className="my-2">
            <h2 className="text-center text-3xl">Biz Kimiz</h2>
          </div>

          <div className="text-center text-xl my-2">
            <p>
              Hikâyemiz, sağlıklı ve tatmin edici bir yaşam arayan bireyler için
              daha iyi bir dünya yaratma arzusuyla başladı. Fiziksel, zihinsel
              ve duygusal esenliğe öncelik veren bir zihniyet değişimine ihtiyaç
              olduğunu fark ettik. Ve böylece, insanlık üzerinde daimi ve olumlu
              bir etki yaratma vizyonuyla yola çıktık.
            </p>
          </div>

          <div className="text-center text-xl my-2">
            <p>
              Doktorlar, bilim insanları ve mühendislerle iş birliği içinde,
              yaşamın için frekanslar sağlayan yaşamı iyileştirici ürünler
              tasarlıyoruz. Benzersiz çözümlerimiz denge, güven ve konforu
              teşvik ederek en iyi hâlini ortaya çıkarmanı amaçlamaktadır.
            </p>
          </div>

          <div className="text-center text-xl my-2">
            <p>
              Bir fark yaratma kararlılığıyla misyonumuz, insanları özgürlük,
              tutku ve neşe dolu bir hayata doğru gelişmeleri için
              güçlendirmektir.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-10 w-[90%]">
          <div className="flex flex-col justify-center items-center">
            <div>
              <img src="./images/marcus1.png" alt="marcus" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="my-2">
                <h2 className="text-4xl font-bold">Marcus Schmieke</h2>
              </div>

              <div className="my-2">
                <p className="text-xl font-semibold">
                  Healy Teknolojisinin Arkasındaki Adam
                </p>
              </div>

              <div>
                <p className="text-center text-xl my-2">
                  Marcus Schmieke, Healy World’ün kurucusu ve mucididir ve
                  şirket 2019 yılında faaliyete geçtiğinde şirketin vizyonunu
                  belirleyen kişidir. O zamandan bu yana Marcus kendini,
                  bütünsel esenliği dünyanın dört bir yanındaki bireyler için
                  erişilebilir kılmak üzere tasarlanan teknolojiyi geliştirip
                  ilerletmeye adamıştır.
                </p>
              </div>

              <div>
                <p className="text-center text-xl my-2">
                  Heidelberg ve Hannover’de fizik ve felsefe eğitimi alan
                  Marcus, dünyanın manevi yönüne dair derin içgörüler edinmek ve
                  bilinç hakkında bilgi edinmek için manastırlarda bir keşiş
                  hayatı yaşadığı Hindistan’a bir seyahat gerçekleştirdi. Alman
                  fizikçi Burkhard Heim, Rus fizikçi Nikolai Kozyrev ve diğer
                  uzman bilim adamlarının çalışmalarından aldığı ilhamla Marcus,
                  bilgi ve uzmanlığını Healy World ürünlerinin arkasındaki temel
                  konsepte entegre etti.
                </p>
              </div>

              <div>
                <p className="text-center text-xl my-2">
                  Marcus aynı zamanda TimeWaver’ın ve bilinç araştırmaları için
                  iki enstitünün de kurucusudur: Uygulamalı Bilinç Araştırmaları
                  Enstitüsü (IACR) ve Varoluşsal Bilinç Araştırmaları (ECR)
                  Enstitüsü. Bu alandaki adanmışlığının bir kanıtı olarak Marcus
                  zihin, madde ve diğer ruhani ve bilimsel konuların bağlantısı
                  hakkında 10 dilde 25 kitap yazmıştır. Bugüne kadar bilimsel,
                  felsefi ve tıbbi konularda dersler vermeye devam etmekte ve
                  dünya çapında binlerce kişiye daha bilinçli bir yaşam tarzına
                  doğru yolculuklarında ilham vermektedir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
