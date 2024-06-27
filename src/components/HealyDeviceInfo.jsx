import React from 'react'

const HealyDeviceInfo = () => {
  return (
    <div className="w-[90%] h-[72.7vh] overflow-auto mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Healy Frequency Cihazı Nedir?
      </h1>
      <p className="mb-4 text-gray-700">
        Healy Frequency cihazı, sağlık ve wellness alanında kullanılan bir
        biyorezonans cihazıdır. Healy, Almanya merkezli bir şirket olan Healy
        World tarafından geliştirilmiştir ve mikro akım frekans (microcurrent
        frequency) teknolojisini kullanarak vücutta denge ve iyilik halini
        desteklemeyi amaçlar.
      </p>

      <h2 className="text-xl font-semibold text-blue-500 mt-4 mb-2">
        Temel Özellikler
      </h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Mikro Akım Frekans Teknolojisi</li>
        <li>Programlar ve Uygulamalar</li>
        <li>Taşınabilirlik</li>
        <li>Bağlantı ve Uygulama Desteği</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-500 mt-4 mb-2">
        Kullanım Alanları
      </h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Ağrı Yönetimi</li>
        <li>Stres ve Rahatlama</li>
        <li>Uyku Düzenleme</li>
        <li>Fitness ve Performans</li>
        <li>Cilt Sağlığı</li>
        <li>Zindelik ve Genel Sağlık</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-500 mt-4 mb-2">
        Healy'nin Bilimsel Temeli
      </h2>
      <p className="mb-4 text-gray-700">
        Healy cihazı, biyorezonans ve mikro akım terapisi gibi alanlardaki
        bilimsel araştırmalara dayanmaktadır. Bu teknolojilerin etkili olup
        olmadığı konusunda bilim dünyasında farklı görüşler bulunmaktadır.
        Ancak, kullanıcı deneyimleri ve bazı klinik çalışmalar, bu tür
        cihazların bazı kişilerde olumlu etkiler yaratabileceğini
        göstermektedir.
      </p>

      <h2 className="text-xl font-semibold text-blue-500 mt-4 mb-2">
        Kullanım ve Güvenlik
      </h2>
      <p className="mb-4 text-gray-700">
        Healy cihazının kullanımı genellikle güvenlidir, ancak herhangi bir
        tıbbi cihazda olduğu gibi, özellikle hamileler, kalp pili taşıyanlar
        veya ciddi sağlık sorunları olan kişiler cihazı kullanmadan önce
        doktorlarına danışmalıdır.
      </p>
    </div>
  )
}

export default HealyDeviceInfo
