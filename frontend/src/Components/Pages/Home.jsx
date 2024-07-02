import Education from "../../../public/Home.png";
import Course_BasisData from "../../../public/Course_BasisData.png";
import Course_Desain from "../../../public/Course_Desain.png";
import Course_Pemograman from "../../../public/Course_Pemograman.png";
import Course_Jaringan from "../../../public/Course_Jaringa.png";
import Section from "../Sections/Section";
import Paragraph from "../Sections/Paragraph";
import Title from "../Sections/Title";
import Button from "../Sections/Button";
import Card from "../Sections/Card";
import Footer from "../Footer";
import SubscriptionSection from "../Sections/SubscriptionSection";

const Home = () => {
  const subscriptionBenefits = [
    "Harga Terjangkau",
    "Free Modul pembelajaran dan Sertifikat",
    "Akses kapanpun dan dimanapun",
    "Video berkualitas HD",
    "Bebas berhenti berlangganan kapan saja",
  ];

  const subscriptionPackages = [
    {
      name: "Paket 1 Bulan",
      originalPrice: "Rp. 90.000",
      discountedPrice: "Rp. 10.000",
    },
    {
      name: "Paket 12 Bulan",
      originalPrice: "Rp. 1.080.000",
      discountedPrice: "Rp. 90.000",
    },
    {
      name: "Paket 6 Bulan",
      originalPrice: "Rp. 300.000",
      discountedPrice: "Rp. 50.000",
    },
  ];

  const courses = [
    {
      title: "Design Grafis",
      deskripsi: `Mempelajari desain grafis memiliki manfaat yang luas dalam era
    digital saat ini. Kemampuan untuk memahami prinsip-prinsip desain,
    komposisi visual, dan penggunaan perangkat lunak desain membantu
    seseorang dalam menyampaikan pesan secara efektif melalui gambar
    dan grafik. Selain itu, keterampilan desain grafis juga sangat
    diperlukan dalam berbagai industri, mulai dari periklanan, media
    sosial, hingga pengembangan produk, karena dapat meningkatkan daya
    tarik visual dan membantu membangun merek yang kuat.`,
      image: Course_Desain,
    },
    {
      title: "Basis Data",
      deskripsi:
        "Mempelajari Basis Data memiliki manfaat yang bagus di dunia digital",
      image: Course_BasisData,
    },
    {
      title: "Web Development",
      deskripsi: `Belajar web development adalah proses pembelajaran yang melibatkan berbagai aspek pembuatan dan 
      pemeliharaan situs web. Ini mencakup pemahaman tentang HTML, CSS, dan JavaScript, 
      yang merupakan fondasi dari semua situs web. HTML digunakan untuk membuat struktur konten, 
      CSS untuk menata tampilan, dan JavaScript untuk menambahkan interaktivitas. 
      Selain itu, web development juga melibatkan penggunaan framework dan library seperti React, 
      Angular, atau Vue.js untuk mempercepat pengembangan dan membuat aplikasi lebih efisien. 
      Backend development, yang mencakup server, database, dan aplikasi server-side, juga merupakan 
      bagian penting dari web development. `,
      image: Course_Pemograman,
    },
    {
      title: "Jaringan Komputer",
      deskripsi: `Mempelajari Jaringan Komputer memiliki manfaat yang luas dalam era
    digital saat ini.`,
      image: Course_Jaringan,
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl min-h-screen bg-blue-600 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32 my-10">
          <div className="space-y-6">
            <Title text="KURSUS ONLINE STUCODE" />
            <Paragraph text="Kembangkan Kemampuan Anda Di Dunia Digital Bersama STUCODE" />
            <Button text="Berlangganan" />
          </div>
        </div>
        <div className="order-1 w-full md:w-1/2">
          <img src={Education} className="w-92 h-92 rounded-s-sm" />
        </div>
      </div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex justify-center align-middle flex-col items-center md:items-start md:flex-row">
        <h2 className="text-blue-800 text-2xl font-bold">
          Kenapa Harus kursus di STUCODE?
        </h2>
      </div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col items-center md:items-start md:flex-row top-10">
        <Section
          title="Kategori kursus yang bervariasi"
          orderClass="order-2 md:order-1"
          containerClass="w-full md:w-1/2 mt-12 md:mt-32"
        />
        <Section
          title="Mendapatkan Sertifikat"
          orderClass="order-1"
          containerClass="w-full md:w-1/2 mt-12 md:mt-32"
        />
        <Section
          title="Pembelajaran Flexsibel"
          orderClass="order-1"
          containerClass="w-full md:w-1/2 mt-12 md:mt-32"
        />
      </div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col items-center md:items-start md:flex-row my-10">
        <h2 className="text-blue-800 text-2xl font-bold">Popular Kursus</h2>
      </div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col items-center md:items-start md:flex-row my-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          {courses.map((course) => (
            <Card
              key={course.title}
              title={course.title}
              image={course.image}
              deskripsi={course.deskripsi}
              hideDescription={true}
            />
          ))}
        </div>
      </div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex justify-center flex-col items-center md:items-start md:flex-row my-10">
        <h2 className="text-blue-800 text-1xl font-bold bg-white w-full outline rounded-md flex justify-center">
          Jelajahi Lebih Banyak Kursus
        </h2>
      </div>
      <div className="bg-blue-900 text-white py-10">
        <SubscriptionSection
          title="Ayo Berlangganan Sekarang"
          description="Pilih paket berlangganan yang sesuai kebutuhanmu"
          benefits={subscriptionBenefits}
          packages={subscriptionPackages}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
